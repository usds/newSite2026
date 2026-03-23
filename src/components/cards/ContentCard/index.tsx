"use client";

import type { ReactNode } from "react";
import styles from "./ContentCard.module.css";
import { motion } from "motion/react";

export type ContentCardProps = {
  card: Card;
};

export type Card = {
  title: string;
  eyebrow?: string;
  image?: ReactNode;
  subtitle?: string;
  body?: string;
  footer?: ReactNode;
};

export default function ContentCard({ card }: ContentCardProps) {
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
      {card.image ? <div className={styles.image}>{card.image}</div> : null}

      <div className={styles.content}>
        {card.eyebrow ? <p className={styles.eyebrow}>{card.eyebrow}</p> : null}

        <h3 className={styles.title}>{card.title}</h3>

        {card.subtitle ? (
          <p className={styles.subtitle}>{card.subtitle}</p>
        ) : null}

        {card.body ? <p className={styles.body}>{card.body}</p> : null}

        {card.footer ? (
          <div className={styles.footer}>{card.footer}</div>
        ) : null}
      </div>
    </motion.article>
  );
}
