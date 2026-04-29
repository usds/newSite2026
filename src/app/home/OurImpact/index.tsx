"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./OurImpact.module.css";
import SectionHeader from "@/components/general/SectionHeader";
import SlotMachineValue from "@/components/general/SlotMachineValue";
import { HOME_OUR_IMPACT_CONTENT, HOME_OUR_IMPACT_IMAGES } from "@/text/home";
import { withBasePath } from "@/utils/basePath";
import { motion } from "motion/react";

type ImpactSlide = {
  id: string;
  value?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  body?: string;
  metric?: {
    before: string;
    after: string;
    label: string;
  };
  link?: {
    text: string;
    href: string;
  };
  image: {
    src: string;
    alt: string;
  };
};

type ImpactSlidePanelProps = {
  slide: ImpactSlide;
  index: number;
  totalSlides: number;
};

function ImpactSlidePanel({ slide, index, totalSlides }: ImpactSlidePanelProps) {
  const panelRef = useRef<HTMLElement | null>(null);
  const [animateValue, setAnimateValue] = useState(false);
  const isStorySlide = Boolean(slide.body || slide.eyebrow || slide.link || slide.metric);

  useEffect(() => {
    const panelEl = panelRef.current;
    if (!panelEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          setAnimateValue(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.4,
      },
    );

    observer.observe(panelEl);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className={styles.sectionTrack} aria-labelledby={`${slide.id}-title`}>
      <motion.article
        className={[styles.section, (index & 1) === 0 ? "" : styles.sectionReverse]
          .filter(Boolean)
          .join(" ")}
        ref={panelRef}
        style={{ zIndex: totalSlides - index }}
      >
            <div className={styles.imageFrame}>
              <Image
                className={styles.image}
                src={slide.image.src}
                alt={slide.image.alt}
                fill
                sizes="(min-width: 64em) 50vw, 100vw"
                priority={index === 0}
              />
            </div>

            <div className={`${styles.textPane} ${isStorySlide ? styles.textPaneStory : ""}`}>
              {isStorySlide ? (
                <>
                  {slide.eyebrow ? (
                    <p className={styles.storyEyebrow}>{slide.eyebrow}</p>
                  ) : null}
                  <h3 className={styles.storyTitle} id={`${slide.id}-title`}>
                    {slide.title}
                  </h3>
                  {slide.body ? <p className={styles.storyBody}>{slide.body}</p> : null}
                  {slide.metric ? (
                    <div className={styles.storyMetricRow}>
                      <span className={styles.storyMetricBefore}>{slide.metric.before}</span>
                      <span className={styles.storyMetricArrow} aria-hidden="true">
                        →
                      </span>
                      <span className={styles.storyMetricAfter}>{slide.metric.after}</span>
                      <span className={styles.storyMetricLabel}>{slide.metric.label}</span>
                    </div>
                  ) : null}
                  {slide.link ? (
                    <Link href={slide.link.href} className={styles.storyLink}>
                      {slide.link.text} →
                    </Link>
                  ) : null}
                </>
              ) : (
                <>
                  <p className={styles.slideCounter} aria-hidden="true">
                    {String(index + 1).padStart(2, "0")} /{" "}
                    {String(totalSlides).padStart(2, "0")}
                  </p>
                  <h3 className={styles.metricValue}>
                    <SlotMachineValue
                      value={slide.value ?? ""}
                      animate={animateValue}
                      className={styles.metricValueInline}
                      digitDelayMs={90}
                    />
                  </h3>
                  <h4 className={styles.metricTitle} id={`${slide.id}-title`}>
                    {slide.title}
                  </h4>
                  {slide.subtitle ? <p className={styles.metricSubtitle}>{slide.subtitle}</p> : null}
                </>
              )}
            </div>
      </motion.article>
    </section>
  );
}

export default function OurImpact() {
  const { header, statsTop, featuredSections } = HOME_OUR_IMPACT_CONTENT;

  const slides = useMemo<ImpactSlide[]>(
    () => [
      ...statsTop.map((stat, index) => ({
        id: `impact-slide-${index + 1}`,
        value: stat.value,
        title: stat.title,
        subtitle: stat.subtitle,
        image: HOME_OUR_IMPACT_IMAGES[index % HOME_OUR_IMPACT_IMAGES.length],
      })),
      ...featuredSections.map((section) => ({
        id: section.id,
        eyebrow: section.eyebrow,
        title: section.title,
        body: section.body,
        metric: section.metric,
        link: {
          text: section.linkText,
          href: section.linkHref,
        },
        image: {
          src: withBasePath(section.imageSrc),
          alt: section.imageAlt,
        },
      })),
    ],
    [featuredSections, statsTop],
  );

  return (
    <section
      className={`sectionFrameBase ${styles.wrapper}`}
      id="impact"
      aria-labelledby="impact-title"
    >
      <SectionHeader
        eyebrow={header.eyebrow}
        title={header.title}
        titleHighlightSlice={[4, 10]}
        subtitle={header.subTitle}
        linkText={header.linkText}
        linkHref={header.linkHref}
      />

      <div className={styles.slidesWrapper}>
        {slides.map((slide, index) => (
          <ImpactSlidePanel
            key={slide.id}
            slide={slide}
            index={index}
            totalSlides={slides.length}
          />
        ))}
      </div>
    </section>
  );
}
