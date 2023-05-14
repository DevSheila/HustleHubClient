// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env: {
    DB_URI: "mongodb://localhost:27017/next13-auth",
       NEXTAUTH_SECRET: "",
    MONGO_URL:"",
    GOOGLE_CLIENT_ID: "",
    GOOGLE_CLIENT_SECRET: "",
    GITHUB_ID: "",
    GITHUB_SECRET: "",
    GOOGLE_MAPS_API_KEY: "",
    TRIP_ADVISOR_API_KEY:""
  },
};

module.exports = nextConfig;

