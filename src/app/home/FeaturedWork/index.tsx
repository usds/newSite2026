"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import CardSurface from "@/components/cards/CardSurface";
import SectionHeader from "@/components/general/SectionHeader";
import SlotMachineValue from "@/components/general/SlotMachineValue";
import { HOME_FEATURED_PROJECTS_CONTENT } from "@/text/home";
import { withBasePath } from "@/utils/basePath";
import styles from "./FeaturedWork.module.css";

type BackgroundStyle = CSSProperties & {
  ["--select-work-image"]?: string;
};

type FeaturedProject = (typeof HOME_FEATURED_PROJECTS_CONTENT.projects)[number];

type FeaturedProjectCardProps = {
  project: FeaturedProject;
  index: number;
};

function FeaturedProjectCard({ project, index }: FeaturedProjectCardProps) {
  const cardRef = useRef<HTMLElement | null>(null);
  const [animateStat, setAnimateStat] = useState(false);

  useEffect(() => {
    const cardEl = cardRef.current;
    if (!cardEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          setAnimateStat(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(cardEl);

    return () => {
      observer.disconnect();
    };
  }, []);

  const backgroundStyle: BackgroundStyle = {
    ["--select-work-image"]: `url("${withBasePath(project.imageSrc)}")`,
  };

  return (
    <Link
      href={project.href}
      className={styles.projectLink}
      aria-label={`${project.title} (${project.agency})`}
    >
      <motion.article
        className={styles.projectMotionFrame}
        ref={cardRef}
        initial={{
          y: 28,
          opacity: 0,
          scale: 0.98,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: index * 0.08,
        }}
      >
        <CardSurface tone="background" className={styles.projectCard}>
          <div
            className={styles.projectBackground}
            style={backgroundStyle}
            aria-hidden="true"
          />

          <div className={styles.projectInner}>
            <div className={styles.projectCopy}>
              <p className={styles.projectAgency}>{project.agency}</p>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
            </div>

            <p className={styles.projectStat}>
              <SlotMachineValue
                value={project.stat}
                animate={animateStat}
                digitDelayMs={90}
              />
            </p>
          </div>
        </CardSurface>
      </motion.article>
    </Link>
  );
}

export default function FeaturedWork() {
  const { header, projects } = HOME_FEATURED_PROJECTS_CONTENT;

  return (
    <section
      className={`sectionFrameBase ${styles.wrapper}`}
      id="featured-projects"
      aria-label={header.title}
    >
      <SectionHeader
        className={styles.header}
        eyebrow={header.eyebrow}
        title={header.title}
        titleAlignment="center"
        subtitle={header.subTitle}
        subtitleAlignment="center"
      />

      <div className={styles.projectList}>
        {projects.map((project, index) => {
          return (
            <FeaturedProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          );
        })}
      </div>
    </section>
  );
}
