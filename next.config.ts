/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "i.pinimg.com",
      "remosnextjs.vercel.app",
      "printo-s3.dietpixels.net",
    ],
  },
};

export default nextConfig;
