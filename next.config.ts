import type { NextConfig } from "next";

const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim() ?? "";
const basePath =
  rawBasePath.length > 0
    ? rawBasePath.startsWith("/")
      ? rawBasePath.replace(/\/$/, "")
      : `/${rawBasePath.replace(/\/$/, "")}`
    : "";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
  experimental: {
    turbopackUseSystemTlsCerts: true,
  },
};

export default nextConfig;
