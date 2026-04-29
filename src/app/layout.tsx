import type { Metadata } from "next";
import Link from "next/link";
import {
  Public_Sans,
  Outfit,
  Open_Sans,
  Inter,
  Space_Grotesk,
  Space_Mono,
} from "next/font/google";
import "./globals.css";
import HeaderWrapper from "@/components/general/HeaderWrapper";
import FooterWrapper from "@/components/general/FooterWrapper";
import ImageBreak from "@/ui/ImageBreak";
import LenisSmoothScroll from "@/utils/Initialization/LenisSmoothScroll";
import {
  ROOT_LAYOUT_METADATA_TEXT,
  SHARED_METADATA_TEXT,
  SITE_URL_FALLBACK,
} from "@/text/metadata";
import { getImageBreakScene } from "@/text/imageBreaks";
import { toAbsoluteSiteUrl, withBasePath } from "@/utils/basePath";
import styles from "./layout.module.css";
// import Preloader from "@/components/general/Preloader";

const publicSans = Public_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-publicSans",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-openSans",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-spaceGrotesk",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-spaceMono",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || SITE_URL_FALLBACK;
const homePath = withBasePath("/");
const logoPath = withBasePath(SHARED_METADATA_TEXT.logoImagePath);

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: ROOT_LAYOUT_METADATA_TEXT.title.default,
    template: ROOT_LAYOUT_METADATA_TEXT.title.template,
  },
  description: ROOT_LAYOUT_METADATA_TEXT.description,
  applicationName: ROOT_LAYOUT_METADATA_TEXT.applicationName,
  keywords: [...ROOT_LAYOUT_METADATA_TEXT.keywords],
  alternates: {
    canonical: homePath,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: toAbsoluteSiteUrl("/", siteUrl),
    siteName: ROOT_LAYOUT_METADATA_TEXT.openGraph.siteName,
    title: ROOT_LAYOUT_METADATA_TEXT.openGraph.title,
    description: ROOT_LAYOUT_METADATA_TEXT.openGraph.description,
    images: [
      {
        url: logoPath,
        alt: SHARED_METADATA_TEXT.logoAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: ROOT_LAYOUT_METADATA_TEXT.twitter.title,
    description: ROOT_LAYOUT_METADATA_TEXT.twitter.description,
    images: [logoPath],
  },
  icons: {
    icon: [
      {
        url: logoPath,
        type: "image/svg+xml",
      },
    ],
    shortcut: [logoPath],
    apple: [logoPath],
  },
  creator: ROOT_LAYOUT_METADATA_TEXT.creator,
  publisher: ROOT_LAYOUT_METADATA_TEXT.publisher,
  category: ROOT_LAYOUT_METADATA_TEXT.category,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: ROOT_LAYOUT_METADATA_TEXT.schema.websiteName,
    alternateName: ROOT_LAYOUT_METADATA_TEXT.schema.websiteAlternateNames,
    url: siteUrl,
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: ROOT_LAYOUT_METADATA_TEXT.schema.organizationName,
    alternateName: ROOT_LAYOUT_METADATA_TEXT.schema.organizationAlternateNames,
    url: siteUrl,
    logo: toAbsoluteSiteUrl(SHARED_METADATA_TEXT.logoImagePath, siteUrl),
  };

  return (
    <html lang="en">
      <body
        id="top"
        className={`${publicSans.variable} ${inter.variable} ${spaceGrotesk.variable} ${spaceMono.variable} ${outfit.variable} ${openSans.variable}`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <LenisSmoothScroll />
        <HeaderWrapper />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <ImageBreak
          src={getImageBreakScene(0).src}
          alt={getImageBreakScene(0).alt}
        />
        <FooterWrapper />
      </body>
    </html>
  );
}
