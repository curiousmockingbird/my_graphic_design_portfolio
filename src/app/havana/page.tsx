import type { ImageProps } from './../utils/types'
import Image from 'next/image'
import Header from '../components/Header'
import {v2 as cloudinary} from 'cloudinary' 
// import MyModal from '@/app/components/Modal'
import Link from 'next/link'
import getBase64Image from '@/app/utils/blurredPlaceholder'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
})


async function getHavana() {
    const image = await cloudinary.search.expression(`folder=${process.env.HAVANA_FOLDER}/*`).execute();
    return image;
}

export default async function Havana(){

  const image = await getHavana();
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

  return (
    <main className='main-illustrations'>
      <Header headerText='Life in Havana' />
      <div>
      <div className='flex justify-center pb-3'>
        <h2>Photography</h2>
      </div>
      <div className='columns-1 lg:columns-2 gap-4 space-y-4 z-0'>
        {/* <MyModal></MyModal> */}
        {reducedResults.map((resource: ImageProps) => {
          return (
            <div key={resource.secure_url}
              className='bg-orange rounded-3xl hover:rounded-none transition-all duration-700'>
              <Link href={resource.secure_url}>
              <Image
                className='cursor-zoom-in grayscale custom-div-illustrations hover:grayscale-0'
                width={resource.width}
                height={resource.height}
                src={resource.secure_url}
                sizes='(max-width: 768px) 35vw, (max-width: 1024px) 50vw, 100vw'
                alt="Description of my image"
                placeholder='blur'
                blurDataURL={resource.blurDataUrl}
              />
              </Link>
            </div>
          )
        })}
      </div>
      </div>
    </main>
  )
}