import type { Metadata } from "next";
import CareersPageClient from "./CareersPageClient";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.usds.gov";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore careers at U.S. DOGE Service (USDS) and apply for mission-driven tours of service across engineering, design, data, product, and procurement.",
  keywords: [
    "USDS careers",
    "U.S. DOGE Service jobs",
    "U.S. Digital Service careers",
    "federal technology jobs",
    "public service engineering",
  ],
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    url: `${siteUrl}/careers`,
    title: "Careers | U.S. DOGE Service (USDS)",
    description:
      "Join mission-driven teams modernizing critical government services through short tours of service.",
    images: [
      {
        url: "/usds-logo-cropped.svg",
        alt: "U.S. DOGE Service logo",
      },
    ],
  },
  twitter: {
    title: "Careers | U.S. DOGE Service (USDS)",
    description:
      "Explore open career tracks at USDS and apply to serve on high-impact government modernization teams.",
    images: ["/usds-logo-cropped.svg"],
  },
};

export default function CareersPage() {
  return <CareersPageClient />;
}
