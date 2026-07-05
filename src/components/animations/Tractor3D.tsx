"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Tractor3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const w = container.clientWidth;
    const h = container.clientHeight;

    const scene = new THREE.Scene();

    // ── CAMERA ────────────────────────────────────────────────────────────────
    const camera = new THREE.PerspectiveCamera(35, w / h, 0.1, 100);
    camera.position.set(10, 3.5, 10);
    camera.lookAt(0, 1.0, 0); // fixed — never changes

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.65));
    const dl = new THREE.DirectionalLight(0xffffff, 1.0);
    dl.position.set(10, 16, 8);
    scene.add(dl);
    const wl = new THREE.PointLight(0xfef08a, 1.2, 18); wl.position.set(2, 2, 0); scene.add(wl);

    const M = (c: number, r = 0.4, m = 0.5) => new THREE.MeshStandardMaterial({ color: c, roughness: r, metalness: m });
    const mO = M(0xf97316, 0.3, 0.6), mY = M(0xfacc15, 0.3, 0.4),
          mC = M(0xe5e7eb, 0.1, 1.0), mD = M(0x1c1c1e, 0.7, 0),
          mT = M(0x111111, 0.95, 0), mG = M(0xffffff, 0.05, 0);

    const tg = new THREE.Group();
    tg.rotation.y = 0.4;
    tg.scale.setScalar(0.42); // make it smaller
    scene.add(tg);

    const mk = (g: THREE.BufferGeometry, m: THREE.Material, x: number, y: number, z: number) => {
      const mesh = new THREE.Mesh(g, m); mesh.position.set(x, y, z); tg.add(mesh); return mesh;
    };

    mk(new THREE.BoxGeometry(4.6, 0.6, 1.8), mD, 0, 1.0, 0);
    mk(new THREE.BoxGeometry(0.28, 0.4, 2.5), mD, 2.4, 0.8, 0);
    mk(new THREE.BoxGeometry(1.6, 1.1, 1.5), mO, 0.6, 1.65, 0);
    mk(new THREE.BoxGeometry(0.58, 1.1, 1.5), mY, 1.7, 1.65, 0);
    mk(new THREE.BoxGeometry(0.05, 0.9, 1.3), mD, 2.0, 1.65, 0);
    const hlg = new THREE.CylinderGeometry(0.18, 0.18, 0.1, 14); hlg.rotateZ(Math.PI / 2);
    mk(hlg, mG, 2.02, 1.7, 0.42); mk(hlg, mG, 2.02, 1.7, -0.42);

    const cn = new THREE.Group(); cn.position.set(-1, 1.3, 0); tg.add(cn);
    const pg = new THREE.CylinderGeometry(0.08, 0.08, 2.1);
    [[-0.8, 0.65], [0.8, 0.65], [-0.8, -0.65], [0.8, -0.65]].forEach(([px, pz]) => {
      const p = new THREE.Mesh(pg, mC); p.position.set(px, 1.05, pz); cn.add(p);
    });
    const rm = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.15, 1.6), mO); rm.position.y = 2.1; cn.add(rm);
    const sm = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.5, 0.8), mD); sm.position.set(-0.2, 0.25, 0); cn.add(sm);
    const sw = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.05, 8, 20), mD);
    sw.position.set(0.6, 0.75, 0); sw.rotation.set(0.5, Math.PI / 2, 0); cn.add(sw);

    const exg = new THREE.Group(); exg.position.set(1.1, 2.2, 0.45); tg.add(exg);
    const ep = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 1.8), mC); ep.position.y = 0.9; exg.add(ep);
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.35), mC);
    cap.position.set(0.08, 1.8, 0); cap.rotation.z = 0.5; exg.add(cap);

    const rwg = new THREE.CylinderGeometry(1.25, 1.25, 0.85, 24); rwg.rotateX(Math.PI / 2);
    const rhg = new THREE.CylinderGeometry(0.4, 0.4, 0.87, 12); rhg.rotateX(Math.PI / 2);
    const lg = new THREE.BoxGeometry(0.14, 0.12, 0.38);
    const buildRear = (px: number, py: number, pz: number) => {
      const wg = new THREE.Group(); wg.position.set(px, py, pz); tg.add(wg);
      wg.add(new THREE.Mesh(rwg, mT)); wg.add(new THREE.Mesh(rhg, mO));
      for (let i = 0; i < 12; i++) {
        const a = (i / 12) * Math.PI * 2, r = 1.27;
        const ll = new THREE.Mesh(lg, mT); ll.position.set(Math.sin(a) * r, Math.cos(a) * r, 0.2); ll.rotation.set(a, 0, Math.PI * 0.22); wg.add(ll);
        const lr = new THREE.Mesh(lg, mT); lr.position.set(Math.sin(a) * r, Math.cos(a) * r, -0.2); lr.rotation.set(a, 0, -Math.PI * 0.22); wg.add(lr);
      }
      return wg;
    };
    const rwL = buildRear(-1.2, 1.25, 1.25), rwR = buildRear(-1.2, 1.25, -1.25);

    const fwg = new THREE.CylinderGeometry(0.68, 0.68, 0.45, 20); fwg.rotateX(Math.PI / 2);
    const fhg = new THREE.CylinderGeometry(0.2, 0.2, 0.47, 12); fhg.rotateX(Math.PI / 2);
    const buildFront = (px: number, py: number, pz: number) => {
      const wg = new THREE.Group(); wg.position.set(px, py, pz); tg.add(wg);
      wg.add(new THREE.Mesh(fwg, mT)); wg.add(new THREE.Mesh(fhg, mC));
      [-0.14, 0, 0.14].forEach(z => { const rg = new THREE.TorusGeometry(0.695, 0.038, 7, 26); rg.rotateX(Math.PI / 2); const rb = new THREE.Mesh(rg, mT); rb.position.z = z; wg.add(rb); });
      return wg;
    };
    const fwL = buildFront(1.4, 0.68, 1.05), fwR = buildFront(1.4, 0.68, -1.05);

    const particles: { mesh: THREE.Mesh; vel: THREE.Vector3; life: number; max: number }[] = [];
    const skg = new THREE.SphereGeometry(0.12, 5, 5);
    const spawnSmoke = () => {
      const sp = new THREE.Vector3(); cap.getWorldPosition(sp); sp.y += 0.1;
      for (let i = 0; i < 2; i++) {
        const mat = new THREE.MeshBasicMaterial({ color: 0x4b5563, transparent: true, opacity: 0.55 });
        const mesh = new THREE.Mesh(skg, mat); mesh.position.copy(sp); mesh.scale.setScalar(0.4 + Math.random() * 0.8);
        scene.add(mesh);
        particles.push({ mesh, vel: new THREE.Vector3(-0.03 - Math.random() * 0.05, 0.07 + Math.random() * 0.08, (Math.random() - 0.5) * 0.04), life: 0, max: 30 + Math.random() * 20 });
      }
    };

    // ── Scroll tracking ───────────────────────────────────────────────────────
    // DOM structure: canvas-div → sticky-div → outer-section (300vh)
    // We need the OUTER section to compute how far through its total height we've scrolled.
    let scrollProgress = 0;

    const onScroll = () => {
      const outerSection = container?.parentElement?.parentElement;
      if (outerSection) {
        const rect = outerSection.getBoundingClientRect();
        const scrollable = outerSection.offsetHeight - window.innerHeight;
        if (scrollable > 0) {
          // rect.top goes from 0 down to -scrollable as we scroll through the 300vh section.
          scrollProgress = Math.max(0, Math.min(-rect.top / scrollable, 1));
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Start position — tractor off-screen LEFT; moves to off-screen RIGHT
    // With 0.42 scale and 35 FOV, travelling from -7.0 to 4.0 matches screen bounds perfectly without cutting off
    const SX = -7.0, EX = 4.0;
    tg.position.set(SX, -1.0, 0);

    const startTime = performance.now();
    let reqId: number;

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      const time = (performance.now() - startTime) / 1000;
      
      // Update progress directly inside the loop to ensure zero delay/stale values
      onScroll();
      const p = scrollProgress;

      tg.position.x = SX + p * (EX - SX);

      if (p > 0.01) {
        tg.position.y = -1.0 + Math.sin(time * 90) * 0.018;
        const dist = p * (EX - SX);
        // Correct rolling rotation accounting for tractor scale 0.42
        rwL.rotation.z = rwR.rotation.z = -(dist / (1.25 * 0.42));
        fwL.rotation.z = fwR.rotation.z = -(dist / (0.68 * 0.42));
        if (Math.random() < 0.4) spawnSmoke();
      } else {
        tg.position.y = -1.0;
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const pt = particles[i]; pt.mesh.position.add(pt.vel); pt.life++;
        pt.mesh.scale.multiplyScalar(1.03);
        (pt.mesh.material as THREE.MeshBasicMaterial).opacity = Math.max(0.55 * (1 - pt.life / pt.max), 0);
        if (pt.life >= pt.max) {
          scene.remove(pt.mesh);
          // ← DO NOT dispose pt.mesh.geometry — skg is shared across all particles.
          // It will be disposed once in the useEffect cleanup below.
          (pt.mesh.material as THREE.Material).dispose(); // each particle has its own material
          particles.splice(i, 1);
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const nw = container.clientWidth, nh = container.clientHeight;
      camera.aspect = nw / nh; camera.updateProjectionMatrix(); renderer.setSize(nw, nh);
      onScroll();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleResize);
      // Dispose shared smoke geometry here — once, on full unmount
      skg.dispose();
      // Dispose any remaining live particles
      particles.forEach(pt => (pt.mesh.material as THREE.Material).dispose());
      if (container?.contains(renderer.domElement)) container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none select-none z-0" />;
}
