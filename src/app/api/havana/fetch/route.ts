import { z } from "zod";
import { NextResponse } from "next/server";
import { getHavana } from "@/app/utils/getCloudinaryResources";
// import getBase64Image from '@/app/utils/blurredPlaceholder'
// import type { ImageProps } from './../../../utils/types'

export async function GET() {
    try {
        const image = await getHavana()
        return NextResponse.json({ image });
    } catch (error: any) {
        if (error instanceof z.ZodError) return new Response(error.issues[0].message, { status: 422 });
        return new Response(error.message, { status: 500 });
    }
}