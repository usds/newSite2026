"use client";

import gsap from "gsap";
import Flip from "gsap/dist/Flip";
import styles from "./FlipGallery.module.css";
import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import {
  formatMissionSelectedImageLabel,
  formatMissionThumbnailImageLabel,
  MISSION_ORIGIN_STORY_UI_TEXT,
  type Item,
  type Items,
} from "@/text/mission";
import { flushSync } from "react-dom";
import { withBasePath } from "@/utils/basePath";

type Props = {
  items: Items;
};

gsap.registerPlugin(Flip);

export default function FlipGallery({ items }: Props) {
  const scopeRef = useRef<HTMLElement | null>(null);
  const [activeId, setActiveId] = useState<number>(() => items[0]?.id ?? 0);
  const [thumbnailIds, setThumbnailIds] = useState<number[]>(() =>
    items.slice(1).map((item) => item.id),
  );

  const itemsById = useMemo(
    () => new Map(items.map((item) => [item.id, item])),
    [items],
  );

  const activeItem = useMemo(
    () => itemsById.get(activeId) ?? items[0],
    [activeId, items, itemsById],
  );

  const thumbnails = useMemo(
    () =>
      thumbnailIds
        .map((id) => itemsById.get(id))
        .filter((item): item is Item => Boolean(item)),
    [itemsById, thumbnailIds],
  );

  const handleSelect = (nextId: number) => {
    if (!scopeRef.current || nextId === activeId) return;

    const clickedIndex = thumbnailIds.indexOf(nextId);
    const previousActiveId = activeItem?.id;

    if (clickedIndex === -1 || previousActiveId == null) return;

    const state = Flip.getState(
      scopeRef.current.querySelectorAll("[data-flip-id]"),
    );

    flushSync(() => {
      setActiveId(nextId);
      setThumbnailIds((prevIds) => {
        const nextIds = [...prevIds];
        nextIds[clickedIndex] = previousActiveId;
        return nextIds;
      });
    });

    Flip.from(state, {
      duration: 0.36,
      ease: "power2.out",
      nested: true,
      prune: true,
      scale: true,
    });
  };

  if (!activeItem) return null;

  return (
    <section className={styles.wrapper} ref={scopeRef}>
      <button
        type="button"
        className={`${styles.imageButton} ${styles.featuredItem}`}
        data-flip-id={`origin-story-image-${activeItem.id}`}
        onClick={() => {
          const nextItem = thumbnails[0];
          if (nextItem) {
            handleSelect(nextItem.id);
          }
        }}
        aria-label={formatMissionSelectedImageLabel(activeItem.alt)}
      >
        <Image
          alt={activeItem.alt}
          src={withBasePath(activeItem.src)}
          fill
          priority
          sizes="(max-width: 72em) 100vw, 34vw"
          className={`${styles.itemImage} ${styles.featuredImage}`}
        />
      </button>

      <div className={styles.thumbnailGrid} aria-label={MISSION_ORIGIN_STORY_UI_TEXT.galleryAriaLabel}>
        {thumbnails.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`${styles.imageButton} ${styles.thumbnailItem}`}
            data-flip-id={`origin-story-image-${item.id}`}
            onClick={() => handleSelect(item.id)}
            aria-label={formatMissionThumbnailImageLabel(item.alt)}
          >
            <Image
              alt={item.alt}
              src={withBasePath(item.src)}
              fill
              sizes="(max-width: 72em) 31vw, 11vw"
              className={styles.itemImage}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
