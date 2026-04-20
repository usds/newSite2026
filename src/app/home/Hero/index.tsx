"use client";

import styles from "./hero.module.css";
import CTA from "../../../components/buttons/CTA";
import Image from "next/image";
import { useTitleReveal, useBodyReveal } from "@/hooks/useSplitReveal/presets";
import { useRef } from "react";
import { HOME_HERO_CONTENT, HOME_SECTION_ARIA_TEXT } from "@/text/home";
import { withBasePath } from "@/utils/basePath";

type HeroProps = {
  ready?: boolean;
};

export default function Hero({ ready = true }: HeroProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLHeadingElement | null>(null);
  const ctaStyles: Array<{
    backgroundColor?: string;
    textColor?: string;
    icon?: "arrowRight";
  }> = [
    {
      textColor: "var(--primary-light)",
    },
    {
      icon: "arrowRight",
      backgroundColor: "var(--primary-color-light)",
      textColor: "var(--primary-dark)",
    },
  ];

  useTitleReveal(sectionRef, titleRef, [ready], {
    enabled: ready,
    triggerDelayMs: 350,
  });

  useBodyReveal(sectionRef, subtitleRef, [ready], {
    enabled: ready,
    triggerDelayMs: 450,
  });

  return (
    <section
      className={styles.wrapper}
      ref={sectionRef}
      aria-labelledby="hero-title"
      aria-describedby="hero-desc"
    >
      <div className={styles.mediaWrapper}>
        <div className={styles.mediaWrapperInner}>
          <Image
            className={styles.image}
            src={withBasePath(HOME_HERO_CONTENT.imageSrc)}
            alt={HOME_HERO_CONTENT.imageAlt}
            fill
            priority
          />
        </div>
      </div>

      <div className={styles.inner}>
        <header>
          <h1
            id="hero-title"
            className={styles.title}
            ref={titleRef}
          >
            <span>{HOME_HERO_CONTENT.titleParts.prefix}</span>
            <span className={styles.titleSpan}>{HOME_HERO_CONTENT.titleParts.highlight}</span>
            <span>{HOME_HERO_CONTENT.titleParts.suffix}</span>
          </h1>

          <h3 id="hero-desc" className={styles.subTitle} ref={subtitleRef}>
            {HOME_HERO_CONTENT.subTitle}
          </h3>
        </header>

        <div
          className={styles.ctaWrapper}
          role="group"
          aria-label={HOME_SECTION_ARIA_TEXT.heroPrimaryActions}
        >
          {HOME_HERO_CONTENT.ctas.map((cta, index) => (
            <CTA
              key={cta.href}
              text={cta.text}
              href={cta.href}
              ariaLabel={cta.ariaLabel}
              backgroundColor={ctaStyles[index]?.backgroundColor}
              textColor={ctaStyles[index]?.textColor}
              icon={ctaStyles[index]?.icon}
            />
          ))}
        </div>
      </div>

    </section>
  );
}
