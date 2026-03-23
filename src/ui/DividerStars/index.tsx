// DividerStars.tsx (GSAP version)
"use client";

import { useLayoutEffect, useRef } from "react";
import styles from "./dividerStars.module.css";
import { Star } from "lucide-react";
import gsap from "gsap";

const DURATION = 1;
const EASE = "expo.out"; // closest GSAP feel to your cubic-bezier

export default function DividerStars() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const leftRef = useRef<HTMLSpanElement | null>(null);
  const midRef = useRef<HTMLSpanElement | null>(null);
  const rightRef = useRef<HTMLSpanElement | null>(null);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    const left = leftRef.current;
    const mid = midRef.current;
    const right = rightRef.current;
    if (!wrapper || !left || !mid || !right) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    // One-time in-view trigger (no ScrollTrigger needed)
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        io.disconnect();

        if (reduceMotion) {
          gsap.set([left, mid, right], { clearProps: "all", opacity: 1, x: 0, filter: "blur(0px)" });
          return;
        }

        gsap.timeline({ defaults: { duration: DURATION, ease: EASE } })
          .fromTo(
            left,
            { x: -300, opacity: 0, filter: "blur(10px)" },
            { x: 0, opacity: 1, filter: "blur(0px)" },
            0
          )
          .fromTo(
            mid,
            { opacity: 0, filter: "blur(10px)" },
            { opacity: 1, filter: "blur(0px)" },
            0
          )
          .fromTo(
            right,
            { x: 300, opacity: 0, filter: "blur(10px)" },
            { x: 0, opacity: 1, filter: "blur(0px)" },
            0
          );
      },
      { threshold: 0.35 }
    );

    io.observe(wrapper);

    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrapperRef} className={styles.wrapper} aria-hidden="true">
      <div className={styles.stars}>
        <span ref={leftRef} className={`${styles.starPad} ${styles.left}`}>
          <Star className={styles.star} />
        </span>

        <span ref={midRef} className={`${styles.starPad} ${styles.mid}`}>
          <Star className={styles.star} />
        </span>

        <span ref={rightRef} className={`${styles.starPad} ${styles.right}`}>
          <Star className={styles.star} />
        </span>
      </div>
    </div>
  );
}
