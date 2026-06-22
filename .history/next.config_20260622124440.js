/** @type {import('next').NextConfig} */
const nextConfig = {
   trailingSlash: false,
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://192.168.1.11:3000",
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

module.exports = nextConfig;
