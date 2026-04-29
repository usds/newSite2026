"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";
import CTA from "../../../components/buttons/CTA";
import Image from "next/image";
import { HOME_HERO_CONTENT, HOME_SECTION_ARIA_TEXT } from "@/text/home";
import { withBasePath } from "@/utils/basePath";
import { motion, useReducedMotion } from "motion/react";
import { useBodyReveal, useTitleReveal } from "@/hooks/useSplitReveal/presets";

const CHILD_SITE_HERO_IMAGES = [
  "https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?w=1920&q=80",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80",
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80",
];

const HERO_IMAGE_SWAP_INTERVAL_MS = 10000;
const HERO_IMAGE_REVEAL_EASE: [number, number, number, number] = [0.77, 0, 0.175, 1];

export default function Hero() {
  const reduceMotion = Boolean(useReducedMotion());
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const [showContent, setShowContent] = useState(reduceMotion);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [incomingImageIndex, setIncomingImageIndex] = useState<number | null>(null);

  useEffect(() => {
    if (reduceMotion) {
      setShowContent(true);
    }
  }, [reduceMotion]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIncomingImageIndex((currentIncoming) => {
        if (currentIncoming !== null) {
          return currentIncoming;
        }

        return (activeImageIndex + 1) % CHILD_SITE_HERO_IMAGES.length;
      });
    }, HERO_IMAGE_SWAP_INTERVAL_MS);

    return () => {
      window.clearInterval(interval);
    };
  }, [activeImageIndex]);

  useTitleReveal(sectionRef, titleRef, [showContent], {
    enabled: showContent && !reduceMotion,
    start: "top 80%",
  });

  useBodyReveal(sectionRef, subtitleRef, [showContent], {
    enabled: showContent && !reduceMotion,
    start: "top 78%",
  });

  const ctaStyles: Array<{
    backgroundColor?: string;
    textColor?: string;
    icon?: "arrowRight";
  }> = [
    {
      backgroundColor: "var(--primary-dark-transparent)",
      textColor: "var(--primary-light)",
    },
    {
      icon: "arrowRight",
      backgroundColor: "var(--primary-color-light)",
      textColor: "var(--primary-dark)",
    },
  ];

  const prefixWords = HOME_HERO_CONTENT.titleParts.prefix.trim().split(/\s+/);
  const firstLine = prefixWords[0] ?? "";
  const secondLineLead = prefixWords.slice(1).join(" ");
  const thirdLine = HOME_HERO_CONTENT.titleParts.suffix.trim();
  const activeHeroImageSrc =
    CHILD_SITE_HERO_IMAGES[activeImageIndex] ?? withBasePath(HOME_HERO_CONTENT.imageSrc);
  const incomingHeroImageSrc =
    incomingImageIndex === null
      ? null
      : (CHILD_SITE_HERO_IMAGES[incomingImageIndex] ?? null);

  return (
    <section
      ref={sectionRef}
      className={styles.wrapper}
      aria-labelledby="hero-title"
      aria-describedby="hero-desc"
    >
      <div className={styles.innerWrapper}>
          <div className={styles.heroImageWrapper}>
            <motion.div
              className={styles.heroImageInner}
              layout
              initial={
                reduceMotion
                  ? false
                  : {
                      clipPath:
                        "inset(45% round var(--border-radius-primary))",
                    }
              }
              animate={{
                clipPath:
                  "inset(0% round var(--border-radius-primary))",
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                ease: [0.4, 0, 0, 1],
              }}
              onAnimationComplete={() => {
                if (!showContent) {
                  setShowContent(true);
                }
              }}
            >
              <Image
                className={styles.image}
                src={activeHeroImageSrc}
                alt={HOME_HERO_CONTENT.imageAlt}
                fill
                priority
              />

              {incomingHeroImageSrc ? (
                <motion.div
                  className={styles.heroImageInner}
                  style={{ position: "absolute", inset: 0 }}
                  initial={
                    reduceMotion
                      ? {
                          clipPath:
                            "inset(0% 0% 0% 0% round var(--border-radius-primary))",
                        }
                      : {
                          clipPath:
                            "inset(100% 0% 0% 0% round var(--border-radius-primary))",
                        }
                  }
                  animate={{
                    clipPath:
                      "inset(0% 0% 0% 0% round var(--border-radius-primary))",
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 1,
                    ease: HERO_IMAGE_REVEAL_EASE,
                  }}
                  onAnimationComplete={() => {
                    if (incomingImageIndex === null) {
                      return;
                    }

                    setActiveImageIndex(incomingImageIndex);
                    setIncomingImageIndex(null);
                  }}
                >
                  <Image
                    className={styles.image}
                    src={incomingHeroImageSrc}
                    alt={HOME_HERO_CONTENT.imageAlt}
                    fill
                  />
                </motion.div>
              ) : null}
            </motion.div>
          </div>

          {showContent ? (
            <div className={styles.heroInner}>
              <header className={styles.content}>
                <h1
                  ref={titleRef}
                  id="hero-title"
                  className={`${styles.title} ${reduceMotion ? styles.revealDisabled : ""}`}
                >
                  <span className={styles.titleLine}>{firstLine}</span>
                  <span className={`${styles.titleLine} ${styles.titleLineTight}`}>
                    {secondLineLead ? `${secondLineLead} ` : ""}
                    <span className={styles.titleSpan}>
                      {HOME_HERO_CONTENT.titleParts.highlight}
                    </span>
                  </span>
                  {thirdLine ? <span className={styles.titleLine}>{thirdLine}</span> : null}
                </h1>

                <p
                  ref={subtitleRef}
                  id="hero-desc"
                  className={`${styles.subTitle} ${reduceMotion ? styles.revealDisabled : ""}`}
                >
                  {HOME_HERO_CONTENT.subTitle}
                </p>

                <div
                  className={styles.ctaWrapper}
                  role="group"
                  aria-label={HOME_SECTION_ARIA_TEXT.heroPrimaryActions}
                >
                  {HOME_HERO_CONTENT.ctas.map((cta, index) => (
                    <div key={cta.href} className={styles.ctaItem}>
                      <CTA
                        text={cta.text}
                        href={cta.href}
                        ariaLabel={cta.ariaLabel}
                        backgroundColor={ctaStyles[index]?.backgroundColor}
                        textColor={ctaStyles[index]?.textColor}
                        icon={ctaStyles[index]?.icon}
                      />
                    </div>
                  ))}
                </div>
              </header>
            </div>
          ) : null}
        </div>
    </section>
  );
}
