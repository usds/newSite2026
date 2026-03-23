"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useMemo } from "react";
import styles from "./cta.module.css";
import { ArrowUpRight, ArrowRight } from "lucide-react";


export type ctaProps = {
  text: string;
  href: string;
  backgroundColor?: string;
  textColor?: string;
  ariaLabel?: string;
  icon?: "arrowUpRight" | "arrowRight" | undefined;
  className?: string;
};

export default function CTA({
  text,
  href,
  backgroundColor,
  textColor,
  ariaLabel,
  icon,
  className,
}: ctaProps) {
  const reduceMotion = useReducedMotion();
  const chars = useMemo(() => Array.from(text), [text]);

  const iconOpts = {
    "arrowUpRight": <ArrowUpRight />,
    "arrowRight": <ArrowRight />,
  };

  const renderChars = (side: "front" | "back") =>
    chars.map((char, index) => (
      <span
        key={`${side}-${index}-${char}`}
        className={styles.char}
        style={{ ["--char-index" as string]: index }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <motion.div
      className={`${styles.wrapper} ${className ?? ""}`}
      whileHover={reduceMotion ? undefined : { scale: 1.03 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
    >
      <Link
        href={href}
        className={styles.link}
        aria-label={ariaLabel ?? text}
        style={{
          backgroundColor: backgroundColor,
          color: textColor,
        }}
      >
        <span
          className={`${styles.text} ${reduceMotion ? styles.textReduced : ""}`}
          aria-hidden="true"
        >
          <span className={`${styles.line} ${styles.lineFront}`}>
            {renderChars("front")}
          </span>
          <span className={`${styles.line} ${styles.lineBack}`}>
            {renderChars("back")}
          </span>
        </span>

        {icon && iconOpts[icon] && (
          <span className={styles.ctaIcon}>
            {iconOpts[icon]}
          </span>
        )}
      </Link>
    </motion.div>
  );
}
