"use client";

import type { ReactNode } from "react";
import styles from "./HorizontalCards.module.css";
import ContentCard, { type Card } from "@/components/cards/ContentCard";

type Props = {
  cards: readonly Card[];
  className?: string;
  renderCard?: undefined;
};

type GenericProps<T> = {
  cards: readonly T[];
  className?: string;
  renderCard: (card: T, index: number) => ReactNode;
};

export default function HorizontalCards<T>({
  cards,
  className,
  renderCard,
}: Props | GenericProps<T>) {
  return (
    <div className={`${styles.wrapper} ${className ?? ""}`}>
      {cards.map((card, cardIdx) => {
        const contentCard = card as Card;
        const key = renderCard
          ? cardIdx
          : (contentCard.id ?? contentCard.title ?? cardIdx);

        return (
          <div
            className={`${styles.cardWrapper} ${cards.length === 3 ? styles.cardTri : ""} ${cards.length === 4 ? styles.cardQuad : ""} ${cards.length > 4 ? styles.cardOfMany : ""}`}
            key={key}
          >
            {renderCard ? (
              renderCard(card as T, cardIdx)
            ) : (
              <ContentCard card={contentCard} />
            )}
          </div>
        );
      })}
    </div>
  );
}
