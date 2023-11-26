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

export const revalidate = 3600;

async function getBranding() {

const image = await cloudinary.search.expression(`folder=${process.env.VOCES_BRANDING}/*`).sort_by('public_id', 'asc').execute();
 
return image;  
}
async function getTshirts() {

const image = await cloudinary.search.expression(`folder=${process.env.VOCES_TSHIRTS}/*`).sort_by('public_id', 'asc').execute();
 
return image;  
}
async function getFlyers() {

const image = await cloudinary.search.expression(`folder=${process.env.VOCES_FLYERS}/*`).sort_by('public_id', 'asc').execute();
 
return image;  
}

export default async function IllustrationsList(){
  
  const branding = await getBranding();
  const tshirts = await getTshirts();
  const flyers = await getFlyers();

  return ( 
    <main className='main-illustrations'>
      <Header headerText='Voces de la Frontera' />
      <div>
      <div className='flex justify-center pb-3'>
        <h2>Branding & Campaigns</h2>
      </div>
      <div className='columns-1 md:columns-2 lg:columns-2 gap-4 space-y-4 z-0'>
        
        {tshirts.resources.map((resource: ImageProps) => {
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
        {flyers.resources.map((resource: ImageProps) => {
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
        {branding.resources.map((resource: ImageProps) => {
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