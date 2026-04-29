"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CTA from "@/components/buttons/CTA";
import Image from "next/image";
import styles from "./HeaderWrapper.module.css";
import { ChevronDown } from "lucide-react";
import { HEADER_NAV_ITEMS } from "@/text/site";
import { HEADER_WRAPPER_TEXT } from "@/text/ui";
import { motion } from "motion/react";
import { withBasePath } from "@/utils/basePath";

export default function HeaderWrapper() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const openDesktopDropdownRef = useRef<HTMLLIElement | null>(null);
  const mobileNavId = "mobile-primary-nav";
  const closeMenus = useCallback(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
  }, []);

  useEffect(() => {
    closeMenus();
  }, [closeMenus, pathname]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closeMenus]);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (!target) return;

      const clickedInsideHeader = headerRef.current?.contains(target) ?? false;
      const clickedInsideOpenDesktopDropdown =
        openDesktopDropdownRef.current?.contains(target) ?? false;

      if (!clickedInsideOpenDesktopDropdown) {
        setOpenDropdown(null);
      }

      if (!clickedInsideHeader) {
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown, { passive: true });

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, []);

  const nav = HEADER_NAV_ITEMS;

  return (
    <header
      className={styles.wrapper}
      aria-label={HEADER_WRAPPER_TEXT.headerAriaLabel}
      ref={headerRef}
    >
      <div className={styles.innerWrapper}>
        <div className={styles.inner}>
          <Link
            href="/"
            className={styles.brand}
            aria-label={HEADER_WRAPPER_TEXT.homeAriaLabel}
            onClick={closeMenus}
          >
            <span className={styles.logoBox}>
              <Image
                src={withBasePath("/usds-logo-cropped.svg")}
                alt={HEADER_WRAPPER_TEXT.logoAlt}
                fill
                priority
                className={styles.logoImg}
              />
            </span>
            <span className={styles.brandText}>{HEADER_WRAPPER_TEXT.brandName}</span>
          </Link>

          <nav
            className={styles.navDesktop}
            aria-label={HEADER_WRAPPER_TEXT.primaryNavigationAriaLabel}
          >
            <ul className={styles.navList}>
              {nav.map((item) => {
                if (item.type === "link") {
                  return (
                    <li key={item.label} className={styles.navItem}>
                      <Link className={styles.navLink} href={item.href} onClick={closeMenus}>
                        {item.label}
                      </Link>
                    </li>
                  );
                }
                
                if (item.type === "dropdown") {
                  const dropdownId = `${item.label.toLowerCase().replace(/\s+/g, "-")}-menu`;

                  return (
                    <li
                      key={item.label}
                      className={styles.navItem}
                      ref={openDropdown === item.label ? openDesktopDropdownRef : null}
                    >
                      <motion.button
                        type="button"
                        className={styles.navButton}
                        aria-haspopup="true"
                        aria-expanded={
                          openDropdown === item.label ? "true" : "false"
                        }
                        aria-controls={dropdownId}
                        onClick={() =>
                          setOpenDropdown((cur) =>
                            cur === item.label ? null : item.label,
                          )
                        }
                      >
                        {item.label}
                        <span className={styles.chev} aria-hidden="true">
                          <ChevronDown />
                        </span>
                      </motion.button>

                      {openDropdown === item.label && (
                        <ul className={styles.dropdown} id={dropdownId}>
                          {item.items.map((dd) => (
                            <li key={dd.href}>
                              <Link
                                href={dd.href}
                                className={styles.dropdownLink}
                                onClick={closeMenus}
                              >
                                {dd.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                }

                if (item.type === "cta") {
                  return (
                    <li
                      key={item.text}
                      className={`${styles.navItem} ${styles.navItemCta}`}
                    >
                      <CTA
                        text={item.text}
                        href={item.href}
                        icon="arrowRight"
                        backgroundColor="var(--primary-color-light)"
                        textColor="var(--primary-dark)"
                        className={styles.headerCTA}
                      />
                    </li>
                  );
                }
              })}
            </ul>
          </nav>

          <motion.button
            type="button"
            className={styles.mobileToggle}
            aria-label={
              mobileOpen
                ? HEADER_WRAPPER_TEXT.mobileToggleLabelClose
                : HEADER_WRAPPER_TEXT.mobileToggleLabelOpen
            }
            aria-expanded={mobileOpen}
            aria-controls={mobileNavId}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className={styles.mobileBars} aria-hidden="true" />
          </motion.button>
        </div>
      </div>

      {mobileOpen && (
        <div className={styles.mobilePanel}>
          <nav
            aria-label={HEADER_WRAPPER_TEXT.mobileNavigationAriaLabel}
            id={mobileNavId}
          >
            <ul className={styles.mobileList}>
              {nav.map((item) => {
                if (item.type === "link") {
                  return (
                    <li key={item.href} className={styles.mobileItem}>
                      <Link
                        href={item.href}
                        className={styles.mobileLink}
                        onClick={closeMenus}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                }

                if (item.type === "dropdown") {
                  return (
                    <li key={item.label} className={styles.mobileItem}>
                      <details className={styles.mobileDetails}>
                        <summary className={styles.mobileSummary}>
                          {item.label}
                        </summary>
                        <div className={styles.mobileSub}>
                          {item.items.map((dd) => (
                            <Link
                              key={dd.href}
                              href={dd.href}
                              className={styles.mobileSublink}
                              onClick={closeMenus}
                            >
                              {dd.label}
                            </Link>
                          ))}
                        </div>
                      </details>
                    </li>
                  );
                }

                return (
                  <li key={item.text} className={styles.mobileItem}>
                    <CTA
                      text={item.text}
                      href={item.href}
                      icon="arrowRight"
                      backgroundColor="var(--primary-color-light)"
                      textColor="var(--primary-dark)"
                    />
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
