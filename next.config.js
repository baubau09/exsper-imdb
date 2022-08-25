/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
        MV_DETAIL: process.env.MV_DETAIL,
        TMDB_API_KEY: process.env.TMDB_API_KEY,
        IMG_URL: process.env.IMG_URL,
        MV_POPULAR: process.env.MV_POPULAR,
        MV_TOPRATED: process.env.MV_TOPRATED,
        DISCOVER: process.env.DISCOVER,
        P_DETAIL: process.env.P_DETAIL,
        P_POPULAR: process.env.P_POPULAR
    }
}

module.exports = nextConfig
