import { z } from "zod";
import { NextResponse } from "next/server";
import type { ImageProps } from './../../../utils/types'
import {v2 as cloudinary} from 'cloudinary' 

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
})

export async function GET() {
    try {
  const image = await cloudinary.search.expression(`folder=${process.env.HAVANA_FOLDER}/*`).execute();
       
//   const blurImagePromises = Promise.all(image.resources.map((image: ImageProps) => getBase64Image(image.secure_url)));

//   // Wait for both the Cloudinary search and the blurred image generation to finish
//   const [results, imagesWithBlurDataUrls] = await Promise.all([image, blurImagePromises]);

// //   Assemble reducedResults using the results from the Cloudinary search and the blurred images
//   const reducedResults: ImageProps[] = results.resources.map((result:ImageProps, i:any) => ({
//     id: i,
//     height: result.height,
//     width: result.width,
//     secure_url: result.secure_url,
//     public_id: result.public_id,
//     format: result.format,
//     blurDataUrl: imagesWithBlurDataUrls[i]
//   }));

        return NextResponse.json({ image });
    } catch (error: any) {
        if (error instanceof z.ZodError) return new Response(error.issues[0].message, { status: 422 });
        return new Response(error.message, { status: 500 });
    }
}