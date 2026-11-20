"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const elements = new WeakSet<Element>();
    const pressAnimations = new WeakMap<Element, Animation>();
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let pageAnimationFrame = 0;
    let pageAnimation: Animation | null = null;
    let observer: IntersectionObserver | null = null;

    const animatePage = () => {
      cancelAnimationFrame(pageAnimationFrame);
      pageAnimationFrame = requestAnimationFrame(() => {
        const main = document.querySelector("main");
        if (!main) return;
        pageAnimation?.cancel();
        if (prefersReducedMotion) return;
        pageAnimation = main.animate(
          [
            { opacity: 0.72, transform: "translateY(10px)" },
            { opacity: 1, transform: "translateY(0)" },
          ],
          { duration: 650, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
        );
      });
    };

    const pressTarget = (event: PointerEvent) => {
      const node = event.target instanceof Element ? event.target : null;
      if (!node) return;

      const target =
        node.closest("[data-motion-card]") ??
        node.closest("[data-reveal-item]") ??
        node.closest("article") ??
        node.closest("a, button") ??
        node.closest("section");
      if (!target || prefersReducedMotion) return;

      pressAnimations.get(target)?.cancel();
      const animation = target.animate(
        [
          { transform: "scale(1) translateY(0)" },
          { transform: "scale(0.985) translateY(2px)", offset: 0.38 },
          { transform: "scale(1.012) translateY(-3px)", offset: 0.72 },
          { transform: "scale(1) translateY(0)" },
        ],
        { duration: 520, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
      );
      pressAnimations.set(target, animation);
      animation.onfinish = () => {
        if (pressAnimations.get(target) === animation) {
          pressAnimations.delete(target);
        }
        animation.cancel();
      };
    };

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            if (!prefersReducedMotion) {
              const siblings = entry.target.parentElement
                ? Array.from(entry.target.parentElement.children)
                : [];
              const itemIndex = siblings.indexOf(entry.target);
              const delay = entry.target.hasAttribute("data-reveal-item")
                ? Math.min(Math.max(itemIndex, 0) * 70, 350)
                : 0;
              const distance = entry.target.hasAttribute("data-reveal-item") ? 14 : 18;
              const animation = entry.target.animate(
                [
                  { opacity: 0, transform: `translateY(${distance}px)` },
                  { opacity: 1, transform: "translateY(0)" },
                ],
                {
                  duration: entry.target.hasAttribute("data-reveal-item") ? 600 : 700,
                  delay,
                  easing: "cubic-bezier(0.22, 1, 0.36, 1)",
                  fill: "both",
                }
              );
              animation.onfinish = () => animation.cancel();
            }

            observer?.unobserve(entry.target);
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
      );
    }

    const scan = () => {
      if (!observer) return;
      document.querySelectorAll("[data-reveal], [data-reveal-item]").forEach((el) => {
        if (elements.has(el)) return;
        elements.add(el);
        observer?.observe(el);
      });
    };

    scan();
    animatePage();
    document.addEventListener("pointerdown", pressTarget, { passive: true });
    const mutation = new MutationObserver(scan);
    mutation.observe(document.body, { childList: true, subtree: true });
    const routeMutation = new MutationObserver(animatePage);
    routeMutation.observe(document.querySelector("main") ?? document.body, {
      childList: true,
      subtree: false,
    });

    return () => {
      mutation.disconnect();
      routeMutation.disconnect();
      document.removeEventListener("pointerdown", pressTarget);
      cancelAnimationFrame(pageAnimationFrame);
      pageAnimation?.cancel();
      observer?.disconnect();
    };
  }, []);

  return null;
}