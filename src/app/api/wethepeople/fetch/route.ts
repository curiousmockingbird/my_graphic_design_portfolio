import { z } from "zod";
import { NextResponse } from "next/server";

import getBase64Image from '@/app/utils/blurredPlaceholder'
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
  const image = await cloudinary.search.expression(`folder=${process.env.WETHEPEOPLE_FOLDER}/*`).execute();
       
  

        return NextResponse.json({ image });
    } catch (error: any) {
        if (error instanceof z.ZodError) return new Response(error.issues[0].message, { status: 422 });
        return new Response(error.message, { status: 500 });
    }
}