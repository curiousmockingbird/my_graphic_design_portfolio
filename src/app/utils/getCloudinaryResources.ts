import {v2 as cloudinary} from 'cloudinary'
import { cache } from 'react'

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
})

export const revalidate = 3600

export const getCloudinaryResources = cache(() => {
  return cloudinary.search.expression(`folder=${process.env.CLOUDINARY_FOLDER}/*`).execute();
})


