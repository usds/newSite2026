"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./communities.module.css";
import { COMMUNITY_DISCIPLINES } from "@/content/communities";
import Modal from "./Modal";

type Props = {
  communities: string[];
};

export type ModalState = {
  active: boolean;
  index: number;
};

export default function Communities({ communities }: Props) {
  const [modal, setModal] = useState<ModalState>({
    active: false,
    index: 0,
  });

  const hrefByCommunity: Map<string, string> = new Map(
    COMMUNITY_DISCIPLINES.map((community) => [
      community.title,
      `/how-we-work#${community.id}`,
    ]),
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>Communities We Hire From</div>

      <div className={styles.body}>
        {communities.map((community, index) => {
          const isActive = modal.active && modal.index === index;

          return (
          <Link
            key={community}
            href={hrefByCommunity.get(community) ?? "/how-we-work#who-we-hire"}
            className={`${styles.communityLink} ${isActive ? styles.communityLinkActive : ""}`}
            onMouseEnter={() => {
              setModal({ active: true, index });
            }}
            onMouseLeave={() => {
              setModal((prev) => ({ ...prev, active: false }));
            }}
            onFocus={() => {
              setModal({ active: true, index });
            }}
            onBlur={() => {
              setModal((prev) => ({ ...prev, active: false }));
            }}
          >
            <span>{community}</span>
            <span className={styles.linkMeta}>View details</span>
          </Link>
          );
        })}
      </div>

      <Modal modal={modal} communities={communities} />
    </div>
  );
}
