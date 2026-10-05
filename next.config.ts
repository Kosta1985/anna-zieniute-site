import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const isNetlifyStatic = process.env.NETLIFY_STATIC === "true";
const isStaticExport = isGitHubPages || isNetlifyStatic;

const nextConfig: NextConfig = {
  ...(isStaticExport ? {
    output: "export" as const,
  } : {}),
  ...(isGitHubPages ? {
    basePath: "/anna-zieniute-site",
    assetPrefix: "/anna-zieniute-site",
  } : {}),
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: isStaticExport,
  },
  poweredByHeader: false,
  async redirects() {
    if (isStaticExport) return [];
    return [{ source: "/", destination: "/lt", permanent: false }];
  },
};

export default nextConfig;
