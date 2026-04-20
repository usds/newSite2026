"use client";

import type { CSSProperties } from "react";
import { useRef } from "react";
import { useTitleReveal } from "@/hooks/useSplitReveal/presets";
import styles from "./Title.module.css";
import { motion } from "motion/react";

type Alignment = "left" | "center" | "right";
type TitleSize = "small" | "medium" | "large";
type TitleColor = "primaryLight" | "primaryColorLight" | "primaryLightMuted";
type HeadingTag = "h1" | "h2" | "h3";

type Props = {
  text: string;
  size?: TitleSize;
  alignment?: Alignment;
  color?: TitleColor;
  highlightColor?: TitleColor;
  highlightSlice?: [number, number];
  as?: HeadingTag;
  lineHeight?: CSSProperties["lineHeight"];
  className?: string;
};

const sizeOpts: Record<TitleSize, string> = {
  small: "var(--fs-h4)",
  medium: "var(--fs-h3)",
  large: "var(--fs-hero)",
};

const colorOpts: Record<TitleColor, string> = {
  primaryLight: "var(--primary-light)",
  primaryColorLight: "var(--primary-color-light)",
  primaryLightMuted: "var(--primary-light-muted)",
};

const alignmentOpts: Record<
  Alignment,
  {
    alignSelf: CSSProperties["alignSelf"];
    textAlign: CSSProperties["textAlign"];
  }
> = {
  left: {
    alignSelf: "flex-start",
    textAlign: "left",
  },
  center: {
    alignSelf: "center",
    textAlign: "center",
  },
  right: {
    alignSelf: "flex-end",
    textAlign: "right",
  },
};

export type { TitleColor, TitleSize, Alignment };

export default function Title({
  text,
  size = "large",
  alignment = "center",
  color = "primaryLight",
  highlightColor = "primaryColorLight",
  highlightSlice,
  as = "h2",
  lineHeight,
  className,
}: Props) {
  const scopeRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useTitleReveal(scopeRef, titleRef, []);

  const Tag = as;
  const classes = className ? `${styles.title} ${className}` : styles.title;

  let before = text;
  let highlight = "";
  let after = "";

  if (highlightSlice) {
    const start = Math.max(0, Math.min(highlightSlice[0], text.length));
    const end = Math.max(start, Math.min(highlightSlice[1], text.length));

    before = text.slice(0, start);
    highlight = text.slice(start, end);
    after = text.slice(end);
  }

  return (
    <motion.div
      ref={scopeRef}
      className={`${styles.wrapper} ${styles[alignment]}`}
      style={{ alignSelf: alignmentOpts[alignment].alignSelf }}
    >
      <Tag
        ref={titleRef}
        className={classes}
        style={{
          fontSize: sizeOpts[size],
          color: colorOpts[color],
          lineHeight: lineHeight ?? "var(--title-line-height, inherit)",
          textAlign: alignmentOpts[alignment].textAlign,
        }}
      >
        {highlight ? (
          <>
            <span>{before}</span>
            <span style={{ color: colorOpts[highlightColor] }}>{highlight}</span>
            <span>{after}</span>
          </>
        ) : (
          text
        )}
      </Tag>
    </motion.div>
  );
}
