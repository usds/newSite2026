"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import CTA from "@/components/buttons/CTA";
import Image from "next/image";
import styles from "./HeaderWrapper.module.css";
import { ChevronDown } from "lucide-react";
import { HEADER_NAV_ITEMS } from "@/content/site";

export default function HeaderWrapper() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const mobileNavId = "mobile-primary-nav";

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setOpenDropdown(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (!target) return;
      if (headerRef.current?.contains(target)) return;
      setOpenDropdown(null);
      setMobileOpen(false);
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
    <header className={styles.wrapper} aria-label="Site header" ref={headerRef}>
      <div className={styles.innerWrapper}>
        <div className={styles.inner}>
          <Link href="/" className={styles.brand} aria-label="Home">
            <span className={styles.logoBox}>
              <Image
                src="/usds-logo-cropped.svg"
                alt="USDS logo"
                fill
                priority
                className={styles.logoImg}
              />
            </span>
            <span className={styles.brandText}>U.S. DOGE Service</span>
          </Link>

          <nav className={styles.navDesktop} aria-label="Primary navigation">
            <ul className={styles.navList}>
              {nav.map((item) => {
                if (item.type === "link") {
                  return (
                    <li key={item.label} className={styles.navItem}>
                      <Link className={styles.navLink} href={item.href}>
                        {item.label}
                      </Link>
                    </li>
                  );
                }
                
                if (item.type === "dropdown") {
                  const dropdownId = `${item.label.toLowerCase().replace(/\s+/g, "-")}-menu`;

                  return (
                    <li key={item.label} className={styles.navItem}>
                      <button
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
                      </button>

                      {openDropdown === item.label && (
                        <ul className={styles.dropdown} id={dropdownId}>
                          {item.items.map((dd) => (
                            <li key={dd.href}>
                              <Link
                                href={dd.href}
                                className={styles.dropdownLink}
                                onClick={() => setOpenDropdown(null)}
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
                    <CTA text={item.label} href={item.href} key={item.label} backgroundColor="var(--primary-color-light)" textColor="var(--primary-dark)" className={styles.headerCTA}/>
                  )
                }
              })}
            </ul>
          </nav>

          <button
            type="button"
            className={styles.mobileToggle}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls={mobileNavId}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className={styles.mobileBars} aria-hidden="true" />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className={styles.mobilePanel}>
          <nav aria-label="Mobile primary navigation" id={mobileNavId}>
            <ul className={styles.mobileList}>
              {nav.map((item) => {
                if (item.type === "link") {
                  return (
                    <li key={item.href} className={styles.mobileItem}>
                      <Link
                        href={item.href}
                        className={styles.mobileLink}
                        onClick={() => setMobileOpen(false)}
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
                              onClick={() => setMobileOpen(false)}
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
                  <li key={item.label} className={styles.mobileItem}>
                    <CTA
                      text={item.label}
                      href={item.href}
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
