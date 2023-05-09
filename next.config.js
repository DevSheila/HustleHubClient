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
    // DB_URI:"mongodb+srv://Sheila:Sheila%408@trackieapi.ss0ark2.mongodb.net/?retryWrites=true&w=majority",
    NEXTAUTH_SECRET: "codingwithabbas",
    MONGO_URL:"mongodb+srv://sheilasharon10:2JnGTnonuXyvC5E8@cluster0.s7wyyb2.mongodb.net/?retryWrites=true&w=majority",

    GOOGLE_CLIENT_ID: "533089059515-6h3sftlr7aoh43armotdrne4cb39gtd0.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",

    GITHUB_ID: "5c16465e07d60aacdf2a",
    GITHUB_SECRET: "c0c9dee12b3ede8312ac595b7937fa87edb3dfea",
  },
};

module.exports = nextConfig;

