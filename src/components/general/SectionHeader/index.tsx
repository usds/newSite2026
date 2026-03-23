"use client";

import styles from "./SectionHeader.module.css";
import Title from "@/components/general/Title";
import type { TitleColor, TitleSize, Alignment } from "@/components/general/Title";
import Eyebrow from "@/components/general/Eyebrow";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { useBodyReveal } from "@/hooks/useSplitReveal/presets";


type Props = {
  className?: string;
  eyebrow?: string;
  title: string;
  titleSize?: TitleSize;
  titleAlignment?: Alignment;
  titleColor?: TitleColor;
  titleHighlightColor?: TitleColor;
  titleHighlightSlice?: [number, number];
  titleAs?: "h1" | "h2" | "h3";
  subTitle?: string;
  subTitleSize?: "small" | "medium" | "large";
  subTitleAlignment?: Alignment;
  linkText?: string;
  linkHref?: string;
};

export default function SectionHeader({
  className,
  eyebrow,
  title,
  titleSize = "large",
  titleAlignment = "center",
  titleColor = "primaryLight",
  titleHighlightColor = "primaryColorLight",
  titleHighlightSlice,
  titleAs = "h2",
  subTitle,
  subTitleSize = "medium",
  subTitleAlignment = "center",
  linkText,
  linkHref,
}: Props) {
  const wrapperRef = useRef<HTMLElement | null>(null);
  const linkRef = useRef<HTMLParagraphElement | null>(null);

  const subTitleSizeOpts = {
    small: "var(--fs-body)",
    medium: "var(--fs-h5)",
    large: "var(--fs-h4)",
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

  useBodyReveal(wrapperRef, linkRef, [linkText, linkHref]);

  return (
    <header className={`${styles.wrapper} ${className ? className: ""}`} ref={wrapperRef}>
      {eyebrow ? (
        <div className={styles.eyebrowWrap}>
          <Eyebrow text={eyebrow} alignment={titleAlignment} />
        </div>
      ) : null}

      <Title
        text={title}
        size={titleSize}
        alignment={titleAlignment}
        color={titleColor}
        highlightColor={titleHighlightColor}
        highlightSlice={titleHighlightSlice}
        as={titleAs}
        className={styles.title}
      />

      {subTitle ? (
        <p
          className={styles.subTitle}
          style={{
            fontSize: subTitleSizeOpts[subTitleSize],
            alignSelf: alignmentOpts[subTitleAlignment].alignSelf,
            textAlign: alignmentOpts[subTitleAlignment].textAlign,
          }}
        >
          {subTitle}
        </p>
      ) : null}

      {linkText && linkHref ? (
        <p
          className={styles.linkWrap}
          ref={linkRef}
          style={{
            alignSelf: alignmentOpts[titleAlignment].alignSelf,
            textAlign: alignmentOpts[titleAlignment].textAlign,
          }}
        >
          <Link href={linkHref} className={styles.link}>
            {linkText}
            <ArrowRight size={18} />
          </Link>
        </p>
      ) : null}
    </header>
  );
}
