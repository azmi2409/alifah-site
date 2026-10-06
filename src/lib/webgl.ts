// Shared lifecycle for the decorative three.js canvases: lazy import, pause when
// offscreen or in a hidden tab, honour reduced motion, react to theme switches.
import type { WebGLRenderer } from 'three';

type Three = typeof import('three');

export interface SceneContext {
  THREE: Three;
  renderer: WebGLRenderer;
  host: HTMLElement;
}

export interface SceneHandle {
  resize(width: number, height: number): void;
  frame(time: number): void;
  theme?(): void;
  dispose(): void;
}

/** Read a CSS custom property from <html>, e.g. themeVar('--gl-a'). */
export const themeVar = (name: string, fallback: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;

export const isLightTheme = () => document.documentElement.dataset.theme === 'light';

/** Mounts a scene into `host`; returns a cleanup function. No-ops without WebGL or with reduced motion. */
export function mountScene(host: HTMLElement, build: (ctx: SceneContext) => SceneHandle): () => void {
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (motion.matches) return () => {};

  let disposed = false;
  let cleanup = () => {};

  import('three')
    .then((THREE) => {
      if (disposed) return;
      let renderer: WebGLRenderer;
      try {
        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false, powerPreference: 'low-power' });
      } catch {
        return; // CSS backgrounds remain when WebGL is unavailable.
      }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
      renderer.setClearColor(0x000000, 0);
      renderer.domElement.setAttribute('aria-hidden', 'true');
      renderer.domElement.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;';
      host.appendChild(renderer.domElement);

      const scene = build({ THREE, renderer, host });

      const resize = () => {
        const { width, height } = host.getBoundingClientRect();
        if (!width || !height) return;
        renderer.setSize(width, height, false);
        scene.resize(width, height);
      };
      const resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(host);
      resize();

      let raf = 0;
      let visible = true;
      const loop = (time: number) => {
        scene.frame(time);
        raf = requestAnimationFrame(loop);
      };
      const schedule = () => {
        cancelAnimationFrame(raf);
        if (visible && !document.hidden && !motion.matches) raf = requestAnimationFrame(loop);
      };
      const intersection = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        schedule();
      });
      intersection.observe(host);

      const onTheme = () => {
        scene.theme?.();
        if (!visible || document.hidden) scene.frame(performance.now());
      };
      document.addEventListener('visibilitychange', schedule);
      motion.addEventListener('change', schedule);
      window.addEventListener('themechange', onTheme);

      // Paint a first frame right away so the canvas is never blank, even before the loop starts.
      scene.frame(performance.now());
      requestAnimationFrame(() => renderer.domElement.classList.add('gl-ready'));
      schedule();

      cleanup = () => {
        cancelAnimationFrame(raf);
        document.removeEventListener('visibilitychange', schedule);
        motion.removeEventListener('change', schedule);
        window.removeEventListener('themechange', onTheme);
        intersection.disconnect();
        resizeObserver.disconnect();
        scene.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    })
    .catch(() => {});

  return () => {
    disposed = true;
    cleanup();
  };
}

/** Pointer position relative to `el` in normalized device coords (-1..1), or null when outside. */
export function trackPointer(el: HTMLElement) {
  const state = { x: 0, y: 0, inside: false };
  const onMove = (event: PointerEvent) => {
    const rect = el.getBoundingClientRect();
    state.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    state.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
    state.inside = Math.abs(state.x) <= 1 && Math.abs(state.y) <= 1;
  };
  const onLeave = () => (state.inside = false);
  window.addEventListener('pointermove', onMove, { passive: true });
  document.addEventListener('pointerleave', onLeave);
  return {
    state,
    dispose() {
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
    },
  };
}
