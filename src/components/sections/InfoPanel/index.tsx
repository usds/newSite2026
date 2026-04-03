"use client";

import styles from "./infoPanel.module.css";
import Card from "./Card";
import type { BasicTextCard } from "@/types/cards";

type Props = {
  cards: readonly BasicTextCard[];
};

export default function InfoPanel({ cards }: Props) {
  return (
    <div className={styles.wrapper}>
      {cards.slice(0, 2).map((card, index) => (
        <Card
          key={card.id ?? card.title}
          title={card.title}
          body={card.body}
          name={index === 0 ? "whoWeAre" : "whatWeDo"}
        />
      ))}
    </div>
  );
}
