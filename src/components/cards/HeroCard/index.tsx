"use client";

import SlotMachineValue from "@/components/general/SlotMachineValue";
import styles from "./HeroCard.module.css";

type HeroCardTone = "blue" | "teal" | "gold" | "sky";
type HeroCardVariant = "framed" | "frameless";

type HeroCardProps = {
  label: string;
  value: string;
  tone?: HeroCardTone;
  variant?: HeroCardVariant;
  animateValue?: boolean;
  className?: string;
};

const VALUE_CLASSES: Record<HeroCardTone, string> = {
  blue: styles.valueBlue,
  teal: styles.valueTeal,
  gold: styles.valueGold,
  sky: styles.valueSky,
};

export type { HeroCardTone, HeroCardVariant, HeroCardProps };

export default function HeroCard({
  label,
  value,
  tone = "blue",
  variant = "framed",
  animateValue,
  className,
}: HeroCardProps) {
  const hasNumericValue = /\d/.test(value);
  const shouldAnimateValue = animateValue ?? hasNumericValue;

  return (
    <article
      className={`${styles.wrapper} ${
        variant === "frameless" ? styles.frameless : ""
      } ${className ?? ""}`}
    >
      <p className={styles.label}>{label}</p>

      {shouldAnimateValue ? (
        <SlotMachineValue
          value={value}
          animate
          className={`${styles.value} ${VALUE_CLASSES[tone]}`}
        />
      ) : (
        <p className={`${styles.value} ${VALUE_CLASSES[tone]}`}>{value}</p>
      )}

    </article>
  );
}
