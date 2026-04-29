"use client";

import type { ReactNode } from "react";
import LongFeatureCard, { type SideTone } from "@/components/cards/LongFeatureCard";
import styles from "./WideHorizontalCards.module.css";

export type WideHorizontalCard = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  sideValue: string;
  sideLabel?: string;
  sideTone?: SideTone;
  footer?: ReactNode;
};

type WideHorizontalCardsProps = {
  cards: WideHorizontalCard[];
  className?: string;
  tones?: readonly SideTone[];
};

const DEFAULT_TONES: readonly SideTone[] = ["blue", "teal", "gold", "sky"];

export default function WideHorizontalCards({
  cards,
  className,
  tones = DEFAULT_TONES,
}: WideHorizontalCardsProps) {
  return (
    <div className={`${styles.wrapper} ${className ?? ""}`}>
      {cards.map((card, index) => (
        <LongFeatureCard
          key={card.id ?? `${card.title}-${index}`}
          eyebrow={card.eyebrow}
          title={card.title}
          description={card.description}
          imageSrc={card.imageSrc}
          imageAlt={card.imageAlt}
          sideValue={card.sideValue}
          sideLabel={card.sideLabel}
          sideTone={card.sideTone ?? tones[index % tones.length] ?? "blue"}
          animateSideValue={false}
          footer={card.footer}
        />
      ))}
    </div>
  );
}
