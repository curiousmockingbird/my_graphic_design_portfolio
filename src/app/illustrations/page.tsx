
// import Link from 'next/link'
import type { ImageProps } from './../utils/types'
import CldImage from '@/app/components/CldImage';
import {v2 as cloudinary} from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
})

export default async function Page() {
  const { resources }  = await cloudinary.search.expression('folder=samples/graphic_design_work').execute();

  return (
    <main className='main-illustrations'>
      <div className='columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8'>
    {resources.map((resource: ImageProps) => {
      return (
      <CldImage
      className='custom-div'
      key={resource.secure_url}
      width={resource.width}
      height={resource.height}
      src={resource.secure_url}
      sizes='(max-width: 768px) 35vw, (max-width: 1024px) 50vw, 25vw'
      alt="Description of my image"
    />)
    })}
    <h2>Hola</h2>
      </div>
    </main>
    )
  }