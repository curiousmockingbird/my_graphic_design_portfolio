// 'use client'
import type { ImageProps } from './../utils/types'
// import { useQuery } from '@tanstack/react-query'
// import axios from 'axios'
import Image from 'next/image'
import Header from '../components/Header'
// import Alert from '@mui/material/Alert';
// import getBase64Image from '@/app/utils/blurredPlaceholder'
// import { getIllustrations } from '../utils/getCloudinaryResources';
// import cloudinary from ''
import {v2 as cloudinary} from 'cloudinary' 
import Link from 'next/link'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
})

export const revalidate = 5;

async function getBallet() {

const image = await cloudinary.search.expression(`folder=${process.env.BALLET_FOLDER}/*`).sort_by('public_id', 'asc').execute();
 
return image;  
}


export default async function IllustrationsList(){
  
  const image = await getBallet();

  return ( 
    <main className='main-illustrations'>
      <Header headerText='Ballet Nacional de Cuba' />
      <div>
      <div className='flex justify-center pb-3'>
        <h2>Branding & Advertisement</h2>
      </div>
      <div className='columns-1 md:columns-2 lg:columns-2 gap-4 space-y-4 z-0'>
        {image.resources.map((resource: ImageProps) => {
          // const publicIdParts = resource.public_id.split('/');
          // const filename = publicIdParts[publicIdParts.length - 1];
          return (
            <div key={resource.secure_url}
              className='cursor-zoom-in bg-orange rounded-3xl hover:rounded-none transition-all duration-700'>
              <Link href={resource.secure_url}>
              <Image
                className='grayscale custom-div-illustrations hover:grayscale-0'
                width={resource.width}
                height={resource.height}
                src={resource.secure_url}
                sizes='(max-width: 768px) 35vw, (max-width: 1024px) 50vw, 100vw'
                alt="Description of my image"
              />
              {/* <p>{filename}</p> */}
              </Link>
            </div>
          )
        })}
      </div>
      </div>
    </main>
  )
}