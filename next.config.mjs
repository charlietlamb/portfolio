/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_AWS_CLOUDFRONT_URL.split('/')[2],
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
