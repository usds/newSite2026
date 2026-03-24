"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./WhoWeHireScroller.module.css";
import type { CommunityDiscipline } from "@/content/communities";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  disciplines: readonly CommunityDiscipline[];
};

export default function WhoWeHireScroller({ disciplines }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const fillRef = useRef<HTMLSpanElement | null>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current || !fillRef.current || disciplines.length === 0) {
      return;
    }

    const ctx = gsap.context(() => {
      const sections = sectionRefs.current.filter(
        (section): section is HTMLElement => section !== null,
      );

      if (sections.length === 0) {
        return;
      }

      gsap.set(fillRef.current, {
        scaleY: 1 / sections.length,
        transformOrigin: "top left",
      });

      gsap.to(fillRef.current, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom bottom",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      sections.forEach((section, index) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveIndex(index),
          onEnterBack: () => setActiveIndex(index),
        });
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [disciplines.length]);

  return (
    <div ref={containerRef} className={styles.scroller}>
      <aside className={styles.left} aria-label="Community list">
        <div className={styles.leftInner}>
          <div className={styles.rail} aria-hidden="true">
            <span ref={fillRef} className={styles.fill} />
          </div>

          <ul className={styles.list}>
            {disciplines.map((discipline, index) => (
              <li
                key={discipline.id}
                className={`${styles.listItem} ${index === activeIndex ? styles.listItemActive : ""}`}
              >
                <Link href={`#${discipline.id}`} className={styles.listLink}>
                  {discipline.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <div className={styles.right}>
        {disciplines.map((discipline, index) => (
          <article
            key={discipline.id}
            id={discipline.id}
            ref={(element) => {
              sectionRefs.current[index] = element;
            }}
            className={styles.communitySection}
          >
            <div className={styles.card}>
              <p className={styles.eyebrow}>Community {index + 1}</p>
              <h3 className={styles.title}>{discipline.title}</h3>
              <p className={styles.summary}>{discipline.summary}</p>

              <h4 className={styles.rolesTitle}>Role focus</h4>
              <ul className={styles.rolesList}>
                {discipline.roles.map((role) => (
                  <li key={role} className={styles.roleItem}>
                    {role}
                  </li>
                ))}
              </ul>

              <p className={styles.skills}>{discipline.skills}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
