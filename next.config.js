/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
        MV_DETAIL: process.env.MV_DETAIL,
        TMDB_API_KEY: process.env.TMDB_API_KEY
    }
}

module.exports = nextConfig
