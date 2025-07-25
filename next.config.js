/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "s3.us-west-2.amazonaws.com",
      "dl.dropbox.com",
      "dl.dropboxusercontent.com",
      "dropbox.com",
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.dl.dropboxusercontent.com',
      },
    ]
  },
};

module.exports = nextConfig;
