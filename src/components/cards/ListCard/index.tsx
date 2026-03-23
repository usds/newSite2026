"use client";

import ImpactCard from "@/components/cards/ImpactCard";
import type { IconName } from "@/components/cards/ImpactCard";

type ListCardProps = {
  icon: IconName;
  tag: string;
  title: string;
  bullets: string[];
  pill?: string;
  tone?: "default" | "soft";
};

export default function ListCard({
  icon,
  tag,
  title,
  bullets,
  pill,
  tone = "default",
}: ListCardProps) {
  return (
    <ImpactCard
      variant={tone === "soft" ? "soft" : "default"}
      icon={icon}
      status={pill}
      eyebrow={tag}
      title={title}
      bullets={bullets}
    />
  );
}
