/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    'domains': [ 'www.apple.com', 'store.storeimages.cdn-apple.com', "firebasestorage.googleapis.com" ]
  },
  reactStrictMode: false,
}

module.exports = nextConfig
