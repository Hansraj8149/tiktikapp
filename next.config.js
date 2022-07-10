/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  images: {
    domains: ['img.freepik.com', 'lh3.googleusercontent.com', 'external-preview.redd.it', 'yt3.ggpht.com', 'd.wattpad.com', 'preview.redd.it', 'th.bing.com', 'wallpapercave.com']
  }
}


module.exports = nextConfig
