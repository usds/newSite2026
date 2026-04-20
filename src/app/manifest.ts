import type { MetadataRoute } from "next";
import { APP_MANIFEST_TEXT, SHARED_METADATA_TEXT } from "@/text/metadata";
import { withBasePath } from "@/utils/basePath";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: APP_MANIFEST_TEXT.name,
    short_name: APP_MANIFEST_TEXT.shortName,
    description: APP_MANIFEST_TEXT.description,
    start_url: withBasePath(APP_MANIFEST_TEXT.startUrl),
    display: "standalone",
    background_color: APP_MANIFEST_TEXT.backgroundColor,
    theme_color: APP_MANIFEST_TEXT.themeColor,
    icons: [
      {
        src: withBasePath(SHARED_METADATA_TEXT.logoImagePath),
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
