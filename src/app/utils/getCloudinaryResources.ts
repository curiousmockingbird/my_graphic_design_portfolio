import {v2 as cloudinary} from 'cloudinary'
// import {cache} from 'react'

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
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

export async function getIllustrations() {
  // console.log("Function executed!");
  const cloudinarySearchPromise = await cloudinary.search.expression(`folder=${process.env.ILLUSTRATIONS_FOLDER}/*`).execute();
  return cloudinarySearchPromise;
}
export async function getBallet() {
  // console.log("Function executed!");
  const cloudinarySearchPromise = await cloudinary.search.expression(`folder=${process.env.BALLET_FOLDER}/*`).execute();
  return cloudinarySearchPromise;
}
export async function getHavana() {
  // console.log("Function executed!");
  const cloudinarySearchPromise = await cloudinary.search.expression(`folder=${process.env.HAVANA_FOLDER}/*`).execute();
  return cloudinarySearchPromise;
}
export async function getWethepeople() {
  // console.log("Function executed!");
  const cloudinarySearchPromise = await cloudinary.search.expression(`folder=${process.env.WETHEPEOPLE_FOLDER}/*`).execute();
  return cloudinarySearchPromise;
}
