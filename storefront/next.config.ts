import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export → plain HTML/CSS/JS that GitHub Pages can host (no Node server).
  output: "export",
  // GitHub Pages serves /path/ as /path/index.html; trailing slashes keep routes clean.
  trailingSlash: true,
  // No Next image optimization server in a static export.
  images: { unoptimized: true },
};

export default nextConfig;
