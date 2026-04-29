"use client";

import type { CSSProperties } from "react";
import styles from "./SlotMachineValue.module.css";
import { motion } from "motion/react";

const SLOT_SEQUENCE = Array.from({ length: 30 }, (_, index) => index % 10);

type SlotDigitProps = {
  digit: number;
  order: number;
  animate: boolean;
  delayMs: number;
};

function SlotDigit({ digit, order, animate, delayMs }: SlotDigitProps) {
  return (
    <span className={styles.slotWindow} aria-hidden="true">
      <motion.span
        className={`${styles.slotStrip} ${animate ? styles.slotStripActive : ""}`}
        style={
          {
            ["--slot-stop" as string]: String(20 + digit),
            ["--slot-delay" as string]: `${order * delayMs}ms`,
          } as CSSProperties
        }
      >
        {SLOT_SEQUENCE.map((slotDigit, slotIndex) => (
          <span className={styles.slotDigit} key={`${slotDigit}-${slotIndex}`}>
            {slotDigit}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

type SlotMachineValueProps = {
  value: string;
  animate: boolean;
  className?: string;
  digitDelayMs?: number;
};

export default function SlotMachineValue({
  value,
  animate,
  className,
  digitDelayMs = 80,
}: SlotMachineValueProps) {
  const classes = [styles.wrapper, styles.value, className ?? ""].filter(Boolean).join(" ");
  const characters = Array.from(value);

  if (!animate) {
    return <span className={classes}>{value}</span>;
  }

  return (
    <span className={classes} aria-label={value}>
      {characters.map((character, index) => {
        if (/^\d$/.test(character)) {
          const order = characters
            .slice(0, index)
            .filter((segment) => /^\d$/.test(segment)).length;
          return (
            <SlotDigit
              key={`digit-${index}-${character}`}
              digit={Number(character)}
              order={order}
              animate={animate}
              delayMs={digitDelayMs}
            />
          );
        }

        return (
          <span className={styles.staticChar} key={`char-${index}-${character}`}>
            {character === " " ? "\u00A0" : character}
          </span>
        );
      })}
    </span>
  );
}
