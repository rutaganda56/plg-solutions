"use client";

import { useEffect, useRef } from "react";

export default function ScrollReveal() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    el.querySelectorAll(".reveal").forEach((x) => obs.observe(x));
    return () => obs.disconnect();
  }, []);

  return <section ref={ref} className="sr-only" aria-hidden="true" />;
}