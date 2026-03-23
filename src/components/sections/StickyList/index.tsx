"use client";

import styles from "./stickyList.module.css";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useBodyReveal } from "@/hooks/useSplitReveal/presets";
import Eyebrow from "@/components/general/Eyebrow";
import Title from "@/components/general/Title";

type ListItem = {
  title: string;
  description: string;
};

type HeaderOption = {
  eyebrow: string;
  header: string;
  linkText: string;
  linkIcon: React.ReactNode;
  href: string;
  highlightSlice?: [number, number];
};

type Props = {
  header: string;
  list: ListItem[];
};

const headerOpts: Record<string, HeaderOption> = {
  "Our Objectives": {
    eyebrow: "What Drives Us",
    header: "Our Objectives",
    linkText: "See how we work",
    linkIcon: <ArrowRight />,
    href: "/how-we-work",
    highlightSlice: [4, 14],
  },
  "How We Work": {
    eyebrow: "",
    header: "How We Work",
    linkText: "Back to mission",
    linkIcon: null,
    href: "/mission",
    highlightSlice: [4, 11],
  },
};
export default function StickyList({ header, list }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const subTitleRef = useRef<HTMLParagraphElement | null>(null);
  const listRef = useRef<HTMLOListElement>(null);

  useBodyReveal(sectionRef, subTitleRef, []);

  const opts = headerOpts[header];
  if (!opts) return null;


  return (
    <section className={styles.wrapper} ref={sectionRef}>
      <section className={`${styles.half} ${styles.stickyHalf}`}>
        <div className={styles.headerWrapper}>
          <div className={styles.eyebrowWrapper}>
            <Eyebrow text={opts.eyebrow} alignment="left" />
          </div>
          <Title
            text={opts.header}
            as="h2"
            size="large"
            alignment="left"
            color="primaryLight"
            highlightColor="primaryColorLight"
            highlightSlice={opts.highlightSlice}
            className={styles.title}
          />

          <p className={styles.subTitle} ref={subTitleRef}>
            <Link className={styles.link} href={opts.href}>
              {opts.linkText}
              {opts.linkIcon}
            </Link>
          </p>
        </div>
      </section>

      <ol className={`${styles.half} ${styles.listHalf}`} ref={listRef}>
        {list.map((item, idx) => (
          <li key={idx} className={styles.listItem}>
            <div className={styles.itemIndex}>{idx + 1}</div>

            <div className={styles.itemDetails}>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemDescription}>{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
