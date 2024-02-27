import type { ImageProps } from './../utils/types'
import Header from '../components/Header'
import {v2 as cloudinary} from 'cloudinary' 
import getBase64Image from '@/app/utils/blurredPlaceholder'
import ImageGallery from './../components/ImageGallery'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
})


async function getHavana() {
    const image = await cloudinary.search.expression(`folder=${process.env.HAVANA_FOLDER}/*`).execute();
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

export default async function Havana(){

  const image = await getHavana();
  

  return (
    <main className='main-illustrations'>
      <Header headerText='Life in Havana' />
      <ImageGallery images={image} headerText='Branding' columnsLg='lg:columns-2'/>
    </main>
  )
}