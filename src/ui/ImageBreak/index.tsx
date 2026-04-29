"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import styles from "./ImageBreak.module.css";
import { withBasePath } from "@/utils/basePath";

type ImageBreakProps = {
  src: string;
  alt?: string;
  height?: string | number;
  overlayColor?: string;
};

export default function ImageBreak({
  src,
  alt = "",
  height,
  overlayColor = "var(--primary-dark-panel-subtle-transparent)",
}: ImageBreakProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const resolvedSrc = withBasePath(src);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div className={`${styles.wrapper} ${styles.outer}`} aria-hidden="true">
      <div
        ref={ref}
        className={styles.frame}
        style={height ? { height } : undefined}
      >
        <div className={styles.fixedImageWrap}>
          <motion.img
            src={resolvedSrc}
            alt={alt}
            loading="lazy"
            className={styles.image}
            style={shouldReduceMotion ? undefined : { y }}
          />
        </div>
        <div className={styles.overlay} style={{ background: overlayColor }} />
        <div className={styles.accent} />
      </div>
    </div>
  );
}
