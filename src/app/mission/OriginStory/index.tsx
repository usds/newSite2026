"use client";

import { useRef } from "react";
import Link from "next/link";
import SectionHeader from "@/components/general/SectionHeader";
import { useBodyReveal } from "@/hooks/useSplitReveal/presets";
import ColorImageBlock from "@/components/general/ColorImageBlock";
import styles from "./originStory.module.css";

export default function OriginStory() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const p1Ref = useRef<HTMLParagraphElement | null>(null);
  const p2Ref = useRef<HTMLParagraphElement | null>(null);
  const strategyBlockRef = useRef<HTMLDivElement | null>(null);
  const p3Ref = useRef<HTMLParagraphElement | null>(null);

  useBodyReveal(sectionRef, p1Ref, []);
  useBodyReveal(sectionRef, p2Ref, []);
  useBodyReveal(sectionRef, strategyBlockRef, []);
  useBodyReveal(sectionRef, p3Ref, []);

  return (
    <section className={styles.wrapper} ref={sectionRef}>
      <SectionHeader
        className={styles.originHeader}
        eyebrow="How We Started"
        title="The USDS origin story"
        titleSize="large"
        titleAlignment="left"
        subTitle="How a scrappy idea became a durable digital service for the American people."
        subTitleAlignment="left"
        subTitleSize="medium"
        linkText="Apply now"
        linkHref="#applyNow"
        titleHighlightSlice={[4, 9]}
      />

      <div className={styles.layout}>
        <article className={styles.copy}>
          <p className={styles.paragraph} ref={p1Ref}>
            The idea of a team like USDS had been percolating since 2012, and people across federal agencies had been
            exploring new modes of hiring and working since 2008. The HealthCare.gov launch crisis created an
            opportunity for a scrappy idea to become a reality. The challenges behind the launch made clear that
            accessing government services should be as easy as ordering a book online.
          </p>

          <p className={styles.paragraph} ref={p2Ref}>
            Founded by President Obama in August of 2014, the U.S. Digital Service brought together the best
            engineering, design, and government talent to change our government&apos;s approach to technology. We
            planned to hire ten people for three critical national priorities: modernizing immigration, Veterans&apos;
            benefits, and HealthCare.gov. During the 2015 State of the Union address, we launched an online
            application to join the team. We worried if ten people would even apply. 1000 did.
          </p>

          <p className={styles.paragraph}>We quickly went to work with a simple strategy:</p>

          <div className={styles.strategyBlock} ref={strategyBlockRef}>
            <p className={styles.strategyLine}>Recruit top designers and engineers.</p>
            <p className={styles.strategyLine}>Pair them with leading civil servants.</p>
            <p className={styles.strategyLine}>Deploy teams to address critical services.</p>
          </div>

          <p className={styles.paragraph} ref={p3Ref}>
            Does this sound like you?{" "}
            <Link className={styles.inlineLink} href="#applyNow">
              Apply now.
            </Link>
          </p>
        </article>

        <aside className={styles.mediaCol} aria-hidden="true">
          <div className={styles.mediaStack}>
            <ColorImageBlock tone="ocean" className={styles.mediaPrimary} />
            <ColorImageBlock tone="amber" compact className={styles.mediaSecondary} />
          </div>
        </aside>
      </div>
    </section>
  );
}
