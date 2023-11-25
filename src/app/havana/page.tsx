import type { ImageProps } from './../utils/types'
import Image from 'next/image'
import Header from '../components/Header'
import {v2 as cloudinary} from 'cloudinary' 
import MyModal from '@/app/components/Modal'
import Link from 'next/link'

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

  const data = await getHavana();

  return (
    <main className='main-illustrations'>
      <Header headerText='Life in Havana' />
      <div>
      <div className='flex justify-center pb-3'>
        <h2>Photography & other stuff</h2>
      </div>
      <div className='columns-1 lg:columns-2 gap-4 space-y-4 z-0'>
        {/* <MyModal></MyModal> */}
        {data.resources.map((resource: ImageProps) => {
          return (
            <div key={resource.secure_url}
              className='bg-orange rounded-3xl hover:rounded-none transition-all duration-700'>
              <Link href={`havana/imageId/${resource.public_id}`}>
              <Image
                className='cursor-zoom-in grayscale custom-div-illustrations hover:grayscale-0'
                width={resource.width}
                height={resource.height}
                src={resource.secure_url}
                sizes='(max-width: 768px) 35vw, (max-width: 1024px) 50vw, 100vw'
                alt="Description of my image"
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