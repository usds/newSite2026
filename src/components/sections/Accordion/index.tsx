"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ChevronDown } from "lucide-react";
import styles from "./Accordion.module.css";

export type AccordionItem = {
  id: string;
  title: string;
  body: string;
};

type Props = {
  items: AccordionItem[];
  className?: string;
  defaultOpenId?: string;
  allowCollapse?: boolean;
};

gsap.registerPlugin(useGSAP);

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function Accordion({
  items,
  className,
  defaultOpenId,
  allowCollapse = true,
}: Props) {
  const initialOpenId = useMemo(() => {
    if (!items.length) return null;
    if (defaultOpenId && items.some((item) => item.id === defaultOpenId)) {
      return defaultOpenId;
    }
    return items[0].id;
  }, [defaultOpenId, items]);

  const [openId, setOpenId] = useState<string | null>(initialOpenId);
  const panelRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const panelInnerRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    setOpenId(initialOpenId);
  }, [initialOpenId]);

  useGSAP(
    () => {
      const reduced = prefersReducedMotion();

      items.forEach((item) => {
        const panel = panelRefs.current[item.id];
        const panelInner = panelInnerRefs.current[item.id];
        if (!panel || !panelInner) return;

        const isOpen = item.id === openId;
        const targetHeight = isOpen ? panelInner.offsetHeight : 0;

        gsap.killTweensOf(panel);

        if (reduced) {
          gsap.set(panel, { height: targetHeight, opacity: isOpen ? 1 : 0 });
          return;
        }

        gsap.to(panel, {
          height: targetHeight,
          opacity: isOpen ? 1 : 0,
          duration: 0.38,
          ease: "power2.out",
          overwrite: "auto",
        });
      });
    },
    { dependencies: [items, openId] },
  );

  useEffect(() => {
    if (!openId) return;

    const panel = panelRefs.current[openId];
    const panelInner = panelInnerRefs.current[openId];
    if (!panel || !panelInner) return;

    const syncHeight = () => {
      gsap.set(panel, { height: panelInner.offsetHeight });
    };

    syncHeight();

    if (typeof ResizeObserver !== "undefined") {
      const observer = new ResizeObserver(syncHeight);
      observer.observe(panelInner);
      return () => observer.disconnect();
    }

    window.addEventListener("resize", syncHeight);
    return () => window.removeEventListener("resize", syncHeight);
  }, [openId]);

  const onToggle = (id: string) => {
    setOpenId((current) => {
      if (current === id && allowCollapse) return null;
      return id;
    });
  };

  return (
    <div className={`${styles.wrapper} ${className ?? ""}`}>
      {items.map((item) => {
        const isOpen = item.id === openId;
        const triggerId = `${item.id}-trigger`;
        const panelId = `${item.id}-panel`;

        return (
          <article
            key={item.id}
            className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
          >
            <button
              id={triggerId}
              type="button"
              className={styles.trigger}
              onClick={() => onToggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span className={styles.title}>{item.title}</span>
              <span className={styles.icon} aria-hidden="true">
                <ChevronDown size={18} />
              </span>
            </button>

            <div
              id={panelId}
              className={styles.panel}
              role="region"
              aria-labelledby={triggerId}
              aria-hidden={!isOpen}
              ref={(element) => {
                panelRefs.current[item.id] = element;
              }}
            >
              <div
                className={styles.panelInner}
                ref={(element) => {
                  panelInnerRefs.current[item.id] = element;
                }}
              >
                <p className={styles.body}>{item.body}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
