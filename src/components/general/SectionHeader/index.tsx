"use client";

import styles from "./SectionHeader.module.css";
import Title from "@/components/general/Title";
import type {
  Alignment,
  TitleColor,
  TitleSize,
} from "@/components/general/Title";
import Eyebrow from "@/components/general/Eyebrow";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CSSProperties } from "react";
import { useRef } from "react";
import { useBodyReveal } from "@/hooks/useSplitReveal/presets";
import Subtitle from "../Subtitle";
import CTA, { type CTAProps } from "@/components/buttons/CTA";

type SectionHeaderCTA = CTAProps & {
  alignment?: Alignment;
};

type Props = {
  wrapperClassName?: string;
  className?: string;
  eyebrow?: string;
  title: string;
  titleSize?: TitleSize;
  titleAlignment?: Alignment;
  titleColor?: TitleColor;
  titleHighlightColor?: TitleColor;
  titleHighlightSlice?: [number, number];
  titleLineBreakBefore?: string;
  titleAs?: "h1" | "h2" | "h3";
  isPageTitle?: boolean;
  subtitle?: string;
  subtitleSize?: "small" | "medium" | "large";
  subtitleAlignment?: Alignment;
  subTitle?: string;
  subTitleSize?: "small" | "medium" | "large";
  subTitleAlignment?: Alignment;
  showLeftBorder?: boolean;
  linkText?: string;
  linkHref?: string;
  cta?: SectionHeaderCTA | SectionHeaderCTA[];
};

export default function SectionHeader({
  wrapperClassName,
  className,
  eyebrow,
  title,
  titleSize = "large",
  titleAlignment = "center",
  titleColor = "primaryLight",
  titleHighlightColor = "primaryColorLight",
  titleHighlightSlice,
  titleLineBreakBefore,
  titleAs = "h2",
  isPageTitle = false,
  subtitle,
  subtitleSize,
  subtitleAlignment,
  subTitle,
  subTitleSize = "medium",
  subTitleAlignment = "center",
  showLeftBorder = true,
  linkText,
  linkHref,
  cta,
}: Props) {
  const wrapperRef = useRef<HTMLElement | null>(null);
  const linkRef = useRef<HTMLParagraphElement | null>(null);
  const resolvedTitleSize: TitleSize = titleSize;
  const resolvedCtas = cta ? (Array.isArray(cta) ? cta : [cta]) : [];
  const ctaAlignment = resolvedCtas[0]?.alignment ?? titleAlignment;

  const subtitleSizeOpts: Record<"small" | "medium" | "large", "body" | "small" | "medium"> = {
    small: "body",
    medium: "small",
    large: "medium",
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

  const resolvedSubtitle = subtitle ?? subTitle;
  const resolvedSubtitleSize = subtitleSize ?? subTitleSize;
  const resolvedSubtitleAlignment = subtitleAlignment ?? subTitleAlignment;
  const resolvedTitleAs = isPageTitle ? "h1" : titleAs;
  const showLeftAccent = titleAlignment === "left" && showLeftBorder;
  const titleClassName = isPageTitle
    ? styles.title
    : `${styles.title} ${styles.sectionTitle}`;

  useBodyReveal(wrapperRef, linkRef, [linkText, linkHref]);

  return (
    <div
      className={`${styles.sectionHeaderWrapper} ${wrapperClassName ? wrapperClassName : ""}`}
    >
      {showLeftAccent ? (
        <div className={styles.leftVerticalLineWrapper}>
          <div className={styles.leftVerticalLine}></div>
        </div>
      ) : null}

      <header
        className={`${styles.wrapper} ${className ? className : ""} ${showLeftAccent ? styles.borderLeft : ""}`}
        ref={wrapperRef}
      >
        {eyebrow ? (
          <div className={styles.eyebrowWrap}>
            <Eyebrow text={eyebrow} alignment={titleAlignment} />
          </div>
        ) : null}

        <Title
          text={title}
          size={resolvedTitleSize}
          alignment={titleAlignment}
          color={titleColor}
          highlightColor={titleHighlightColor}
          highlightSlice={titleHighlightSlice}
          lineBreakBefore={titleLineBreakBefore}
          as={resolvedTitleAs}
          className={titleClassName}
        />

        {resolvedSubtitle ? (
          <Subtitle
            text={resolvedSubtitle}
            as="p"
            size={subtitleSizeOpts[resolvedSubtitleSize]}
            // color="primaryLightMuted"
            align={resolvedSubtitleAlignment}
            animation="body"
            className={styles.subTitle}
          />
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

        {resolvedCtas.length > 0 ? (
          <div
            className={styles.ctaWrap}
            style={{
              alignSelf: alignmentOpts[ctaAlignment].alignSelf,
            }}
          >
            {resolvedCtas.map((ctaItem, index) => (
              <CTA
                key={`${ctaItem.href}-${ctaItem.text}-${index}`}
                text={ctaItem.text}
                href={ctaItem.href}
                backgroundColor={ctaItem.backgroundColor}
                textColor={ctaItem.textColor}
                ariaLabel={ctaItem.ariaLabel}
                icon={ctaItem.icon}
                className={ctaItem.className}
              />
            ))}
          </div>
        ) : null}
      </header>
    </div>
  );
}
