"use client";

import { motion } from "motion/react";
import styles from "./hiringFaq.module.css";

type FaqItemProps = {
  question: string;
  paragraphs: string[];
  bullets?: string[];
};

export default function FaqItem({ question, paragraphs, bullets }: FaqItemProps) {
  return (
    <motion.article
      className={styles.faqItem}
      layout
      initial={{
        y: 20,
        opacity: 0,
        scale: 0.97,
      }}
      whileInView={{
        y: 0,
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
      <div className={styles.faqItemInner}>
        <h3 className={styles.question}>{question}</h3>
        <div className={styles.answerGroup}>
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className={styles.answer}>
              {paragraph}
            </p>
          ))}

          {bullets ? (
            <ul className={styles.answerList}>
              {bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
