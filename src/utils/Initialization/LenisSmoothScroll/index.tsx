"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

export default function LenisSmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);
  const rafIdRef = useRef<number | null>(null);

  useLayoutEffect(() => {
    const lenis = new Lenis({
      lerp: 0.3,
      duration: 1.7,
      wheelMultiplier: 1,
      touchMultiplier: 1.1,
      gestureOrientation: "vertical",
      autoResize: true,
      infinite: false,
    });

    // let rafID: number;

    lenisRef.current = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      rafIdRef.current = requestAnimationFrame(raf);
    };

    rafIdRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }

      rafIdRef.current = null;

      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
  const id = requestAnimationFrame(() => {
    lenisRef.current?.scrollTo(0, { immediate: true });
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  });

  return () => {
    cancelAnimationFrame(id);
  };

}, [pathname]);

  return null;
}

