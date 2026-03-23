"use client";

import { useRef } from "react";
import SectionHeader from "@/components/general/SectionHeader";
import { useBodyReveal, useTitleReveal } from "@/hooks/useSplitReveal/presets";
import styles from "./ourValues.module.css";

type Motif = "triangles" | "grid" | "diagonal" | "burst" | "arcs" | "orbit";

type ValueItem = {
  title: string;
  body: string;
  motif: Motif;
};

type Props = {
  items: ValueItem[];
};

function ValueCard({ title, body }: ValueItem) {
  const cardRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const bodyRef = useRef<HTMLParagraphElement | null>(null);

  useTitleReveal(cardRef, titleRef, []);
  useBodyReveal(cardRef, bodyRef, []);

  return (
    <article className={styles.card} ref={cardRef}>
      <div className={styles.cardInner}>
      {/* <div className={styles.artWrap}>
        <ColorImageBlock tone={toneMap[motif]} compact className={styles.artBlock} />
      </div> */}

      <div className={styles.copyWrap}>
        <h3 className={styles.cardTitle} ref={titleRef}>
          {title}
        </h3>
        <p className={styles.cardBody} ref={bodyRef}>
          {body}
        </p>
      </div>
      </div>
    </article>
  );
}

export default function OurValues({ items }: Props) {
  return (
    <section className={styles.wrapper} id="ourValues">
      <SectionHeader
        eyebrow="What Guides Us"
        title="Our Values"
        titleAs="h2"
        titleSize="large"
        titleAlignment="left"
        titleColor="primaryLight"
        titleHighlightColor="primaryColorLight"
        titleHighlightSlice={[4, 10]}
        subTitle="Our values shape how we partner, how we build, and how we deliver measurable outcomes for the public."
        subTitleAlignment="left"
        linkText="See how we work"
        linkHref="/how-we-work"
      />

      <div className={styles.grid}>
        {items.map((item) => (
          <ValueCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
