import type { ImageProps } from '../utils/types'
import Image from 'next/image'
import Header from '../components/Header'
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export default async function WeThePeople(){
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const res = await fetch(`my-graphic-design-portfolio-ur9ggvrat-curiousmockingbird.vercel.app
  /api/wethepeople/fetch`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  } 
  const data =  await res.json()

  // const data = await getIllustrations();

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
        {/* <Link
          href="/"
          className='group back-arrow text-white hover:text-tahiti my-4'>
          <ArrowBackIcon className='group-hover:-translate-x-2 transition-all duration-700' />
        </Link> */}
      </header>
      <div className='z-0'>
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
