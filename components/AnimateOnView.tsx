"use client";

import { useEffect } from "react";

const selector = ".project, .timeline > li, .skill-grid article, .certs li, .section-head";

export function AnimateOnView() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const nodes = [...document.querySelectorAll<HTMLElement>(selector)];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.remove("will-animate");
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -6% 0px" }
    );

    nodes.forEach((node) => {
      const rect = node.getBoundingClientRect();
      const visible = rect.top < window.innerHeight * 0.9 && rect.bottom > 48;
      if (visible) {
        node.classList.add("is-in");
        return;
      }
      node.classList.add("will-animate");
      observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
