/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: { appDir: true },
    images: {
        domains: [
            "www.digikala.com",
            "www.seyedrezabazyar.com",
            "www.uptvs.com",
            "sorenmovie.ir",
            "i.redd.it",
            "api.themoviedb.org",
            "image.tmdb.org"
        ]
    }
}

module.exports = nextConfig
