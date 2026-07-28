import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["100.119.3.44"],
  /* config options here */
  // reactCompiler: true, // disabled due to framer-motion conflicts
};

export default nextConfig;
