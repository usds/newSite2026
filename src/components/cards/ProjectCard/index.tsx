"use client";

import { PROJECTS_PAGE_UI_TEXT } from "@/text/projects";
import styles from "./ProjectCard.module.css";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import CardSurface from "@/components/cards/CardSurface";

type Props = {
  project: Project;
};

type Project = {
  title: string;
  area: string;
  summary: string;
  impact: string;
  status: string;
};

export default function ProjectCard({ project }: Props) {
  return (
    <motion.article
      className={styles.wrapper}
      initial={{
        y: 20,
        opacity: 0,
        scale: 0.97,
      }}
      whileInView={{
        y: 0,
        // filter: "blur(0px)"
        opacity: 1,
        scale: 1,
      }}
      exit={{
        y: 20,
        opacity: 0,
        scale: 0.97,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      viewport={{
        amount: 0.2,
      }}
    >
      <CardSurface tone="background" className={styles.surface}>
        <div className={styles.projectCardInner}>
          <div className={styles.projectMeta}>
            <p className={styles.projectArea}>{project.area}</p>
            {/* <p className={styles.projectStatus}>{project.status}</p> */}
          </div>
          <h3 className={styles.projectTitle}>{`${project.title}.`}</h3>
          <p className={styles.projectSummary}>{project.summary}</p>
          <p className={styles.projectImpact}>{project.impact}</p>
          <div className={styles.projectLinkRow}>
            <span className={styles.projectLink}>
              {PROJECTS_PAGE_UI_TEXT.projectLinkLabel}
              <ArrowUpRight size={16} />
            </span>
          </div>
        </div>
      </CardSurface>
    </motion.article>
  );
}
