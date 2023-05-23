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
    // DB_URI: "mongodb://localhost:27017/next13-auth",
    NEXTAUTH_SECRET: "codingwithabbas",
    MONGO_URL:"mongodb+srv://sheilasharon10:2JnGTnonuXyvC5E8@cluster0.s7wyyb2.mongodb.net/?retryWrites=true&w=majority",

    GOOGLE_CLIENT_ID: "533089059515-6h3sftlr7aoh43armotdrne4cb39gtd0.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",

    FALU_KEY:"fskl_9ubw3NAokGIF4lC6K61o2YIGC4S2KVTwj2",
    GITHUB_ID: "5c16465e07d60aacdf2a",
    GITHUB_SECRET: "c0c9dee12b3ede8312ac595b7937fa87edb3dfea",
  
    GOOGLE_MAPS_API_KEY:'AIzaSyCY_fZ5ZvMlbHBCxkQdOlvsCboY8nmxaDM',
    // GOOGLE_MAPS_API_KEY: "AIzaSyB68BIJkMeQLuHc2eXW5UOVGnzIPKfs7Hg",
    TRIP_ADVISOR_API_KEY:"0ad5345e3cmsh0252cb9761788fep1c8b4fjsnd3a3740b38c1"

  },
};

module.exports = nextConfig;





