import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  ...(isGitHubPages ? {
    output: "export" as const,
    basePath: "/anna-zieniute-site",
    assetPrefix: "/anna-zieniute-site",
  } : {}),
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: isGitHubPages,
  },
  poweredByHeader: false,
  async redirects() {
    if (isGitHubPages) return [];
    return [{ source: "/", destination: "/lt", permanent: false }];
  },
};

export default nextConfig;
