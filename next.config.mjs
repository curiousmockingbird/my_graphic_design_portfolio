
/** @type {import('next').NextConfig} */
import withPlaiceholder from "@plaiceholder/next";
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com'],
      },
}

export default withPlaiceholder(nextConfig)
