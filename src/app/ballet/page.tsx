import type { ImageProps } from './../utils/types'
import Image from 'next/image'
import Header from '../components/Header'

export default async function Ballet(){
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const res = await fetch(`my-graphic-design-portfolio-ur9ggvrat-curiousmockingbird.vercel.app/api/ballet/fetch`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  } 
  const data =  await res.json()

  // const data = await getIllustrations();

  return (
    <main className='main-illustrations'>
      <Header headerText='Illustrations & Posters' />
      <div className='columns-1 md:columns-2 lg:columns-4 gap-4 space-y-4 z-0'>
        {data.image.resources.map((resource: ImageProps) => {
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
                // blurDataURL={resource.blurDataUrl}
                // placeholder="blur"
              />
              {/* <p>{filename}</p> */}
            </div>
          )
        })}
      </div>
    </main>
  )
}
