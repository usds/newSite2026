import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://www.usds.gov";

export const metadata: Metadata = {
  title: "Mission",
  description:
    "Learn the mission, values, origin story, and measurable impact of U.S. DOGE Service (USDS), also known as the U.S. Digital Service.",
  keywords: [
    "USDS mission",
    "U.S. DOGE Service mission",
    "U.S. Digital Service mission",
    "government digital modernization",
    "federal technology mission",
  ],
  alternates: {
    canonical: "/mission",
  },
  openGraph: {
    url: `${siteUrl}/mission`,
    title: "Mission | U.S. DOGE Service (USDS)",
    description:
      "See how USDS improves critical government services through engineering, design, and public service collaboration.",
    images: [
      {
        url: "/usds-logo-cropped.svg",
        alt: "U.S. DOGE Service logo",
      },
    ],
  },
  twitter: {
    title: "Mission | U.S. DOGE Service (USDS)",
    description:
      "See how USDS improves critical government services through engineering, design, and public service collaboration.",
    images: ["/usds-logo-cropped.svg"],
  },
};

export default function MissionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
