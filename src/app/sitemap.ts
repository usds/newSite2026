import type { MetadataRoute } from "next";
import { SITE_URL_FALLBACK } from "@/text/metadata";

export const dynamic = "force-static";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || SITE_URL_FALLBACK;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const extraRoutes = [
    "/about",
    "/about/people",
    "/about/people/seth-eheart",
    "/impact",
    "/impact/congress",
    "/impact/fafsa",
    "/impact/va-ai",
    "/impact/state-visas",
    "/impact/passport",
    "/agencies",
    "/dispatches",
    "/join",
    "/join/alumni",
    "/apply",
    "/privacy",
    "/contact",
  ] as const;

  return [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/mission`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/projects`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/how-we-work`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/hiring-faq`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/careers`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...extraRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}
