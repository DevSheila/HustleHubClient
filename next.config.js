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


    GITHUB_ID: "5c16465e07d60aacdf2a",
    GITHUB_SECRET: "c0c9dee12b3ede8312ac595b7937fa87edb3dfea",
  
    GOOGLE_MAPS_API_KEY: "AIzaSyB68BIJkMeQLuHc2eXW5UOVGnzIPKfs7Hg",
    TRIP_ADVISOR_API_KEY:"0ad5345e3cmsh0252cb9761788fep1c8b4fjsnd3a3740b38c1"

  },
};

module.exports = nextConfig;

