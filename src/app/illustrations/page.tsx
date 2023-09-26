'use client'
import type { ImageProps } from './../utils/types'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import getBase64Image from '@/app/utils/blurredPlaceholder'


const IllustrationsList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['CloudinaryImages'],
    queryFn: async () => {
      const { data } = await axios.get('api/illustrations/fetch')
      return data.image.resources as ImageProps[];
    }
  })

  if (isLoading) return <div>Data is Loading</div>
  if (isError) return <div>Error</div>

  return (
    <main className='main-illustrations'>
      <div className='columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4'>
        <Link
          href="/"
          className='sections'>
          <h2 className="nav-items">
            Illustrations & Posters{' '}
          </h2>
        </Link>
        {data.map((resource: ImageProps) => {
          // const publicIdParts = resource.public_id.split('/');
          // const filename = publicIdParts[publicIdParts.length - 1];
          return (
            <div key={resource.secure_url}
              className='bg-orange rounded-3xl hover:rounded-none transition-all duration-700'>
              <Image
                className='custom-div-illustrations'
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

export default IllustrationsList

// import Link from 'next/link'
// import type { ImageProps } from './../utils/types'
// import Image from 'next/image';
// import getCloudinaryResources from '@/app/utils/getCloudinaryResources'
// import getBase64Image from '@/app/utils/blurredPlaceholder'

// async function getCloudinaryImages() {
//   // Start the Cloudinary search without waiting for its result
//   const cloudinarySearchPromise = getCloudinaryResources();

//   // // After starting the Cloudinary search, we immediately proceed to then(), which starts generating the blurred images
//   // const blurImagePromises = cloudinarySearchPromise.then(results => {
//   //   return Promise.all(results.resources.map((image: ImageProps) => getBase64Image(image.secure_url)));
//   // });

//   const blurImagePromises = cloudinarySearchPromise.then((results: any) => {
//       return Promise.all(results.resources.map((image: ImageProps) => getBase64Image(image.secure_url)));
//     });


//   // Wait for both the Cloudinary search and the blurred image generation to finish
//   const [results, imagesWithBlurDataUrls] = await Promise.all([cloudinarySearchPromise, blurImagePromises]);

//   // Assemble reducedResults using the results from the Cloudinary search and the blurred images
//   const reducedResults: ImageProps[] = results.resources.map((result:ImageProps, i:any) => ({
//     id: i,
//     height: result.height,
//     width: result.width,
//     secure_url: result.secure_url,
//     public_id: result.public_id,
//     format: result.format,
//     blurDataUrl: imagesWithBlurDataUrls[i]
//   }));

//   return reducedResults;
// }
