// import { getPlaiceholder } from "plaiceholder";

// export default async function getBase64Image(imgSrc: string) {
//     try {
//         const res = await fetch(imgSrc);
//         if (!res.ok) {
//             throw new Error(`Failed to fetch ${imgSrc}`);
//         }
//         const buffer = await res.arrayBuffer();
//         const { base64 } = await getPlaiceholder(Buffer.from(buffer));
//         // console.log(`base64: ${base64}`);
//         return base64;
//     } catch (e) {
//         if (e instanceof Error) console.log(e.stack);
//         return null; // return null or any default value for failed conversions
//     }
// }