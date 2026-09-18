/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.mux.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/resultados",
        destination: "/cases",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;