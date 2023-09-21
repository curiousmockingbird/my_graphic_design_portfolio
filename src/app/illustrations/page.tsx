
import Link from 'next/link'
import type { ImageProps } from './../utils/types'
import Image from 'next/image';
import { getCloudinaryResources } from '@/app/utils/getCloudinaryResources'
import getBase64Image from '@/app/utils/blurredPlaceholder'

async function getCloudinaryImages() {
  // Start the Cloudinary search without waiting for its result
  // const cloudinarySearchPromise = getCloudinaryResources();

  // // After starting the Cloudinary search, we immediately proceed to then(), which starts generating the blurred images
  // const blurImagePromises = cloudinarySearchPromise.then(results => {
  //   return Promise.all(results.resources.map((image: ImageProps) => getBase64Image(image.secure_url)));
  // });

  const res = fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image?type=upload&prefix=${process.env.CLOUDINARY_FOLDER}/`, {
    headers: {
      Authorization: `Basic ${Buffer.from(process.env.CLOUDINARY_API_KEY + ':' + process.env.CLOUDINARY_API_SECRET).toString('base64')}`
    },
    next: {
      revalidate: 3600
    }
  }).then(r => r.json());

  const blurImagePromises = res.then((results: any) => {
      return Promise.all(results.resources.map((image: ImageProps) => getBase64Image(image.secure_url)));
    });


  // Wait for both the Cloudinary search and the blurred image generation to finish
  const [results, imagesWithBlurDataUrls] = await Promise.all([res, blurImagePromises]);

  // Assemble reducedResults using the results from the Cloudinary search and the blurred images
  const reducedResults: ImageProps[] = results.resources.map((result:ImageProps, i:any) => ({
    id: i,
    height: result.height,
    width: result.width,
    secure_url: result.secure_url,
    public_id: result.public_id,
    format: result.format,
    blurDataUrl: imagesWithBlurDataUrls[i]
  }));

  return reducedResults;
}

export default async function Page() {
  const resources = await getCloudinaryImages()

  return (
    <main className='main-illustrations'>
      <Link href={'/'}>Home</Link>
      <div className='columns-1 md:columns-2 lg:columns-5 gap-4 space-y-4'>
        {resources.map((resource: ImageProps) => {
          const publicIdParts = resource.public_id.split('/');
          const filename = publicIdParts[publicIdParts.length - 1];
          return (
            <div key={resource.secure_url} 
            className='bg-orange rounded-3xl hover:rounded-none transition-all duration-700'>
              <Link href="/dashboard">
                <Image
                  className='custom-div-illustrations'
                  width={resource.width}
                  height={resource.height}
                  src={resource.secure_url}
                  sizes='(max-width: 768px) 35vw, (max-width: 1024px) 50vw, 100vw'
                  alt="Description of my image"
                  // blurDataURL={resource.blurDataUrl}
                  // placeholder="blur"
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