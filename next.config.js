/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "s3.us-west-2.amazonaws.com",
      "dl.dropbox.com",
      "dl.dropboxusercontent.com",
      "dropbox.com",
      "th1.pcloud.com",
      "th2.pcloud.com",
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.dl.dropboxusercontent.com',
      },
      {
        protocol: 'https',
        hostname: '*.pcloud.com',
      },
    ]
  },
};

module.exports = nextConfig;
