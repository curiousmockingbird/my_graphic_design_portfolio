// import type { ImageProps } from '../utils/types'
// import Image from 'next/image'
// import Header from '../components/Header'
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {v2 as cloudinary} from 'cloudinary' 
import WeThePpl from '../components/WeThePpl';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
})

async function getWeThePeople() {
const image = await cloudinary.search.expression(`folder=${process.env.WETHEPEOPLE_FOLDER}/*`).execute();
return image;
}

export default async function WeThePeople(){
  const image = await getWeThePeople();
  return (
    <>
    <WeThePpl image={image}/>
  </>
  )
}