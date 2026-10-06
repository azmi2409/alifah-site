import { useEffect, useRef } from 'react';
import { isLightTheme, mountScene, themeVar, trackPointer } from '../lib/webgl';

// Flowing aurora gradient (fbm noise) with a soft light that follows the cursor.
const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uMouse;
  uniform float uMouseStrength;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform vec3 uColorC;
  uniform float uIntensity;
  varying vec2 vUv;

  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + 1.0), u.x), u.y);
  }
  float fbm(vec2 p) {
    float v = 0.0, a = 0.5;
    for (int i = 0; i < 5; i++) { v += a * noise(p); p = p * 2.03 + 11.7; a *= 0.5; }
    return v;
  }

  void main() {
    float aspect = uResolution.x / max(uResolution.y, 1.0);
    vec2 p = vec2(vUv.x * aspect, vUv.y);
    float t = uTime * 0.00006;

    // Domain-warped noise for slow, silky ribbons.
    vec2 q = vec2(fbm(p * 1.4 + t), fbm(p * 1.4 - t + 4.2));
    float n = fbm(p * 1.8 + q * 1.6 + vec2(t * 2.0, -t));

    vec3 color = mix(uColorA, uColorB, smoothstep(0.25, 0.75, n));
    color = mix(color, uColorC, smoothstep(0.55, 0.9, q.y) * 0.6);

    float ribbons = smoothstep(0.3, 0.72, n);
    vec2 m = vec2(uMouse.x * aspect, uMouse.y);
    float glow = exp(-distance(p, m) * 3.2) * uMouseStrength;

    float alpha = (ribbons * 0.75 + glow * 0.55) * uIntensity;
    // Fade toward the card edges so the panel border stays crisp.
    alpha *= smoothstep(0.0, 0.18, vUv.y) * smoothstep(0.0, 0.12, vUv.x) * smoothstep(0.0, 0.12, 1.0 - vUv.x);
    gl_FragColor = vec4(color + glow * 0.25, alpha);
  }
`;

export default function AuroraGL({ className = '' }: { className?: string }) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = container.current;
    if (!host) return;

    return mountScene(host, ({ THREE, renderer }) => {
      const scene = new THREE.Scene();
      const camera = new THREE.Camera();
      const uniforms = {
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(1, 1) },
        uMouse: { value: new THREE.Vector2(0.5, 0.5) },
        uMouseStrength: { value: 0 },
        uColorA: { value: new THREE.Color() },
        uColorB: { value: new THREE.Color() },
        uColorC: { value: new THREE.Color() },
        uIntensity: { value: 1 },
      };
      const geometry = new THREE.PlaneGeometry(2, 2);
      const material = new THREE.ShaderMaterial({ uniforms, vertexShader, fragmentShader, transparent: true, depthWrite: false });
      scene.add(new THREE.Mesh(geometry, material));

      const applyTheme = () => {
        uniforms.uColorA.value.set(themeVar('--gl-a', '#fb7185'));
        uniforms.uColorB.value.set(themeVar('--gl-b', '#c084fc'));
        uniforms.uColorC.value.set(themeVar('--gl-c', '#fbbf24'));
        uniforms.uIntensity.value = isLightTheme() ? 0.5 : 0.62;
      };
      applyTheme();

      const pointer = trackPointer(host);
      const target = new THREE.Vector2();

      return {
        resize(width, height) {
          uniforms.uResolution.value.set(width, height);
        },
        frame(time) {
          uniforms.uTime.value = time;
          uniforms.uMouseStrength.value += ((pointer.state.inside ? 1 : 0) - uniforms.uMouseStrength.value) * 0.05;
          if (pointer.state.inside) {
            uniforms.uMouse.value.lerp(target.set((pointer.state.x + 1) / 2, (pointer.state.y + 1) / 2), 0.1);
          }
          renderer.render(scene, camera);
        },
        theme: applyTheme,
        dispose() {
          pointer.dispose();
          geometry.dispose();
          material.dispose();
        },
      };
    });
  }, []);

  return <div ref={container} aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} />;
}
