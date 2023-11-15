import type { ImageProps } from '../utils/types'
import Image from 'next/image'
import Header from '../components/Header'
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {v2 as cloudinary} from 'cloudinary' 


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
    <main className='relative main-illustrations'>
      <Header headerText='#WeThePeople' />
      <header className='absolute top-1/2 left-1/2 z-10'>
        <div className='group'>
        <a href="https://drive.google.com/file/d/1iprkzyHoIUtwY0B9vTkNXA4Apo2Fqxen/view" target="_blank" rel="noopener noreferrer"
          className='back-arrow text-white hover:text-tahiti my-4'>
          <ArrowForwardIcon className='group-hover:translate-x-2 transition-all duration-700' />
        </a>
        </div>
      </header>
      <div className='z-0'>
        {image.resources.map((resource: ImageProps) => {
          return (
            <div key={resource.secure_url}
              className='cursor-zoom-in bg-orange rounded-3xl hover:rounded-none transition-all duration-700'>
              <Image
                className='grayscale custom-div-illustrations hover:grayscale-0'
                width={resource.width}
                height={resource.height}
                src={resource.secure_url}
                sizes='(max-width: 768px) 35vw, (max-width: 1024px) 50vw, 100vw'
                alt="Description of my image"
              />
            </div>
          )
        })}
      </div>
    </main>
  )
}