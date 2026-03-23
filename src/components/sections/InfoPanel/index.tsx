"use client";

import styles from "./infoPanel.module.css";
import Card from "./Card";

type Props = {
  cards: Card[];
};

type Card = {
  header: string;
  body: string;
};

export default function InfoPanel({ cards }: Props) {
  return (
    <div className={styles.wrapper}>
      {cards.slice(0, 2).map((card, index) => (
        <Card
          key={card.header}
          header={card.header}
          body={card.body}
          name={index === 0 ? "whoWeAre" : "whatWeDo"}
        />
      ))}
    </div>
  );
}
