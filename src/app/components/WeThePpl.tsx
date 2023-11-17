'use client'
import Image from "next/image"
import Header from "./Header"
import { useWindowWidth} from '@react-hook/window-size'
import type { ImageProps } from '../utils/types'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const WeThePpl = (image:any) => {
    const onlyWidth = useWindowWidth()
    // console.log(image.image.resources);
    return(
        <>
        {onlyWidth > 768 ? <main className='relative main-illustrations'>
      <Header headerText='#WeThePeople' />
      <div>
      <div className='flex justify-center pb-3'>
        <h2>Equity-Centered Community Design Project</h2>
      </div>
      <header className='absolute top-1/2 left-1/2 z-10'>
        <div className='group'>
        <a href="https://drive.google.com/file/d/1iprkzyHoIUtwY0B9vTkNXA4Apo2Fqxen/view" target="_blank" rel="noopener noreferrer"
          className='back-arrow bg-tahiti hover:bg-orange my-4'>
          Read
          <ArrowForwardIcon className='group-hover:translate-x-2 transition-all duration-700' />
        </a>
        </div>
      </header>
      </div>
      <div className='z-0'>
        {image.image.resources.map((resource: ImageProps) => {
          return (
            <div key={resource.secure_url}
              className='bg-orange rounded-3xl hover:rounded-none transition-all duration-700'>
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
    </main> :

    <div className='main-illustrations'>
      <Header headerText='#WeThePeople' />
      <div className="flex justify-center">
      <div className='pb-3'>
        <h2>Equity-Centered Community Design Project</h2>
      </div>
      <div className='w-1/2'>
        <div className='group'>
        <a href="https://drive.google.com/file/d/1iprkzyHoIUtwY0B9vTkNXA4Apo2Fqxen/view" target="_blank" rel="noopener noreferrer"
          className='back-arrow bg-tahiti hover:bg-orange my-4'>
          Read
          <ArrowForwardIcon className='group-hover:translate-x-2 transition-all duration-700' />
        </a>
        </div>
      </div>
      </div>
      <div className=''>
        {image.image.resources.map((resource: ImageProps) => {
          return (
            <div key={resource.secure_url}
              className='bg-orange rounded-3xl hover:rounded-none transition-all duration-700'>
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
    </div>}
    </>
    )

}

export default WeThePpl;