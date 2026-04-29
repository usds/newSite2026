"use client";

import type { CSSProperties, ReactNode } from "react";
import { useRef } from "react";
import { useTitleReveal } from "@/hooks/useSplitReveal/presets";
import styles from "./Title.module.css";
import { motion } from "motion/react";

type Alignment = "left" | "center" | "right";
type TitleSize = "small" | "medium" | "large" | "heroChild";
type TitleColor = "primaryLight" | "primaryColorLight" | "primaryLightMuted";
type HeadingTag = "h1" | "h2" | "h3";

type Props = {
  text: string;
  size?: TitleSize;
  alignment?: Alignment;
  color?: TitleColor;
  highlightColor?: TitleColor;
  highlightSlice?: [number, number];
  lineBreakBefore?: string;
  as?: HeadingTag;
  className?: string;
};

const sizeOpts: Record<TitleSize, string> = {
  small: "var(--fs-h4)",
  medium: "var(--fs-h3)",
  large: "var(--fs-h1)",
  heroChild: "var(--fs-h1-child)",
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

const isNonWhitespace = (char?: string) => Boolean(char && /\S/.test(char));

function normalizeHighlightSlice(
  text: string,
  highlightSlice?: [number, number],
): [number, number] | null {
  if (!highlightSlice) return null;

  let start = Math.max(0, Math.min(highlightSlice[0], text.length));
  let end = Math.max(start, Math.min(highlightSlice[1], text.length));

  if (start === end) return null;

  while (start < end && !isNonWhitespace(text[start])) start += 1;
  while (end > start && !isNonWhitespace(text[end - 1])) end -= 1;

  if (start === end) return null;

  while (
    start > 0 &&
    isNonWhitespace(text[start]) &&
    isNonWhitespace(text[start - 1])
  ) {
    start -= 1;
  }

  while (
    end < text.length &&
    isNonWhitespace(text[end - 1]) &&
    isNonWhitespace(text[end])
  ) {
    end += 1;
  }

  while (start < end && !isNonWhitespace(text[start])) start += 1;
  while (end > start && !isNonWhitespace(text[end - 1])) end -= 1;

  return start < end ? [start, end] : null;
}

export type { TitleColor, TitleSize, Alignment };

export default function Title({
  text,
  size = "large",
  alignment = "center",
  color = "primaryLight",
  highlightColor = "primaryColorLight",
  highlightSlice,
  lineBreakBefore,
  as = "h2",
  className,
}: Props) {
  const scopeRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useTitleReveal(scopeRef, titleRef, []);

  const Tag = as;
  const classes = className ? `${styles.title} ${className}` : styles.title;
  const normalizedHighlightSlice = normalizeHighlightSlice(text, highlightSlice);

  const highlightStart = normalizedHighlightSlice
    ? normalizedHighlightSlice[0]
    : -1;
  const highlightEnd = normalizedHighlightSlice ? normalizedHighlightSlice[1] : -1;

  const lineBreakIndex =
    lineBreakBefore && lineBreakBefore.length > 0
      ? text.indexOf(lineBreakBefore)
      : -1;

  const renderRange = (start: number, end: number, keyPrefix: string) => {
    if (
      !normalizedHighlightSlice ||
      highlightEnd <= start ||
      highlightStart >= end
    ) {
      return text.slice(start, end);
    }

    const nodes: ReactNode[] = [];

    if (start < highlightStart) {
      nodes.push(
        <span key={`${keyPrefix}-pre`}>
          {text.slice(start, Math.min(end, highlightStart))}
        </span>,
      );
    }

    const hs = Math.max(start, highlightStart);
    const he = Math.min(end, highlightEnd);
    if (hs < he) {
      nodes.push(
        <span key={`${keyPrefix}-hl`} style={{ color: colorOpts[highlightColor] }}>
          {text.slice(hs, he)}
        </span>,
      );
    }

    if (highlightEnd < end) {
      nodes.push(
        <span key={`${keyPrefix}-post`}>
          {text.slice(Math.max(start, highlightEnd), end)}
        </span>,
      );
    }

    return nodes;
  };

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
          textAlign: alignmentOpts[alignment].textAlign,
        }}
      >
        {lineBreakIndex > 0 ? (
          <>
            {renderRange(0, lineBreakIndex, "line-1")}
            <br />
            {renderRange(lineBreakIndex, text.length, "line-2")}
          </>
        ) : normalizedHighlightSlice ? (
          <>
            {renderRange(0, text.length, "single")}
          </>
        ) : (
          text
        )}
      </Tag>
    </motion.div>
  );
}
