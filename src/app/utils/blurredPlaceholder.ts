import { getPlaiceholder } from "plaiceholder";

export default async function getBase64Image(imgSrc: string) {
    try {
        const res = await fetch(imgSrc);
        if (!res.ok) {
            throw new Error(`Failed to fetch ${imgSrc}`);
        }
        const buffer = await res.arrayBuffer();
        const { base64 } = await getPlaiceholder(Buffer.from(buffer));
        // console.log(`base64: ${base64}`);
        return base64;
    } catch (e) {
        if (e instanceof Error) console.log(e.stack);
        return null; // return null or any default value for failed conversions
    }
}

// export default async function addBlurredDataUrls(imgSrcs: string[]): Promise<(string | null)[]> {
//     // Map image sources to promises
//     const promises = imgSrcs.map(src => getBase64Image(src));
//     // Use Promise.all to wait for all promises to resolve
//     const results = await Promise.all(promises);
//     return results;
// }

// export default async function addBlurredDataUrls(images:ImageProps): Promise<Photo[]> {
//     const base64Promises = images.secure_url.map(photo => getBase64Image(photo.src.large))
// }

// import imagemin from 'imagemin'
// import imageminJpegtran from 'imagemin-jpegtran'
// import type { ImageProps } from './types'

// const cache = new Map<ImageProps, string>()

// export default async function getBase64ImageUrl(
//   image: ImageProps
// ): Promise<string> {
//   let url = cache.get(image)
//   if (url) {
//     return url
//   }
//   const response = await fetch(
//     `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/f_jpg,w_8,q_70/${image.public_id}.${image.format}`
//   )
//   const buffer = await response.arrayBuffer()
//   const minified = await imagemin.buffer(Buffer.from(buffer), {
//     plugins: [imageminJpegtran()],
//   })

//   url = `data:image/jpeg;base64,${Buffer.from(minified).toString('base64')}`
//   cache.set(image, url);
//   console.log(url);
//   return url
// }