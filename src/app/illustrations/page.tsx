
import Link from 'next/link'
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
    <main>
    {resources.map((resource: any) => {
      return (
      <CldImage
      key={resource.secure_url}
      width={resource.width}
      height={resource.height}
      src={resource.secure_url}
      sizes="70vw"
      alt="Description of my image"
    />)
    })}
    <h2>Hola</h2>
    </main>
    )
  }