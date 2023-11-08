import {v2 as cloudinary} from 'cloudinary'
import {cache} from 'react'

export const revalidate = 1800; 

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
})

// export const revalidate = 3600  // revalidate the data at most every hour

// export const getCloudinaryResources = cache(async () => {
//   console.log("Function executed!");
//   const cloudinarySearchPromise = await cloudinary.search.expression(`folder=${process.env.CLOUDINARY_FOLDER}/*`).execute();
//   return cloudinarySearchPromise;
// })

export const getIllustrations = cache(async () => {
  // console.log("Function executed!");
  const cloudinarySearchPromise = await cloudinary.search.expression(`folder=${process.env.ILLUSTRATIONS_FOLDER}/*`).execute();
  return cloudinarySearchPromise;
})

export const getBallet = cache(async () => {
  // console.log("Function executed!");
  const cloudinarySearchPromise = await cloudinary.search.expression(`folder=${process.env.BALLET_FOLDER}/*`).execute();
  return cloudinarySearchPromise;
})

export const getHavana = cache(async () => {
  const cloudinarySearchPromise = await cloudinary.search.expression(`folder=${process.env.HAVANA_FOLDER}/*`).execute();
  return cloudinarySearchPromise;
})

export const getWethepeople = cache(async () => {
  // console.log("Function executed!");
  const cloudinarySearchPromise = await cloudinary.search.expression(`folder=${process.env.WETHEPEOPLE_FOLDER}/*`).execute();
  return cloudinarySearchPromise;
})
