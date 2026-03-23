"use client";

import styles from "./HowWeWork.module.css";
import CTA from "@/components/buttons/CTA";
import SectionHeader from "@/components/general/SectionHeader";
import ColorImageBlock from "@/components/general/ColorImageBlock";
import { HOME_HOW_WE_WORK_CONTENT } from "@/content/home";

export default function HowWeWork() {
  const { header, practices, communities, sidePanelTitle, sidePanelCtaText, sidePanelCtaHref } = HOME_HOW_WE_WORK_CONTENT;
  const practiceTones = ["ocean", "teal", "amber"] as const;

  return (
    <section
      className={`sectionFrameBase homeSection ${styles.wrapper}`}
      id="work"
      aria-label="How we work"
    >
      <SectionHeader
        eyebrow={header.eyebrow}
        title={header.title}
        titleAs="h2"
        titleSize="large"
        titleAlignment="left"
        titleColor="primaryLight"
        titleHighlightColor="primaryColorLight"
        titleHighlightSlice={[31, 51]}
        subTitle={header.subTitle}
        subTitleAlignment="left"
        linkText={header.linkText}
        linkHref={header.linkHref}
      />

      <div className={styles.content}>
        <div className={styles.practiceGrid}>
          {practices.map((practice, index) => (
            <article key={practice.title} className={styles.practiceCard}>
              <div className={styles.practiceCardInner}>
                {/* <ColorImageBlock tone={practiceTones[index % practiceTones.length]} micro className={styles.cardVisual} /> */}
                <h3 className={styles.practiceTitle}>{practice.title}</h3>
                <p className={styles.practiceBody}>{practice.body}</p>
              </div>
            </article>
          ))}
        </div>

        <aside className={styles.communitiesPanel} aria-label="Communities we hire from">
          <div className={styles.communitiesPanelInner}>
            <p className={styles.communitiesTitle}>{sidePanelTitle}</p>

            <ul className={styles.communityList}>
              {communities.map((item) => (
                <li key={item} className={styles.communityItem}>
                  {/* <span className={styles.dot} aria-hidden="true" /> */}
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className={styles.communitiesCta}>
              <CTA
                text={sidePanelCtaText}
                href={sidePanelCtaHref}
                icon="arrowRight"
                backgroundColor="var(--primary-color)"
                textColor="var(--primary-light)"
              />
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
