"use client";

import styles from "./SectionFrame.module.css";
import type { HTMLAttributes, ReactNode } from "react";

type Gap = "sm" | "md" | "lg" | "xl";
type Tone = "none" | "panel" | "soft";
type Tag = "section" | "div" | "article";

type Props = {
  as?: Tag;
  gap?: Gap;
  tone?: Tone;
  className?: string;
  children: ReactNode;
} & HTMLAttributes<HTMLElement>;

const gapMap: Record<Gap, string> = {
  sm: styles.gapSm,
  md: styles.gapMd,
  lg: styles.gapLg,
  xl: styles.gapXl,
};

const toneMap: Record<Tone, string> = {
  none: "",
  panel: styles.panel,
  soft: styles.soft,
};

export default function SectionFrame({
  as = "section",
  gap = "xl",
  tone = "none",
  className,
  children,
  ...rest
}: Props) {
  const Tag = as;

  return (
    <Tag
      className={`${styles.wrapper} ${styles.frame} ${gapMap[gap]} ${toneMap[tone]} ${
        className ?? ""
      }`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
