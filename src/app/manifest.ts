import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "U.S. DOGE Service (USDS)",
    short_name: "USDS",
    description:
      "U.S. DOGE Service (USDS) modernizes government technology to improve service delivery for the American people.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f1c2b",
    theme_color: "#0f1c2b",
    icons: [
      {
        src: "/usds-logo-cropped.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
