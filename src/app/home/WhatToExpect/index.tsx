"use client";

import styles from "./WhatToExpect.module.css";
import SectionHeader from "@/components/general/SectionHeader";
import Accordion from "@/components/sections/Accordion";
import { HOME_SECTION_ARIA_TEXT, HOME_WHAT_TO_EXPECT_CONTENT } from "@/text/home";

export default function WhatToExpect() {
  const { header, accordionItems } = HOME_WHAT_TO_EXPECT_CONTENT;

  return (
    <section
      className={`sectionFrameBase ${styles.wrapper}`}
      id="whatToExpect"
      aria-label={HOME_SECTION_ARIA_TEXT.whatToExpect}
    >
      <div className={styles.inner}>
        <SectionHeader
          eyebrow={header.eyebrow}
          title={header.title}
          titleAlignment="left"
          titleHighlightSlice={[10, 25]}
          subtitle={header.subTitle}
          subtitleAlignment="left"
          linkText={header.linkText}
          linkHref={header.linkHref}
        />

        <div className={styles.accordionWrap}>
          <Accordion items={accordionItems} defaultOpenId={accordionItems[0]?.id} />
        </div>
      </div>
    </section>
  );
}
