"use client";

import { useEffect, useRef, useState } from "react";
import SlotMachineValue from "@/components/general/SlotMachineValue";
import styles from "./HorizontalStatsList.module.css";

type HorizontalStatItem = {
  id?: string;
  value: string;
  label: string;
  animateValue?: boolean;
};

type HorizontalStatsLayout = "auto" | "short" | "long";

type HorizontalStatsListProps = {
  items: HorizontalStatItem[];
  className?: string;
  valueClassName?: string;
  labelClassName?: string;
  animateOnView?: boolean;
  layout?: HorizontalStatsLayout;
};

export type {
  HorizontalStatItem,
  HorizontalStatsLayout,
  HorizontalStatsListProps,
};

export default function HorizontalStatsList({
  items,
  className,
  valueClassName,
  labelClassName,
  animateOnView = true,
  layout = "auto",
}: HorizontalStatsListProps) {
  const listRef = useRef<HTMLUListElement | null>(null);
  const [hasEnteredView, setHasEnteredView] = useState(!animateOnView);

  useEffect(() => {
    if (!animateOnView || hasEnteredView) {
      return;
    }

    const node = listRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          setHasEnteredView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [animateOnView, hasEnteredView]);

  if (items.length === 0) {
    return null;
  }

  const shouldUseLongDetailLayout = layout === "long"
    || (layout === "auto" && items.some((item) => item.value.trim().length > 10));

  return (
    <ul
      ref={listRef}
      className={[
        styles.wrapper,
        shouldUseLongDetailLayout ? styles.longDetailLayout : styles.shortDetailLayout,
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {items.map((item, index) => {
        const hasNumericValue = /\d/.test(item.value);
        const shouldAnimateValue = hasEnteredView && (item.animateValue ?? hasNumericValue);

        return (
          <li
            key={item.id ?? `${item.label}-${item.value}-${index}`}
            className={styles.item}
          >
            <p className={[styles.value, valueClassName ?? ""].filter(Boolean).join(" ")}>
              {shouldAnimateValue ? (
                <SlotMachineValue
                  value={item.value}
                  animate
                  className={[styles.valueInline, valueClassName ?? ""].filter(Boolean).join(" ")}
                />
              ) : (
                item.value
              )}
            </p>
            <p className={[styles.label, labelClassName ?? ""].filter(Boolean).join(" ")}>
              {item.label}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
