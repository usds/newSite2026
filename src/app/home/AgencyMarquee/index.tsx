"use client";

import styles from "./AgencyMarquee.module.css";
import { HOME_HERO_AGENCY_MARQUEE_CONTENT } from "@/text/home";

export default function AgencyMarquee() {
  const { label, agencies } = HOME_HERO_AGENCY_MARQUEE_CONTENT;
  const marqueeItems = [...agencies, ...agencies];

  return (
    <section className={styles.wrapper} aria-label={label}>
      <p className={styles.label}>{label}</p>
      <div className={styles.viewport}>
        <div className={styles.track}>
          {marqueeItems.map((agency, index) => (
            <span
              key={`${agency}-${index}`}
              className={`${styles.item} ${index % 3 === 0 ? styles.itemAccent : ""}`}
            >
              {agency}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
