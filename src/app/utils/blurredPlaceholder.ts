import { getPlaiceholder } from "plaiceholder";

export default async function getBase64Image(imgSrc: string) {
    try {
        // Fetch a tiny Cloudinary variant to keep the response well under the 2MB cache limit.
        const tinySrc = imgSrc.includes('/upload/')
            ? imgSrc.replace('/upload/', '/upload/f_auto,q_auto,w_20/')
            : imgSrc;

        const res = await fetch(tinySrc);
        if (!res.ok) {
            throw new Error(`Failed to fetch ${tinySrc}`);
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
