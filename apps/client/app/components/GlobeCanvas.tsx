"use client";

import { useEffect, useRef } from "react";

interface GlobeProps {
  cx?: number;
  cy?: number;
  scale?: number;
  offices?: boolean;
}

export default function GlobeCanvas({ cx = 0.5, cy = 0.5, scale = 0.44, offices = false }: GlobeProps) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = 0, height = 0, raf = 0;
    const points: { x: number; y: number; z: number; r: number; g: number; b: number }[] = [];
    let angle = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Build point cloud
      points.length = 0;
      const cols = 16;
      const rows = 10;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const u = (i / (cols - 1)) * Math.PI * 2;
          const v = (j / (rows - 1)) * Math.PI;
          points.push({
            x: Math.sin(v) * Math.cos(u),
            y: Math.sin(v) * Math.sin(u),
            z: Math.cos(v),
            r: 120 + Math.random() * 60,
            g: 180 + Math.random() * 60,
            b: 220 + Math.random() * 35,
          });
        }
      }
    };

    const draw = () => {
      if (!width) return;
      ctx.clearRect(0, 0, width, height);
      const cxp = width * cx;
      const cyp = height * cy;
      const radius = Math.min(width, height) * scale;

      for (const p of points) {
        // rotate around Y
        const cosA = Math.cos(angle);
        const sinA = Math.sin(angle);
        const x = p.x * cosA - p.z * sinA;
        const z = p.x * sinA + p.z * cosA;
        const y = p.y;

        const depth = (z + 1) / 2; // 0 back, 1 front
        const px = cxp + x * radius;
        const py = cyp + y * radius * 0.5;
        const size = depth * 2.2 + 0.4;
        const alpha = depth * 0.8 + 0.15;
        ctx.fillStyle = `rgba(${p.r},${p.g},${p.b},${alpha})`;
        ctx.fillRect(px, py, size, size);
      }

      if (offices) {
        const officePositions = [
          { x: 0.3, y: 0.2, code: "rw" },
          { x: 0.72, y: 0.45, code: "ng" },
          { x: 0.68, y: 0.18, code: "ae" },
        ];
        for (const o of officePositions) {
          const px = cxp + (o.x - 0.5) * radius * 2;
          const py = cyp + (o.y - 0.5) * radius * 1.4;
          ctx.fillStyle = "#0c566d";
          ctx.beginPath();
          ctx.arc(px, py, 4, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = "rgba(255,255,255,.9)";
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      }

      angle += reduce ? 0 : 0.006;
      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [cx, cy, scale, offices]);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="globe-canvas"
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}