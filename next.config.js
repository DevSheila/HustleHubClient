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

    DB_URI: "mongodb://localhost:27017/next13-auth",
    // DB_URI:"mongodb+srv://Sheila:Sheila%408@trackieapi.ss0ark2.mongodb.net/?retryWrites=true&w=majority",
    NEXTAUTH_SECRET: "codingwithabbas",
    MONGO_URL:"mongodb+srv://sheilasharon10:2JnGTnonuXyvC5E8@cluster0.s7wyyb2.mongodb.net/?retryWrites=true&w=majority",


    GOOGLE_CLIENT_ID: "",
    GOOGLE_CLIENT_SECRET: "",

    GITHUB_ID: "",
    GITHUB_SECRET: "",
  },
};

module.exports = nextConfig;

