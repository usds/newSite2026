// Hero.tsx
"use client";

import { useRef } from "react";
import styles from "./hero.module.css";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useBodyReveal } from "@/hooks/useSplitReveal/presets";
import Eyebrow from "@/components/general/Eyebrow";
import Title from "@/components/general/Title";

gsap.registerPlugin(SplitText);

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const messageRef = useRef<HTMLParagraphElement | null>(null);

  useBodyReveal(sectionRef, messageRef, []);

  return (
    <section ref={sectionRef} className={styles.wrapper}>
      <div className={styles.inner}>
        <header className={styles.copy}>
          <Eyebrow text="Built for the public good" alignment="center" />

          <Title
            text="Our Mission"
            as="h2"
            size="large"
            alignment="center"
            color="primaryLight"
            highlightColor="primaryColorLight"
            highlightSlice={[4, 11]}
            className={styles.title}
          />

          <p ref={messageRef} className={styles.message}>
            Transforming government to deliver fast, secure and user-centered digital services that millions of
            Americans rely on every day.
          </p>
        </header>
      </div>
    </section>
  );
}
