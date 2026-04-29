"use client";

import type { CSSProperties } from "react";
import SectionHeader from "@/components/general/SectionHeader";
import type { Alignment, TitleSize } from "@/components/general/Title";
import CTA, { type CTAProps } from "@/components/buttons/CTA";
import HeroStats, {
  type HeroStat,
  type HeroStatTone,
  type HeroStatsVariant,
} from "@/components/general/HeroStats";
import HorizontalStatsList, {
  type HorizontalStatsLayout,
} from "@/components/general/HorizontalStatsList";
import { withBasePath } from "@/utils/basePath";
import HeroTop from "./HeroTop";
import HeroBottom from "./HeroBottom";
import layoutStyles from "./PageHero.module.css";
import structureStyles from "./HeroStructure.module.css";

type HeroVariant =
  | "left"
  | "center"
  | "image-left-details-right";

type HeroCta = CTAProps & {
  alignment?: Alignment;
};

type HeroFrameProps = {
  as?: "section" | "div" | "article";
  className?: string;
  headerClassName?: string;
  statsClassName?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  titleHighlightSlice?: [number, number];
  titleLineBreakBefore?: string;
  cta?: HeroCta | HeroCta[];
  variant?: HeroVariant;
  imageSrc?: string;
  imageAlt?: string;
  compactTitle?: boolean;
  frameStyle?: "framed" | "frameless";
  splitContentLayout?: "default" | "stacked";
  titleSize?: TitleSize;
  showTitleBorder?: boolean;
  titleAlignment?: Alignment;
  subtitleAlignment?: Alignment;
  stats?: HeroStat[];
  statsPlacement?: "bottom" | "content";
  statsStyle?: HeroStatsVariant;
  centeredStatsLayout?: HorizontalStatsLayout;
  ctaPlacement?: "header" | "afterStats";
  topBottomGap?: CSSProperties["gap"];
  style?: CSSProperties;
  layout?: "centered" | "split";
  mediaPosition?: "left" | "right";
};

export type { HeroFrameProps, HeroVariant, HeroCta, HeroStat, HeroStatTone };

function resolveHeroVariant({
  variant,
  layout,
  mediaPosition,
  imageSrc,
}: {
  variant?: HeroVariant;
  layout?: "centered" | "split";
  mediaPosition?: "left" | "right";
  imageSrc?: string;
}): HeroVariant {
  const byLegacyLayout: HeroVariant =
    layout === "centered"
      ? "center"
      : mediaPosition === "left"
        ? "image-left-details-right"
        : "left";
  const requestedVariant = variant ?? byLegacyLayout;

  if (requestedVariant === "center") {
    return requestedVariant;
  }

  return imageSrc ? requestedVariant : "center";
}

export default function HeroFrame({
  as = "section",
  className,
  headerClassName,
  statsClassName,
  eyebrow,
  title,
  subtitle,
  titleHighlightSlice,
  titleLineBreakBefore,
  cta,
  variant,
  imageSrc,
  imageAlt,
  compactTitle = false,
  frameStyle = "framed",
  splitContentLayout = "default",
  titleSize = "large",
  showTitleBorder = false,
  titleAlignment,
  subtitleAlignment,
  stats = [],
  statsPlacement = "bottom",
  statsStyle = "framed",
  centeredStatsLayout = "auto",
  ctaPlacement = "header",
  topBottomGap = "var(--space-2xl)",
  style,
  layout,
  mediaPosition = "right",
}: HeroFrameProps) {
  const Tag = as;
  const resolvedImageSrc = imageSrc ? withBasePath(imageSrc) : "";
  const resolvedVariant = resolveHeroVariant({
    variant,
    layout,
    mediaPosition,
    imageSrc: resolvedImageSrc,
  });
  const isSplitLayout = resolvedVariant !== "center";
  const isImageLeft = resolvedVariant === "image-left-details-right";
  const isFrameless = frameStyle === "frameless";
  const isStackedSplitContent = splitContentLayout === "stacked";
  const shouldRenderStats = stats.length > 0;
  const useContentStats = isSplitLayout && statsPlacement === "content";
  const useBottomStats = shouldRenderStats && !useContentStats;
  const resolvedTitleAlignment =
    titleAlignment ?? (isSplitLayout ? "left" : "center");
  const resolvedSubtitleAlignment = subtitleAlignment ?? resolvedTitleAlignment;
  const resolvedCtas = cta ? (Array.isArray(cta) ? cta : [cta]) : [];
  const hasCtas = resolvedCtas.length > 0;
  // In split variants, keep stats above CTAs regardless of requested placement.
  const enforceStatsBeforeCtas = isSplitLayout && hasCtas;
  const showCtaInHeader = hasCtas && !enforceStatsBeforeCtas && ctaPlacement === "header";
  const showCtaAfterStats = hasCtas && (enforceStatsBeforeCtas || ctaPlacement === "afterStats");
  const showCtaAfterContent = showCtaAfterStats && !useBottomStats;
  const showCtaAfterBottom = showCtaAfterStats && useBottomStats;
  const ctaAlignment = resolvedCtas[0]?.alignment ?? resolvedTitleAlignment;
  const ctaJustifyContent: CSSProperties["justifyContent"] =
    ctaAlignment === "left"
      ? "flex-start"
      : ctaAlignment === "right"
        ? "flex-end"
        : "center";
  const statsClassNames = [
    useContentStats ? layoutStyles.statsGridContent : "",
    useBottomStats ? layoutStyles.statsGridBottom : "",
    useBottomStats && !isSplitLayout ? layoutStyles.statsGridBottomCentered : "",
    statsClassName ?? "",
  ]
    .filter(Boolean)
    .join(" ");
  const useHorizontalStats = !isSplitLayout;
  const resolvedCenteredStatsLayout: HorizontalStatsLayout =
    !isSplitLayout && centeredStatsLayout === "auto"
      ? "long"
      : centeredStatsLayout;
  const renderStatsNode = () => {
    if (!shouldRenderStats) {
      return null;
    }

    if (useHorizontalStats) {
      return (
        <HorizontalStatsList
          items={stats.map((stat) => ({
            id: stat.id,
            value: stat.value,
            label: stat.label,
            animateValue: stat.animateValue,
          }))}
          layout={resolvedCenteredStatsLayout}
          className={statsClassNames}
        />
      );
    }

    return (
      <HeroStats
        stats={stats}
        variant={statsStyle}
        className={statsClassNames}
      />
    );
  };
  const renderCtaNode = () => (
    <div className={layoutStyles.ctaAfterStats} style={{ justifyContent: ctaJustifyContent }}>
      {resolvedCtas.map((ctaItem, index) => (
        <CTA
          key={`${ctaItem.href}-${ctaItem.text}-${index}`}
          text={ctaItem.text}
          href={ctaItem.href}
          backgroundColor={ctaItem.backgroundColor}
          textColor={ctaItem.textColor}
          ariaLabel={ctaItem.ariaLabel}
          icon={ctaItem.icon}
          className={ctaItem.className}
        />
      ))}
    </div>
  );

  return (
    <Tag
      className={`${structureStyles.frame} sectionFrameBase pageHeroSection ${
        layoutStyles.wrapper
      } ${isSplitLayout ? layoutStyles.split : layoutStyles.centered} ${
        isImageLeft ? layoutStyles.mediaLeft : ""
      } ${isFrameless ? layoutStyles.frameless : ""} ${
        isSplitLayout && isStackedSplitContent ? layoutStyles.splitStackedContent : ""
      } ${className ?? ""}`}
      style={{
        ["--hero-frame-gap" as string]: topBottomGap,
        ...(!isSplitLayout && useBottomStats
          ? {
              height: "auto",
              minHeight: 0,
              maxHeight: "none",
              justifyContent: "flex-start",
            }
          : {}),
        ...style,
      }}
    >
      <HeroTop className={layoutStyles.topRow}>
        <div className={layoutStyles.headerColumn}>
          <SectionHeader
            wrapperClassName={`${layoutStyles.header} ${
              compactTitle ? layoutStyles.headerCompact : ""
            } ${headerClassName ?? ""}`}
            eyebrow={eyebrow}
            title={title}
            titleSize={titleSize}
            titleHighlightSlice={titleHighlightSlice}
            titleLineBreakBefore={titleLineBreakBefore}
            subtitle={subtitle}
            subtitleSize="small"
            titleAlignment={resolvedTitleAlignment}
            subtitleAlignment={resolvedSubtitleAlignment}
            showLeftBorder={showTitleBorder}
            cta={showCtaInHeader ? cta : undefined}
            isPageTitle
          />

          {useContentStats ? (
            <div className={layoutStyles.splitContentStatsInline}>
              {renderStatsNode()}
              {showCtaAfterContent ? renderCtaNode() : null}
            </div>
          ) : null}
          
        </div>

        {isSplitLayout ? (
          <div className={layoutStyles.mediaColumn}>
            <div
              className={`${layoutStyles.imageFrame} ${
                isFrameless ? layoutStyles.imageFrameFrameless : ""
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={resolvedImageSrc}
                alt={imageAlt ?? `${title} hero image`}
                className={layoutStyles.image}
              />
            </div>
          </div>
        ) : null}

        {isSplitLayout && useContentStats ? (
          <div className={layoutStyles.splitContentAfterMedia}>
            {renderStatsNode()}
            {showCtaAfterContent ? renderCtaNode() : null}
          </div>
        ) : null}
      </HeroTop>

      {useBottomStats ? (
        <HeroBottom>
          {renderStatsNode()}
          {showCtaAfterBottom ? renderCtaNode() : null}
        </HeroBottom>
      ) : null}
    </Tag>
  );
}
