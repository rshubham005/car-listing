/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "imgd.aeplcdn.com" },
      { protocol: "https", hostname: "cdn.pixabay.com" },
      { protocol: "https", hostname: "www.ford.com" },
      { protocol: "https", hostname: "www.mbusa.com" },
      { protocol: "https", hostname: "media.istockphoto.com" },
      { protocol: "https", hostname: "www.audiusa.com" },
      { protocol: "https", hostname: "www.hyundaiusa.com" },
      { protocol: "https", hostname: "files.porsche.com" },
      { protocol: "https", hostname: "www.vw.com" },
      { protocol: "https", hostname: "www.lexus.com" },
      { protocol: "https", hostname: "www.kia.com" },
      { protocol: "https", hostname: "s7d1.scene7.com" },
      { protocol: "https", hostname: "www.mazdausa.com" },
    ],
  },
};

module.exports = nextConfig;
