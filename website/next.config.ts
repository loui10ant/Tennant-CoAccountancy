import type { NextConfig } from "next";

// Buildspec §2 — deploys to Cloudflare Pages, which needs a static export.
// No API routes, server actions, middleware, or next/image optimisation.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
