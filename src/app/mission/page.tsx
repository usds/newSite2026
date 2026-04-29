"use client";

import styles from "./missionPage.module.css";
import Hero from "./Hero";
import InfoPanel from "@/components/sections/InfoPanel";
import DividerStars from "@/ui/DividerStars";
import StickyList from "@/components/sections/StickyList";
import WhoWeHelp from "./WhoWeHelp";
import OurValues from "./OurValues";
import OriginStory from "./OriginStory";
import CTASection from "@/components/sections/CTASection";
import { MISSION_PAGE_CONTENT, MISSION_PAGE_CTA_CONTENT } from "@/text/mission";

export default function MissionPage() {
  const { infoCards, objectives, whoWeHelp, values } = MISSION_PAGE_CONTENT;

  return (
    <div className={`pageWrap ${styles.wrapper}`}>
      <Hero />

      <DividerStars />

      <InfoPanel cards={infoCards} />

      <DividerStars />

      <StickyList header={objectives.header} list={objectives.items} />

      <DividerStars />

      <WhoWeHelp cards={whoWeHelp.cards} content={whoWeHelp.content} />
      <DividerStars />

      <OurValues items={values} />

      <DividerStars />

      <OriginStory />

      <DividerStars />
      <CTASection id="applyNow" {...MISSION_PAGE_CTA_CONTENT} />
    </div>
  );
}
