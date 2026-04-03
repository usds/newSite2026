import type { Metadata } from "next";
import {
  Public_Sans,
  Instrument_Serif,
  Outfit,
  Open_Sans,
  Inter,
} from "next/font/google";
import "./globals.css";
import HeaderWrapper from "@/components/general/HeaderWrapper";
import FooterWrapper from "@/components/general/FooterWrapper";
import LenisSmoothScroll from "@/utils/Initialization/LenisSmoothScroll";
import {
  ROOT_LAYOUT_METADATA_TEXT,
  SHARED_METADATA_TEXT,
  SITE_URL_FALLBACK,
} from "@/text/metadata";
import { ROOT_LAYOUT_UI_TEXT } from "@/text/ui";
import { toAbsoluteSiteUrl, withBasePath } from "@/utils/basePath";
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

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrumentSerif",
});

// const instrumentSerif = Instrument_Serif({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-instrumentSerif",
// });

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
        className={`${publicSans.variable} ${instrumentSerif.variable} ${inter.variable} ${outfit.variable} ${openSans.variable}`}
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
        <a href="#" className="skipLink">
          <div className="skipLinkInner">{ROOT_LAYOUT_UI_TEXT.skipLink}</div>
        </a>
        <LenisSmoothScroll />
        <HeaderWrapper />
        <main tabIndex={-1}>
          {children}
        </main>

        <FooterWrapper />
      </body>
    </html>
  );
}
