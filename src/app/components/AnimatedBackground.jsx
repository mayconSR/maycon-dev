"use client";
import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const ref = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const canvas = ref.current;
    const ctx = canvas.getContext("2d", { alpha: true });
    let w, h, rafId;

    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    const POINTS = Math.min(80, Math.floor(window.innerWidth / 16)); // leve em mobile
    const SPEED = 0.3;

    const points = Array.from({ length: POINTS }, () => ({
      x: Math.random(),
      y: Math.random(),
      z: Math.random(), // parallax fake
      vx: (Math.random() - 0.5) * SPEED,
      vy: (Math.random() - 0.5) * SPEED,
    }));

    function resize() {
      w = canvas.width = Math.floor(window.innerWidth * DPR);
      h = canvas.height = Math.floor(window.innerHeight * DPR);
      canvas.style.width = "100%";
      canvas.style.height = "100%";
    }
    resize();
    window.addEventListener("resize", resize);

    function step() {
      ctx.clearRect(0, 0, w, h);

      // cores suaves, funcionam bem no claro/escuro
      const fg = getComputedStyle(document.documentElement).color || "#888";
      ctx.fillStyle = fg + "55";
      ctx.strokeStyle = fg + "22";

      // atualiza
      for (const p of points) {
        p.x += p.vx / w * 60;
        p.y += p.vy / h * 60;
        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;
      }

      // desenha conexões curtas
      const maxDist = 0.12;
      for (let i = 0; i < points.length; i++) {
        const a = points[i];
        const ax = a.x * w, ay = a.y * h;
        for (let j = i + 1; j < points.length; j++) {
          const b = points[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < maxDist) {
            ctx.globalAlpha = (1 - d / maxDist) * 0.8;
            ctx.beginPath();
            ctx.moveTo(ax, ay);
            ctx.lineTo(b.x * w, b.y * h);
            ctx.stroke();
          }
        }
      }

      // desenha pontos
      ctx.globalAlpha = 1;
      for (const p of points) {
        const r = (1.2 + p.z * 1.2) * DPR;
        ctx.beginPath();
        ctx.arc(p.x * w, p.y * h, r, 0, Math.PI * 2);
        ctx.fill();
      }

      rafId = requestAnimationFrame(step);
    }

    rafId = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas aria-hidden className="bg-canvas" ref={ref} />;
}
