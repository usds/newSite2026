"use client";

import { useRef } from "react";
import { useBodyReveal, useTitleReveal } from "@/hooks/useSplitReveal/presets";
import styles from "./Subtitle.module.css";

type SubtitleSize = "small" | "medium" | "large";
type SubtitleColor = "primaryLight" | "primaryLightSubtle" | "primaryLightMuted";
type SubtitleAlign = "left" | "center" | "right";
type SubtitleTag = "h2" | "h3" | "h4" | "p";
type AnimationMode = "title" | "body" | "none";

type Props = {
  text: string;
  as?: SubtitleTag;
  size?: SubtitleSize;
  color?: SubtitleColor;
  align?: SubtitleAlign;
  animation?: AnimationMode;
  className?: string;
};

const sizeOpts: Record<SubtitleSize, string> = {
  small: "var(--fs-h5)",
  medium: "var(--fs-h4)",
  large: "var(--fs-h3)",
};

const colorOpts: Record<SubtitleColor, string> = {
  primaryLight: "var(--primary-light)",
  primaryLightSubtle: "var(--primary-light-subtle)",
  primaryLightMuted: "var(--primary-light-muted)",
};

export default function Subtitle({
  text,
  as = "h3",
  size = "medium",
  color = "primaryLightSubtle",
  align = "left",
  animation = "title",
  className,
}: Props) {
  const scopeRef = useRef<HTMLElement | null>(null);
  const textRef = useRef<HTMLHeadingElement | HTMLParagraphElement | null>(null);

  useTitleReveal(scopeRef, textRef, [animation], {
    enabled: animation === "title",
  });

  useBodyReveal(scopeRef, textRef, [animation], {
    enabled: animation === "body",
  });

  const Tag = as;
  const classes = className ? `${styles.subtitle} ${className}` : styles.subtitle;

  return (
    <section ref={scopeRef} className={styles.wrapper}>
      <Tag
        ref={textRef}
        className={classes}
        style={{
          fontSize: sizeOpts[size],
          color: colorOpts[color],
          textAlign: align,
        }}
      >
        {text}
      </Tag>
    </section>
  );
}
