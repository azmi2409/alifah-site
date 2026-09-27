import { useEffect, useRef } from 'react';

export default function HeroDots() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = container.current;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!host || motion.matches) return;
    let disposed = false;
    let cleanup = () => {};

    // ponytail: One small point cloud; upgrade to a richer scene only if portfolio needs 3D interaction.
    import('three').then(({ BufferAttribute, BufferGeometry, Color, PerspectiveCamera, Points, PointsMaterial, Scene, WebGLRenderer }) => {
      if (disposed) return;
      let renderer: InstanceType<typeof WebGLRenderer>;
      try {
        renderer = new WebGLRenderer({ alpha: true, antialias: false, powerPreference: 'low-power' });
      } catch {
        return; // Static gradient remains when WebGL is unavailable.
      }
      if (disposed) {
        renderer.dispose();
        return;
      }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setClearColor(0x000000, 0);
      renderer.domElement.setAttribute('aria-hidden', 'true');
      host.appendChild(renderer.domElement);

      const scene = new Scene();
      const camera = new PerspectiveCamera(55, 1, 0.1, 100);
      camera.position.z = 13;
      const positions = new Float32Array(58 * 32 * 3);
      let index = 0;
      for (let y = 0; y < 32; y++) {
        for (let x = 0; x < 58; x++) {
          const px = (x - 28.5) * 0.34;
          const py = (y - 15.5) * 0.34;
          positions[index++] = px;
          positions[index++] = py;
          positions[index++] = Math.sin(px * 0.55) * Math.cos(py * 0.6) * 0.7;
        }
      }
      const geometry = new BufferGeometry();
      geometry.setAttribute('position', new BufferAttribute(positions, 3));
      const material = new PointsMaterial({ color: new Color('#c77687'), size: 0.035, transparent: true, opacity: 0.65, depthWrite: false });
      const points = new Points(geometry, material);
      scene.add(points);
      const resize = () => {
        const { width, height } = host.getBoundingClientRect();
        if (!width || !height) return;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height, false);
      };
      const observer = new ResizeObserver(resize);
      observer.observe(host);
      resize();
      let frame = 0;
      let visible = true;
      const render = (time: number) => {
        points.rotation.z = Math.sin(time * 0.00014) * 0.09;
        points.rotation.x = Math.sin(time * 0.00022) * 0.1;
        renderer.render(scene, camera);
        frame = requestAnimationFrame(render);
      };
      const visibility = () => {
        cancelAnimationFrame(frame);
        if (!document.hidden && visible && !motion.matches) frame = requestAnimationFrame(render);
      };
      const intersection = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        visibility();
      });
      intersection.observe(host);
      document.addEventListener('visibilitychange', visibility);
      motion.addEventListener('change', visibility);
      frame = requestAnimationFrame(render);
      cleanup = () => {
        cancelAnimationFrame(frame);
        document.removeEventListener('visibilitychange', visibility);
        motion.removeEventListener('change', visibility);
        intersection.disconnect();
        observer.disconnect();
        geometry.dispose();
        material.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    }).catch(() => {});

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return <div ref={container} aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden opacity-65 [mask-image:linear-gradient(to_bottom,black_15%,transparent_95%)]" />;
}
