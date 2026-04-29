"use client";

import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { motion } from "motion/react";
import SlotMachineValue from "@/components/general/SlotMachineValue";
import CardSurface, { type CardSurfaceTone } from "@/components/cards/CardSurface";
import { withBasePath } from "@/utils/basePath";
import styles from "./LongFeatureCard.module.css";

type SideTone = "blue" | "teal" | "gold" | "sky";

type LongFeatureCardProps = {
  className?: string;
  href?: string;
  eyebrow: string;
  title: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  sideValue?: string;
  sideText?: string;
  sideLabel?: string;
  animateSideValue?: boolean;
  sideTone?: SideTone;
  surface?: CardSurfaceTone;
  showBackground?: boolean;
  footer?: ReactNode;
};

type BackgroundStyle = CSSProperties & {
  ["--long-feature-image"]?: string;
};

const SIDE_TONE_CLASS: Record<SideTone, string> = {
  blue: styles.sideToneBlue,
  teal: styles.sideToneTeal,
  gold: styles.sideToneGold,
  sky: styles.sideToneSky,
};

export type { LongFeatureCardProps, SideTone };

export default function LongFeatureCard({
  className,
  href,
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  sideValue,
  sideText,
  sideLabel,
  animateSideValue,
  sideTone = "blue",
  surface,
  showBackground,
  footer,
}: LongFeatureCardProps) {
  const hasSideValue = Boolean(sideValue);
  const hasSideText = Boolean(sideText);
  const hasNumericValue = hasSideValue && /\d/.test(sideValue ?? "");
  const shouldAnimateValue = animateSideValue ?? hasNumericValue;
  const shouldUseCompactSideValue = (sideValue?.trim().length ?? 0) >= 8;
  const shouldShowBackground = showBackground ?? Boolean(imageSrc);
  const cardSurfaceTone: CardSurfaceTone = surface
    ?? (shouldShowBackground ? "background" : "plain");
  const sideValueClassName = `${styles.sideValue} ${
    shouldUseCompactSideValue ? styles.sideValueCompact : ""
  }`;
  const backgroundStyle: BackgroundStyle = imageSrc
    ? {
        ["--long-feature-image"]: `url("${withBasePath(imageSrc)}")`,
      }
    : {};

  const card = (
    <motion.article
      className={`${styles.wrapper} ${styles.motionFrame} ${className ?? ""}`}
      aria-label={imageAlt ?? `${title} showcase card`}
      initial={{
        y: 24,
        opacity: 0,
        scale: 0.98,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      <CardSurface
        tone={cardSurfaceTone}
        className={`${styles.card} ${!shouldShowBackground ? styles.cardNoBackground : ""}`}
      >
        {shouldShowBackground ? (
          <div className={styles.background} style={backgroundStyle} aria-hidden="true" />
        ) : null}

        <div className={styles.inner}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>{eyebrow}</p>
            <h3 className={styles.title}>{title}</h3>
            {description ? <p className={styles.description}>{description}</p> : null}

            {footer ? <div className={styles.footer}>{footer}</div> : null}
          </div>

          <div className={`${styles.side} ${SIDE_TONE_CLASS[sideTone]}`}>
            {hasSideValue ? (
              <>
                <p className={sideValueClassName}>
                  {shouldAnimateValue ? (
                    <SlotMachineValue value={sideValue ?? ""} animate className={styles.sideValueSlot} />
                  ) : (
                    sideValue
                  )}
                </p>
                {sideLabel ? <p className={styles.sideLabel}>{sideLabel}</p> : null}
              </>
            ) : hasSideText ? (
              <div className={styles.sideTextWrap}>
                {sideLabel ? <p className={styles.sideLabel}>{sideLabel}</p> : null}
                <p className={styles.sideText}>{sideText}</p>
              </div>
            ) : (
              <p className={styles.sideArrow} aria-hidden="true">
                {href ? "->" : ""}
              </p>
            )}
          </div>
        </div>
      </CardSurface>
    </motion.article>
  );

  if (!href) {
    return card;
  }

  return (
    <Link
      href={href}
      className={`${styles.wrapper} ${styles.link}`}
      aria-label={`${title} (${eyebrow})`}
    >
      {card}
    </Link>
  );
}
