"use client";

import styles from "./HowToJoin.module.css";
import SectionHeader from "@/components/general/SectionHeader";
import Subtitle from "@/components/general/Subtitle";
import { Code, PaintbrushVertical, FolderKanban, Gavel } from "lucide-react";
import CTA from "@/components/buttons/CTA";

const ROLE_CARDS = [
  { label: "Software Engineers", icon: <Code /> },
  { label: "Designers", icon: <PaintbrushVertical /> },
  { label: "Product Managers", icon: <FolderKanban /> },
  { label: "Policy Experts", icon: <Gavel /> },
] as const;

const PROCESS = [
  {
    step: "1",
    title: "Apply Online",
    body: "Submit your application through our streamlined portal.",
  },
  {
    step: "2",
    title: "Interview",
    body: "Meet with our team to discuss your skills and interests.",
  },
  {
    step: "3",
    title: "Security Clearance",
    body: "Complete the necessary background verification.",
  },
  {
    step: "4",
    title: "Start Serving",
    body: "Begin your tour of duty making an impact.",
  },
] as const;

export default function HowToJoin() {
  return (
    <section
      className={`sectionFrameBase homeSection ${styles.wrapper}`}
      id="join"
      aria-labelledby="how-to-join-title"
    >
      <div className={styles.inner}>
        <div className={styles.left}>
          <SectionHeader
            eyebrow="Tour of Service"
            title="How to Join"
            titleHighlightSlice={[7, 11]}
            titleAlignment="left"
            subTitle="Join a tour of duty that makes a difference. We're looking
                for talented professionals ready to bring private sector
                innovation to public service."
            subTitleAlignment="left"
            linkText="View open roles"
            linkHref="#apply"
          />

          <section className={styles.section}>
            <Subtitle
              text="Who We’re Looking For"
              as="h3"
              size="medium"
              color="primaryLightMuted"
              animation="title"
              className={styles.kicker}
            />

            <div className={styles.roles} role="list">
              {ROLE_CARDS.map((role) => (
                <div key={role.label} className={styles.roleCard} role="listitem">
                  <div className={styles.roleCardInner}>
                    <span className={styles.roleIcon} aria-hidden="true">
                      {role.icon}
                    </span>
                    <span className={styles.roleText}>{role.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className={styles.right} aria-label="Application Process">
          <div className={styles.rightInner}>
            <Subtitle
              text="Application Process"
              as="h3"
              size="medium"
              color="primaryLightSubtle"
              animation="title"
              className={styles.panelTitle}
            />

            <ol className={styles.steps}>
              {PROCESS.map((step) => (
                <li key={step.step} className={styles.stepRow}>
                  <span className={styles.stepBadge} aria-hidden="true">
                    {step.step}
                  </span>
                  <div className={styles.stepBody}>
                    <p className={styles.stepTitle}>{step.title}</p>
                    <p className={styles.stepText}>{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <span className={styles.ctaWrapper}>
              <CTA
                href="#apply"
                text="Start Your Application"
                textColor="var(--primary-light)"
                backgroundColor="var(--primary-color)"
              />

              <Subtitle
                text="Applications are reviewed on a rolling basis"
                as="p"
                size="small"
                color="primaryLightMuted"
                align="center"
                animation="body"
                className={styles.note}
              />
            </span>
          </div>
        </aside>
      </div>
    </section>
  );
}
