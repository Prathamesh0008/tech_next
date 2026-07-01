/** @type {import('next').NextConfig} */
const nextConfig = {
  skipTrailingSlashRedirect: true,
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://192.168.1.11:3000",
  ],
  images: {
    contentDispositionType: "inline",
  },
};

module.exports = nextConfig;
