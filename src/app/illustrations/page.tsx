
import Link from 'next/link'
import type { ImageProps } from './../utils/types'
import Image from 'next/image';
import cloudinary from '@/app/utils/cloudinary'
import getBase64Image from '@/app/utils/blurredPlaceholder'

async function getCloudinaryImages() {
  // const results  = await cloudinary.search.expression(`folder=${process.env.CLOUDINARY_FOLDER}/*`).execute();
  // let reducedResults: ImageProps[] = []

  // let i = 0
  // for (let result of results.resources) {
  //   reducedResults.push({
  //     id: i,
  //     height: result.height,
  //     width: result.width,
  //     secure_url: result.secure_url,
  //     public_id: result.public_id,
  //     format: result.format,
  //   })
  //   i++
  // }

  // const blurImagePromises = results.resources.map((image: ImageProps) => {
  //   return getBase64Image(image.secure_url)
  // })

  // const imagesWithBlurDataUrls = await Promise.all(blurImagePromises)

  // for (let i = 0; i < reducedResults.length; i++) {
  //   reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i]
  // }

  // return reducedResults
  // Start the Cloudinary search but don't await its result immediately
  const results = await cloudinary.search.expression(`folder=${process.env.CLOUDINARY_FOLDER}/*`).execute();

  // Once the Cloudinary search finishes, start generating the blurred images
  // const results = await cloudinarySearchPromise;
  
  // Start generating the blurred images without waiting for them to finish
  const blurImagePromises = results.resources.map((image: ImageProps) => 
    getBase64Image(image.secure_url)
  );

  const reducedResults: ImageProps[] = results.resources.map((result: ImageProps, i: any) => ({
    id: i,
    height: result.height,
    width: result.width,
    secure_url: result.secure_url,
    public_id: result.public_id,
    format: result.format,
    blurDataUrl: undefined
  }));

  // Await all the blurred images to be generated
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

  // Assign the blurred images to the reducedResults
  for (let i = 0; i < reducedResults.length; i++) {
    reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i];
  }

  return reducedResults;
}

export default async function Page() {
  const resources = await getCloudinaryImages()
  // const blurredUrl = resources.map((resource:any) => getBase64Image(resource.url))
  // const blurredUrl = getBase64Image(resources[0].url);
  // console.log ('hola', resources);
  return (
    <main className='main-illustrations'>
      <Link href={'/'}>Home</Link>
      <div className='columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4'>
        {resources.map((resource: ImageProps) => {
          const publicIdParts = resource.public_id.split('/');
          const filename = publicIdParts[publicIdParts.length - 1];
          return (
            <div key={resource.secure_url} 
            className='bg-orange rounded-3xl hover:rounded-none transition-all duration-700'>
              <Link href="/dashboard">
                 {/* <p>{resource.secure_url}</p>  */}
                <Image
                  className='custom-div-illustrations'
                  width={resource.width}
                  height={resource.height}
                  src={resource.secure_url}
                  sizes='(max-width: 768px) 35vw, (max-width: 1024px) 50vw, 100vw'
                  alt="Description of my image"
                  blurDataURL={resource.blurDataUrl}
                  placeholder="blur"
                   />
              </Link>
              <p>{filename}</p>
            </div>
          )
        })}
      </div>
    </main>
  )
}