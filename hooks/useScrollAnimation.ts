'use client';
import { useEffect, useRef } from 'react';

export function useScrollAnimation<T extends HTMLElement>(
  options: { threshold?: number; rootMargin?: string } = {}
) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-animate');
          io.unobserve(el);
        }
      },
      {
        threshold: options.threshold ?? 0.15,
        rootMargin: options.rootMargin ?? '0px 0px -10% 0px',
      }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [options.threshold, options.rootMargin]);
  return ref;
}
