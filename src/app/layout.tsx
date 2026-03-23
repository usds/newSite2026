import type { Metadata } from "next";
import "@trussworks/react-uswds/lib/uswds.css";
import "@trussworks/react-uswds/lib/index.css";
import { Public_Sans, Instrument_Serif, Outfit, Open_Sans, Inter } from "next/font/google";
import "./globals.css";
import HeaderWrapper from "@/components/general/HeaderWrapper";
import FooterWrapper from "@/components/general/FooterWrapper";
import LenisSmoothScroll from "@/utils/Initialization/LenisSmoothScroll";
// import Preloader from "@/components/general/Preloader";

const publicSans = Public_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-publicSans"
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-openSans"
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit"
});

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrumentSerif"
});

// const instrumentSerif = Instrument_Serif({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-instrumentSerif",
// });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://www.usds.gov";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "U.S. DOGE Service (USDS) | U.S. Digital Service",
    template: "%s | U.S. DOGE Service (USDS)",
  },
  description:
    "U.S. DOGE Service (USDS), also known as the U.S. Digital Service, partners with agencies to modernize critical government services, improve user experience, and deliver measurable public impact.",
  applicationName: "U.S. DOGE Service",
  keywords: [
    "USDS",
    "U.S. DOGE Service",
    "US DOGE Service",
    "U.S. Digital Service",
    "US Digital Service",
    "government technology",
    "federal digital service",
    "public service technology",
  ],
  alternates: {
    canonical: "/",
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
    url: "/",
    siteName: "U.S. DOGE Service (USDS)",
    title: "U.S. DOGE Service (USDS) | U.S. Digital Service",
    description:
      "USDS helps government deliver fast, secure, and user-centered digital services for the American people.",
    images: [
      {
        url: "/usds-logo-cropped.svg",
        alt: "U.S. DOGE Service logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "U.S. DOGE Service (USDS) | U.S. Digital Service",
    description:
      "USDS helps government deliver fast, secure, and user-centered digital services for the American people.",
    images: ["/usds-logo-cropped.svg"],
  },
  icons: {
    icon: [
      {
        url: "/usds-logo-cropped.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: ["/usds-logo-cropped.svg"],
    apple: ["/usds-logo-cropped.svg"],
  },
  creator: "U.S. DOGE Service",
  publisher: "U.S. DOGE Service",
  category: "government",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "U.S. DOGE Service (USDS)",
    alternateName: ["U.S. Digital Service", "USDS", "US DOGE Service"],
    url: siteUrl,
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "U.S. DOGE Service",
    alternateName: ["U.S. Digital Service", "USDS"],
    url: siteUrl,
    logo: `${siteUrl}/usds-logo-cropped.svg`,
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <a href="#main-content" className="skipLink">
          Skip to main content
        </a>
        <LenisSmoothScroll />
        <HeaderWrapper />
        <main id="main-content" className="appMain" tabIndex={-1}>
          {children}
        </main>

        <FooterWrapper />
      </body>
    </html>
  );
}
