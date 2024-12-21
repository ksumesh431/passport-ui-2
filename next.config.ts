import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // for s3 so that next js create directories like /about/index.html instead of just /about
  basePath: "",
  env: {
    NEXT_PUBLIC_BASE_PATH: "",
  },
  output: "export", // changed from standalone to export to get static build
};

export default nextConfig;
