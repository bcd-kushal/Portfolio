import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    ppr: "incremental"
  },
  logging: {
    fetches: {
      fullUrl: true
    }
  },
  redirects: async () => {
    return [
      // ABOUT PAGE ===========================
      {
        source: "/about-me",
        destination: "/about",
        permanent: true
      },
      // PROJECTS PAGE ===========================
      {
        source: "/works",
        destination: "/projects",
        permanent: true
      },
      {
        source: "/project",
        destination: "/projects",
        permanent: true
      },
      // BLOGS PAGE ===========================
      {
        source: "/blog",
        destination: "/blogs",
        permanent: true
      },
      {
        source: "/blog/:slug",
        destination: "/blogs/:slug",
        permanent: true
      },
      // HOME PAGE ===========================
      {
        source: "/home",
        destination: "/",
        permanent: true
      },
      {
        source: "/homepage",
        destination: "/",
        permanent: true
      }
    ]
  }
};

export default nextConfig;
