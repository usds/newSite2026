"use client";

import type { CSSProperties, ReactNode } from "react";
import styles from "./ContentCard.module.css";
import { motion } from "motion/react";
import type { BasicTextCard } from "@/types/cards";
import Subtitle from "@/components/general/Subtitle";
import CardSurface, { type CardSurfaceTone } from "@/components/cards/CardSurface";
import type { AnimationMode } from "@/components/general/Subtitle";
import Title from "@/components/general/Title";

export type ContentCardProps = {
  card: Card;
};

export type Card = Omit<BasicTextCard, "body"> & {
  body?: string;
  eyebrow?: string;
  image?: ReactNode;
  subtitle?: string;
  footer?: ReactNode;
  stat?: string;
  statNode?: ReactNode;
  statColor?: string;
  statLabelColor?: string;
  surface?: CardSurfaceTone;
  titleAnimation?: AnimationMode;
  titleColor?: string;
  titleFontStyle?: CSSProperties["fontStyle"];
  titleFontWeight?: CSSProperties["fontWeight"];
  titleMinLines?: number;
  alignTitleBottom?: boolean;
};

export default function ContentCard({ card }: ContentCardProps) {
  const isStatCard = Boolean(card.stat);
  const surface: CardSurfaceTone = isStatCard
    ? card.surface ?? "background"
    : "plain";
  const isBackgroundSurface = surface === "background";
  const titleWrapperStyle: CSSProperties = {
    ...(card.titleColor
      ? { ["--content-card-title-color" as string]: card.titleColor }
      : {}),
    ...(card.titleFontStyle
      ? { ["--content-card-title-font-style" as string]: card.titleFontStyle }
      : {}),
    ...(card.titleFontWeight
      ? { ["--content-card-title-font-weight" as string]: card.titleFontWeight }
      : {}),
    ...(card.titleMinLines
      ? {
          ["--content-card-title-min-lines" as string]: String(
            Math.max(1, card.titleMinLines),
          ),
        }
      : {}),
    ...(card.alignTitleBottom
      ? { ["--content-card-title-align" as string]: "flex-end" }
      : {}),
  };
  const statStyle: CSSProperties = {
    ...(card.statColor
      ? { ["--content-card-stat-color" as string]: card.statColor }
      : {}),
    ...(card.statLabelColor
      ? { ["--content-card-stat-label-color" as string]: card.statLabelColor }
      : {}),
  };

  return (
    <motion.article
      className={`${styles.wrapper} ${isStatCard ? styles.stat : ""}`}
      style={Object.keys(statStyle).length > 0 ? statStyle : undefined}
      initial={{
        y: 20,
        opacity: 0,
        scale: 0.97,
      }}
      whileInView={{
        y: 0,
        // filter: "blur(0px)"
        opacity: 1,
        scale: 1,
      }}
      exit={{
        y: 20,
        opacity: 0,
        scale: 0.97,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      viewport={{
        amount: 0.2,
      }}
    >
      <CardSurface
        tone={surface}
        className={`${styles.frame} ${isStatCard ? styles.statFrame : ""} ${
          isBackgroundSurface ? styles.frameBackground : ""
        } ${!isBackgroundSurface ? styles.framePlain : ""}`}
      >
        <div className={styles.content}>
          {card.eyebrow ? (
            <p className={styles.eyebrow}>{card.eyebrow}</p>
          ) : null}
          {card.subtitle ? (
            <p className={styles.subtitle}>{card.subtitle}</p>
          ) : null}
          {isStatCard ? (
            <>
              <p className={styles.statValue}>{card.statNode ?? card.stat}</p>
              <p className={styles.statLabel}>{card.title}</p>
            </>
          ) : (
            <>
              {/* <Subtitle
                text={card.title}
                as="h3"
                size="large"
                color="primaryColorLight"
                align="left"
                animation={card.titleAnimation ?? "title"}
                className={styles.title}
                wrapperStyle={
                  Object.keys(titleWrapperStyle).length > 0
                    ? titleWrapperStyle
                    : undefined
                }
              /> */}
              <Title 
              text={card.title}
              size="medium"
              alignment="left"
              />

              {card.body ? <p className={styles.body}>{card.body}</p> : null}

              {card.footer ? (
                <div className={styles.footer}>{card.footer}</div>
              ) : null}
            </>
          )}
        </div>
      </CardSurface>
    </motion.article>
  );
}
