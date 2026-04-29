"use client";

import styles from "./CTASection.module.css";
import CTA from "@/components/buttons/CTA";
import Eyebrow from "@/components/general/Eyebrow";
import type { CtaSectionContent } from "@/types/cta";

type Props = CtaSectionContent & {
  className?: string;
  id?: string;
  surface?: "panel" | "plain";
};

const IMPORTANT_CTA_PATTERN = /\b(apply|join|career|hiring|role|start)\b/i;

function shouldShowArrow(text: string, href: string) {
  if (IMPORTANT_CTA_PATTERN.test(text)) return true;
  return /\/careers|\/apply|#apply|\/mission#applyNow/i.test(href);
}

export default function CTASection({
  id,
  eyebrow,
  title,
  body,
  primary,
  secondary,
  className,
  surface = "plain",
}: Props) {
  const surfaceClass = surface === "plain" ? styles.plain : styles.panel;

  return (
    <section
      id={id}
      className={`sectionFrameBase ${styles.wrapper} ${surfaceClass} ${className ?? ""}`}
    >
      {eyebrow ? (
        <div className={styles.eyebrowWrap}>
          <Eyebrow text={eyebrow} alignment="center" />
        </div>
      ) : null}
      <h2 className={styles.title}>{title}</h2>
      {body ? <p className={styles.body}>{body}</p> : null}
      <div className={styles.actions}>
        {secondary ? (
          <>
            <CTA
              text={secondary.text}
              href={secondary.href}
              icon={shouldShowArrow(secondary.text, secondary.href) ? "arrowRight" : undefined}
              backgroundColor="var(--primary-dark-panel-muted)"
              textColor="var(--primary-light)"
            />
            <CTA
              text={primary.text}
              href={primary.href}
              icon={shouldShowArrow(primary.text, primary.href) ? "arrowRight" : undefined}
              backgroundColor="var(--primary-color-light)"
              textColor="var(--primary-dark)"
            />
          </>
        ) : (
          <CTA
            text={primary.text}
            href={primary.href}
            icon={shouldShowArrow(primary.text, primary.href) ? "arrowRight" : undefined}
            backgroundColor="var(--primary-color-light)"
            textColor="var(--primary-dark)"
          />
        )}
      </div>
    </section>
  );
}
