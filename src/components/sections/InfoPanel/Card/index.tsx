"use client";

import { useRef } from "react";
import styles from "./Card.module.css";
import Image from "next/image";

import { useTitleReveal, useBodyReveal } from "@/hooks/useSplitReveal/presets";
import usePerspectiveTilt from "@/hooks/usePerspectiveTilt";
import { INFO_PANEL_CARD_TEXT } from "@/text/ui";
import { withBasePath } from "@/utils/basePath";

type Props = {
  title: string;
  body: string;
  name: "whoWeAre" | "whatWeDo";
};

export default function Card({ title, body, name }: Props) {
  const cardRef = useRef<HTMLElement | null>(null);
  const tiltRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const bodyRef = useRef<HTMLElement | null>(null);

  useTitleReveal(cardRef, titleRef, []);
  useBodyReveal(cardRef, bodyRef, []);

  const images = INFO_PANEL_CARD_TEXT.images;

  usePerspectiveTilt({
    containerRef: cardRef,
    tiltRef,
    parallaxRefs: [imageRef],
    perspective: 650,
    rotateMax: 5,
    parallaxMax: 10,
    duration: 0.35,
  });

  return (
    <article className={styles.wrapper} ref={cardRef}>
      <div className={styles.wrapperInner}>
        <div ref={tiltRef} className={styles.imageWrapper}>
          <Image
            src={withBasePath(images[name].src)}
            alt={images[name].alt}
            fill
            className={styles.image}
            // Next/Image forwards this ref to the underlying <img />
            ref={imageRef}
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={false}
          />
        </div>

        <div className={styles.details}>
          <header className={styles.header}>
            <h2 className={styles.title} ref={titleRef}>
              {title}
            </h2>
          </header>

          <section ref={bodyRef} className={styles.body}>
            {body}
          </section>
        </div>
      </div>
    </article>
  );
}
