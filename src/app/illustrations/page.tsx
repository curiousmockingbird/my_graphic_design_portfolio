import Header from '../components/Header'
import type { ImageProps } from './../utils/types'
import getBase64Image from '@/app/utils/blurredPlaceholder'
import {v2 as cloudinary} from 'cloudinary' 
import ImageGallery from './components/ImageGallery'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
})

export const revalidate = 3600;

async function getIllustrations() {

const image = await cloudinary.search.expression(`folder=${process.env.ILLUSTRATIONS_FOLDER}/*`).sort_by('public_id', 'asc').execute();
const blurImagePromises = await Promise.all(image.resources.map((image: ImageProps) => getBase64Image(image.secure_url)));

  // Wait for both the Cloudinary search and the blurred image generation to finish
  const [results, imagesWithBlurDataUrls] = await Promise.all([image, blurImagePromises]);

  // Assemble reducedResults using the results from the Cloudinary search and the blurred images
  const reducedResults: ImageProps[] = results.resources.map((result:ImageProps, i:any) => ({
    id: i,
    height: result.height,
    width: result.width,
    secure_url: result.secure_url,
    public_id: result.public_id,
    format: result.format,
    blurDataUrl: imagesWithBlurDataUrls[i]
  }));
return reducedResults;  
}

export default async function IllustrationsList(){
  
  const image = await getIllustrations();
  
  return ( 
    <main className='main-illustrations'>
      <Header headerText='Personal Work' />
      <ImageGallery images={image}/>
    </main>
  )
}