import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ── GitHub Pages static export ─────────────────────────────────────────────
  output: "export",       // generates /out folder of static HTML/CSS/JS
  trailingSlash: true,    // /about → /about/index.html — required for GH Pages routing

  // next/image optimization requires a running server; disable for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
