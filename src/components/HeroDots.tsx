import { useEffect, useRef } from 'react';
import { isLightTheme, mountScene, themeVar, trackPointer } from '../lib/webgl';

// A perspective field of points shaped like a rising performance curve.
// Waves are computed on the GPU; the cursor sends a ripple through the field.
const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uMouseStrength;
  uniform float uPixelRatio;
  uniform float uSize;
  attribute float aSeed;
  varying float vHeight;
  varying float vX;
  varying float vFade;

  void main() {
    vec3 p = position;
    float t = uTime * 0.00035;

    float h = sin(p.x * 0.35 + t * 1.6) * 0.42
            + sin(p.z * 0.55 - t * 1.2) * 0.32
            + sin((p.x + p.z) * 0.22 + t) * 0.5;
    // Gentle upward trend to the right, like a growth chart.
    h += smoothstep(-14.0, 14.0, p.x) * 0.9;

    float d = distance(p.xz, uMouse);
    h += uMouseStrength * exp(-d * d * 0.16) * 0.9 * sin(d * 1.7 - t * 14.0);

    p.y += h;
    vHeight = h;
    vX = p.x;
    vFade = (1.0 - smoothstep(9.0, 14.0, abs(p.x)))
          * smoothstep(-11.0, -5.0, p.z)
          * (1.0 - smoothstep(2.0, 4.5, p.z))
          // Quieter on the left where the headline and copy sit.
          * (0.15 + 0.85 * smoothstep(-6.0, 8.0, p.x));

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize * uPixelRatio * (0.7 + aSeed * 0.6) * (9.0 / -mv.z);
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform float uOpacity;
  varying float vHeight;
  varying float vX;
  varying float vFade;

  void main() {
    float disc = 1.0 - smoothstep(0.25, 0.5, length(gl_PointCoord - 0.5));
    vec3 color = mix(uColorA, uColorB, smoothstep(-12.0, 12.0, vX));
    color *= 0.75 + smoothstep(-0.8, 1.6, vHeight) * 0.45;
    float alpha = disc * vFade * uOpacity * (0.45 + smoothstep(-0.6, 1.4, vHeight) * 0.55);
    if (alpha < 0.01) discard;
    gl_FragColor = vec4(color, alpha);
  }
`;

export default function HeroDots() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = container.current;
    if (!host) return;
    const section = host.parentElement ?? host;

    return mountScene(host, ({ THREE, renderer }) => {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
      camera.position.set(0, 3.4, 9.5);
      camera.lookAt(0, 1.3, -1.5);

      const cols = 150;
      const rows = 64;
      const positions = new Float32Array(cols * rows * 3);
      const seeds = new Float32Array(cols * rows);
      for (let z = 0, i = 0; z < rows; z++) {
        for (let x = 0; x < cols; x++, i++) {
          positions[i * 3] = (x / (cols - 1) - 0.5) * 30;
          positions[i * 3 + 1] = 0;
          positions[i * 3 + 2] = -11 + (z / (rows - 1)) * 15;
          seeds[i] = Math.random();
        }
      }
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1));

      const uniforms = {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(99, 99) },
        uMouseStrength: { value: 0 },
        uPixelRatio: { value: renderer.getPixelRatio() },
        uSize: { value: 3.2 },
        uColorA: { value: new THREE.Color() },
        uColorB: { value: new THREE.Color() },
        uOpacity: { value: 1 },
      };
      const material = new THREE.ShaderMaterial({ uniforms, vertexShader, fragmentShader, transparent: true, depthWrite: false });
      scene.add(new THREE.Points(geometry, material));

      const applyTheme = () => {
        const light = isLightTheme();
        uniforms.uColorA.value.set(themeVar('--gl-a', '#fb7185'));
        uniforms.uColorB.value.set(themeVar('--gl-b', '#c084fc'));
        uniforms.uOpacity.value = light ? 0.7 : 0.95;
        material.blending = light ? THREE.NormalBlending : THREE.AdditiveBlending;
        material.needsUpdate = true;
      };
      applyTheme();

      // Project the cursor onto the ground plane to place the ripple.
      const pointer = trackPointer(section);
      const raycaster = new THREE.Raycaster();
      const ground = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
      const hit = new THREE.Vector3();
      const ndc = new THREE.Vector2();
      const target2 = new THREE.Vector2();

      return {
        resize(width, height) {
          camera.aspect = width / height;
          // Keep the field wide enough on portrait screens.
          camera.fov = width < height ? 60 : 42;
          camera.updateProjectionMatrix();
        },
        frame(time) {
          uniforms.uTime.value = time;
          const target = pointer.state.inside ? 1 : 0;
          uniforms.uMouseStrength.value += (target - uniforms.uMouseStrength.value) * 0.04;
          if (pointer.state.inside) {
            raycaster.setFromCamera(ndc.set(pointer.state.x, pointer.state.y), camera);
            if (raycaster.ray.intersectPlane(ground, hit)) uniforms.uMouse.value.lerp(target2.set(hit.x, hit.z), 0.08);
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

  return (
    <div
      ref={container}
      aria-hidden="true"
      className="hero-gl pointer-events-none absolute inset-0 -z-10 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_35%,black_80%,transparent_100%)]"
    />
  );
}
