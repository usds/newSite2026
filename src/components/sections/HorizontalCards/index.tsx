"use client";

import type { ReactNode } from "react";
import styles from "./HorizontalCards.module.css";
import ContentCard, { type Card } from "@/components/cards/ContentCard";

type Props = {
  cards: Card[];
  className?: string;
  layout?: "segmented" | "grid";
  renderCard?: undefined;
};

type GenericProps<T> = {
  cards: T[];
  className?: string;
  layout?: "segmented" | "grid";
  renderCard: (card: T, index: number) => ReactNode;
};

export default function HorizontalCards<T>({
  cards,
  className,
  layout = "segmented",
  renderCard,
}: Props | GenericProps<T>) {
  return (
    <div className={`${styles.wrapper} ${layout === "grid" ? styles.gridLayout : ""} ${className ?? ""}`}>
      {cards.map((card, cardIdx) => {
        const contentCard = card as Card;
        const key = renderCard
          ? cardIdx
          : (contentCard.id ?? contentCard.title ?? cardIdx);

        return (
          <div
            className={`${styles.cardWrapper} ${layout === "grid" ? styles.cardGrid : ""} ${layout === "segmented" && cards.length === 3 ? styles.cardTri : ""} ${layout === "segmented" && cards.length === 4 ? styles.cardQuad : ""} ${layout === "segmented" && cards.length > 4 ? styles.cardOfMany : ""}`}
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
