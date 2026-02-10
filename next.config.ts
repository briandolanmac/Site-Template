import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "*.replit.dev",
    "*.repl.co",
    "*.spock.replit.dev",
    "127.0.0.1",
    "0.0.0.0",
  ],
};

export default nextConfig;
