"use client";

import Link from "next/link";
import styles from "./Communities.module.css";
import {
  COMMUNITY_DISCIPLINES,
} from "@/text/communities";
import { HOME_COMMUNITIES_CONTENT } from "@/text/home";
import HoverCursorPreview from "@/components/general/HoverCursorPreview";
import Title from "@/components/general/Title";

type Props = {
  communities: string[];
};

export default function Communities({ communities }: Props) {
  const detailsByCommunity = new Map<
    string,
    (typeof COMMUNITY_DISCIPLINES)[number]
  >(COMMUNITY_DISCIPLINES.map((community) => [community.title, community]));

  const communityRows = communities.map((community) => {
    const detail = detailsByCommunity.get(community);

    return {
      id: detail?.id ?? community,
      title: community,
      href: detail
        ? `/how-we-work#${detail.id}`
        : HOME_COMMUNITIES_CONTENT.fallbackHref,
      employeePercentage: detail?.employeePercentage ?? "0%",
      focusTags: detail?.focusTags ?? [],
    };
  });

  const previewItems = communityRows.map((community) => ({
    id: community.id,
    preview: community.title,
    cursorTags: community.focusTags,
  }));

  return (
    <div className={styles.wrapper}>
      <Title text={HOME_COMMUNITIES_CONTENT.header} />

      <HoverCursorPreview
        items={previewItems}
        cursorLabel={HOME_COMMUNITIES_CONTENT.cursorLabel}
        renderTriggers={({ getTriggerProps, isActive }) => (
          <div className={styles.body}>
            {communityRows.map((community, index) => (
              <Link
                key={community.id}
                href={community.href}
                className={`${styles.communityLink} ${isActive(index) ? styles.communityLinkActive : ""}`}
                {...getTriggerProps(index)}
              >
                <span className={styles.communityMain}>
                  <span className={styles.communityName}>{community.title}</span>
                </span>
                <span className={styles.rightPercentage}>
                  <span className={styles.rightPercentageValue}>
                    {community.employeePercentage}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        )}
      />
    </div>
  );
}
