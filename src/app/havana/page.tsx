'use client'
import type { ImageProps } from './../utils/types'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Image from 'next/image'
import Header from '../components/Header'
// import getBase64Image from '@/app/utils/blurredPlaceholder'


const Ballet = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['Ballet'],
    queryFn: async () => {
      const { data } = await axios.get('api/havana/fetch')
      return data.image.resources as ImageProps[];
    }
  })

  if (isLoading) return <div>Data is Loading</div>
  if (isError) return <div>Error</div>

  return (
    <main className='main-illustrations'>
      <Header headerText='Life in Havana' />
      <div className='columns-1 md:columns-2 lg:columns-4 gap-4 space-y-4 z-0'>
        {data.map((resource: ImageProps) => {
          // const publicIdParts = resource.public_id.split('/');
          // const filename = publicIdParts[publicIdParts.length - 1];
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
              //   blurDataURL={resource.blurDataUrl}
              //   placeholder="blur"
              />
              {/* <p>{filename}</p> */}
            </div>
          )
        })}
      </div>
    </main>
  )

}

export default Ballet
