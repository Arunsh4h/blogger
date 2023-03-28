/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath:
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_BASEPATH
      : "",
  // images: {
  //   loader: 'akamai',
  //   path: process.env.NEXT_PUBLIC_URL,
  // },
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL || "https://www.intself.com",
    GOOGLE_ID: process.env.GOOGLE_ID,
    GOOGLE_SECRET: process.env.GOOGLE_SECRET,
  },
};

module.exports = nextConfig;
