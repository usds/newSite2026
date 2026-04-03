import type { Metadata } from "next";
import CareersPageClient from "./CareersPageClient";
import {
  ROUTE_METADATA_TEXT,
  SHARED_METADATA_TEXT,
  SITE_URL_FALLBACK,
} from "@/text/metadata";
import { toAbsoluteSiteUrl, withBasePath } from "@/utils/basePath";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  SITE_URL_FALLBACK;
const pageMeta = ROUTE_METADATA_TEXT.careers;
const canonicalPath = withBasePath(pageMeta.canonical);
const logoPath = withBasePath(SHARED_METADATA_TEXT.logoImagePath);

export const metadata: Metadata = {
  title: pageMeta.title,
  description: pageMeta.description,
  keywords: [...pageMeta.keywords],
  alternates: {
    canonical: canonicalPath,
  },
  openGraph: {
    url: toAbsoluteSiteUrl(pageMeta.canonical, siteUrl),
    title: pageMeta.openGraphTitle,
    description: pageMeta.openGraphDescription,
    images: [
      {
        url: logoPath,
        alt: SHARED_METADATA_TEXT.logoAlt,
      },
    ],
  },
  twitter: {
    title: pageMeta.twitterTitle,
    description: pageMeta.twitterDescription,
    images: [logoPath],
  },
};

export default function CareersPage() {
  return <CareersPageClient />;
}
