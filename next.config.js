// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    appDir: true,
  },
  env: {
   
    NEXTAUTH_SECRET: "",
    MONGO_URL:"",

    GOOGLE_CLIENT_ID: "",
    GOOGLE_CLIENT_SECRET: "",

    GITHUB_ID: "",
    GITHUB_SECRET: "",
  },
};

module.exports = nextConfig;

