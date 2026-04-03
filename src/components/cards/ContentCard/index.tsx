"use client";

import type { CSSProperties, ReactNode } from "react";
import styles from "./ContentCard.module.css";
import { motion } from "motion/react";
import type { BasicTextCard } from "@/types/cards";
import Subtitle from "@/components/general/Subtitle";

export type ContentCardProps = {
  card: Card;
};

export type Card = BasicTextCard & {
  eyebrow?: string;
  image?: ReactNode;
  subtitle?: string;
  footer?: ReactNode;
};

export default function ContentCard({ card }: ContentCardProps) {
  // const gradientStyle = {
  //   "--card-gradient-x": card.gradientPosition?.x ?? "20%",
  //   "--card-gradient-y": card.gradientPosition?.y ?? "80%",
  // } as CSSProperties;

  return (
    <motion.article
      className={styles.wrapper}
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
      <div className={styles.frame}>

        <div className={styles.content}>
          {card.eyebrow ? (
            <p className={styles.eyebrow}>{card.eyebrow}</p>
          ) : null}
          {card.subtitle ? (
            <p className={styles.subtitle}>{card.subtitle}</p>
          ) : null}
          <Subtitle
            text={card.title}
            as="h3"
            size="large"
            color="primaryColorLight"
            align="left"
            animation="title"
            className={styles.title}
          />

          <p className={styles.body}>{card.body}</p>

          {card.footer ? (
            <div className={styles.footer}>{card.footer}</div>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
