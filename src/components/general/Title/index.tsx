"use client";

import { useRef } from "react";
import { useTitleReveal } from "@/hooks/useSplitReveal/presets";
import styles from "./Title.module.css";

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
  className?: string;
};

const sizeOpts: Record<TitleSize, string> = {
  small: "var(--fs-h4)",
  medium: "var(--fs-h3)",
  large: "var(--fs-h1)",
};

const colorOpts: Record<TitleColor, string> = {
  primaryLight: "var(--primary-light)",
  primaryColorLight: "var(--primary-color-light)",
  primaryLightMuted: "var(--primary-light-muted)",
};

const alignmentOpts = {
  left: {
    alignSelf: "flex-start",
    textAlign: "left" as const,
  },
  center: {
    alignSelf: "center",
    textAlign: "center" as const,
  },
  right: {
    alignSelf: "flex-end",
    textAlign: "right" as const,
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
    <div
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
    </div>
  );
}
