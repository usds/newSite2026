"use client";

import styles from "./FooterWrapper.module.css";
import FooterSocialLinks from "./FooterSocialLinks";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import CTA from "@/components/buttons/CTA";
import SectionHeader from "@/components/general/SectionHeader";
import {
  FOOTER_ACTIONS,
  FOOTER_CALLOUT_CONTENT,
  FOOTER_COLUMNS,
  FOOTER_POLICIES,
  FOOTER_SOCIALS,
} from "@/text/site";
import { FOOTER_WRAPPER_TEXT } from "@/text/ui";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function FooterWrapper() {
  const footerRef = useRef<HTMLElement | null>(null);
  const bounceTweenRef = useRef<gsap.core.Tween | null>(null);
  const year = new Date().getFullYear();
  const actionStyles = [
    {
      backgroundColor: "var(--primary-dark-panel-muted)",
      textColor: "var(--primary-light)",
    },
    {
      backgroundColor: "var(--primary-dark-panel)",
      textColor: "var(--primary-light)",
    },
  ] as const;

  useGSAP(
    () => {
      const footer = footerRef.current;
      if (!footer) return;

      const bounceFooter = (velocity = 0) => {
        bounceTweenRef.current?.kill();

        const speed = Math.abs(velocity);
        const distance = gsap.utils.clamp(12, 44, speed / 120);
        const variation = gsap.utils.clamp(0, 0.55, speed / 5000);

        bounceTweenRef.current = gsap.fromTo(
          footer,
          { y: distance },
          {
            y: 0,
            duration: 1.9,
            ease: `elastic.out(${1 + variation}, ${Math.max(0.45, 1 - variation)})`,
            overwrite: true,
            clearProps: "y",
          },
        );
      };

      const trigger = ScrollTrigger.create({
        trigger: footer,
        start: "top bottom",
        onEnter: (self) => {
          bounceFooter(self.getVelocity());
        },
        onEnterBack: (self) => {
          bounceFooter(self.getVelocity());
        },
      });

      return () => {
        bounceTweenRef.current?.kill();
        trigger.kill();
      };
    },
    { scope: footerRef },
  );

  return (
    <footer
      ref={footerRef}
      className={styles.footer}
      aria-label={FOOTER_WRAPPER_TEXT.footerAriaLabel}
    >
      <section
        className={styles.callout}
        aria-label={FOOTER_WRAPPER_TEXT.joinMissionAriaLabel}
      >
        <div className={styles.calloutText}>
          <SectionHeader
            wrapperClassName={styles.footerHeaderWrapper}
            className={styles.calloutHeader}
            title={FOOTER_CALLOUT_CONTENT.title}
            titleHighlightSlice={[17, 32]}
            // subtitle={FOOTER_CALLOUT_CONTENT.body}
            // subtitleAlignment="left"
            cta={{
              text: FOOTER_CALLOUT_CONTENT.cta.text,
              href: FOOTER_CALLOUT_CONTENT.cta.href,
              icon: "arrowRight",
              backgroundColor: "var(--primary-color-light)",
              textColor: "var(--primary-dark)",
            }}
          />
        </div>
      </section>

      <div className={styles.surface}>
        <div className={styles.inner}>
          <div className={styles.brandRow}>
            <div className={styles.brandLockup}>
              <span className={styles.logoBox}>
                <Image
                  src="/usds-logo-cropped.svg"
                  alt={FOOTER_WRAPPER_TEXT.logoAlt}
                  fill
                  priority
                  className={styles.logoImg}
                />
              </span>
              <p className={styles.logoHeading}>{FOOTER_WRAPPER_TEXT.logoHeading}</p>
            </div>
            <span className={styles.brandMark}>{FOOTER_WRAPPER_TEXT.brandMark}</span>
          </div>

          <div className={styles.mainGrid}>
            <div className={styles.linkColumns}>
              {FOOTER_COLUMNS.map((column) => (
                <nav key={column.title} className={styles.column} aria-label={column.title}>
                  <p className={styles.colTitle}>{column.title}</p>
                  <ul className={styles.linkList}>
                    {column.links.map((link) => (
                      <li key={`${column.title}-${link.label}`}>
                        <Link href={link.href}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>

            <aside
              className={styles.actionPanel}
              aria-label={FOOTER_WRAPPER_TEXT.primaryActionsAriaLabel}
            >
              <div className={styles.actionCtas}>
                {FOOTER_ACTIONS.map((action, index) => (
                  <CTA
                    key={action.text}
                    text={action.text}
                    href={action.href}
                    backgroundColor={actionStyles[index]?.backgroundColor ?? actionStyles[0].backgroundColor}
                    textColor={actionStyles[index]?.textColor ?? actionStyles[0].textColor}
                  />
                ))}
              </div>
              <p className={styles.actionMeta}>
                {FOOTER_WRAPPER_TEXT.officialSiteNotice}
              </p>
            </aside>
          </div>

          <div className={styles.bottomRow}>
            <ul className={styles.policyList}>
              {FOOTER_POLICIES.map((policy) => (
                <li key={policy.label}>
                  <Link href={policy.href}>{policy.label}</Link>
                </li>
              ))}
            </ul>

            <div className={styles.socialWrap}>
              <FooterSocialLinks socials={FOOTER_SOCIALS} />
            </div>

            <p className={styles.notice}>
              © {year} {FOOTER_WRAPPER_TEXT.rightsReservedSuffix}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
