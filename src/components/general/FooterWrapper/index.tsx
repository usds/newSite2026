"use client";

import styles from "./FooterWrapper.module.css";
import { SocialLinks } from "@trussworks/react-uswds";
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
} from "@/content/site";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function FooterWrapper() {
  const footerRef = useRef<HTMLElement | null>(null);
  const bounceTweenRef = useRef<gsap.core.Tween | null>(null);
  const year = new Date().getFullYear();
  const socialIconByKey: Record<string, string> = {
    x: "x",
    linkedin: "linkedin",
    github: "github",
    youtube: "youtube",
  };
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

  const socialLinkItems = FOOTER_SOCIALS.map(({ label, href }) => {
    const spriteKey = socialIconByKey[label.toLowerCase()] ?? "x";

    return (
    <a
      key={href}
      className="usa-social-link border-radius-primary padding-1"
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="display-flex flex-align-center flex-justify-center height-full width-full">
        <svg className="usa-icon width-full height-full" aria-hidden="true" focusable="false" role="img">
          <use href={`/assets/img/sprite.svg#${spriteKey}`} />
        </svg>
      </span>
    </a>
  )});

  return (
    <footer ref={footerRef} className={`usa-footer usa-footer--big ${styles.footer}`} aria-label="Footer">
      <section className={styles.callout} aria-label="Join the mission">
        <div className={styles.calloutText}>
          <SectionHeader
            className={styles.calloutHeader}
            title={FOOTER_CALLOUT_CONTENT.title}
            titleAs="h2"
            titleSize="large"
            titleAlignment="left"
            titleColor="primaryLight"
            titleHighlightColor="primaryColorLight"
            titleHighlightSlice={[17, 32]}
          />
          <p className={styles.calloutBody}>
            {FOOTER_CALLOUT_CONTENT.body}
          </p>
          <div className={styles.calloutCta}>
            <CTA
              text={FOOTER_CALLOUT_CONTENT.ctaText}
              href={FOOTER_CALLOUT_CONTENT.ctaHref}
              icon="arrowRight"
              backgroundColor="var(--primary-color)"
              textColor="var(--primary-light)"
            />
          </div>
        </div>

        <aside className={styles.calloutRight} aria-hidden="true" />
      </section>

      <div className={`usa-footer__return-to-top ${styles.returnToTop}`}>
        <div className={styles.returnToTopInner}>
          <a href="#top" className={styles.returnToTopLink}>
            Return to top
          </a>
        </div>
      </div>

      <div className={styles.surface}>
        <div className={styles.inner}>
          <div className={styles.brandRow}>
            <div className={styles.brandLockup}>
              <span className={styles.logoBox}>
                <Image src="/usds-logo-cropped.svg" alt="U.S. DOGE Service logo" fill priority className={styles.logoImg} />
              </span>
              <p className={`usa-footer__logo-heading margin-y-0 ${styles.logoHeading}`}>U.S. DOGE Service</p>
            </div>
            <span className={styles.brandMark}>USDS</span>
          </div>

          <div className={styles.mainGrid}>
            <div className={styles.linkColumns}>
              {FOOTER_COLUMNS.map((column) => (
                <nav key={column.title} className={styles.column} aria-label={column.title}>
                  <p className={styles.colTitle}>{column.title}</p>
                  <ul className={`usa-list usa-list--unstyled ${styles.linkList}`}>
                    {column.links.map((link) => (
                      <li key={`${column.title}-${link.label}`}>
                        <Link href={link.href}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>

            <aside className={styles.actionPanel} aria-label="Primary actions">
              <div className={styles.actionCtas}>
                {FOOTER_ACTIONS.map((action, index) => (
                  <CTA
                    key={action.text}
                    text={action.text}
                    href={action.href}
                    icon="arrowRight"
                    backgroundColor={actionStyles[index]?.backgroundColor ?? actionStyles[0].backgroundColor}
                    textColor={actionStyles[index]?.textColor ?? actionStyles[0].textColor}
                  />
                ))}
              </div>
              <p className={styles.actionMeta}>
                An official website of the United States Government.
              </p>
            </aside>
          </div>

          <div className={styles.bottomRow}>
            <ul className={`usa-list usa-list--unstyled ${styles.policyList}`}>
              {FOOTER_POLICIES.map((policy) => (
                <li key={policy.label}>
                  <Link href={policy.href}>{policy.label}</Link>
                </li>
              ))}
            </ul>

            <div className={styles.socialWrap}>
              <SocialLinks links={socialLinkItems} />
            </div>

            <p className={styles.notice}>© {year} U.S. DOGE Service. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
