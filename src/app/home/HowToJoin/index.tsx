"use client";

import styles from "./HowToJoin.module.css";
import SectionHeader from "@/components/general/SectionHeader";
import CTA from "@/components/buttons/CTA";
import { HOME_HOW_TO_JOIN_CONTENT, HOME_SECTION_ARIA_TEXT } from "@/text/home";

export default function HowToJoin() {
  const { header, process, cta } = HOME_HOW_TO_JOIN_CONTENT;

  return (
    <section
      className={`sectionFrameBase homeSection ${styles.wrapper}`}
      id="join"
      aria-labelledby="how-to-join-title"
    >
      <div className={styles.inner}>
        <div className={styles.left}>
          <SectionHeader
            className={styles.header}
            eyebrow={header.eyebrow}
            title={header.title}
            titleHighlightSlice={[7, 11]}
            titleAlignment="left"
            subtitle={header.subTitle}
            subtitleAlignment="left"
            linkText={header.linkText}
            linkHref={header.linkHref}
          />
        </div>

        <aside
          className={styles.right}
          aria-label={HOME_SECTION_ARIA_TEXT.applicationProcess}
        >
          <div className={styles.rightInner}>
            {/* <Subtitle
              text="Application Process"
              as="h3"
              size="medium"
              color="primaryLightSubtle"
              animation="title"
              className={styles.panelTitle}
            /> */}

            <ol className={styles.steps}>
              {process.map((step) => (
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
                href={cta.href}
                text={cta.text}
                icon="arrowRight"
                textColor="var(--primary-light)"
                backgroundColor="var(--primary-color)"
              />

              {/* <Subtitle
                text="Applications are reviewed on a rolling basis"
                as="p"
                size="small"
                color="primaryLightMuted"
                align="center"
                animation="body"
                className={styles.note}
              /> */}
            </span>
          </div>
        </aside>
      </div>
    </section>
  );
}
