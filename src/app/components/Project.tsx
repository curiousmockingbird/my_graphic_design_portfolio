import Link from "next/link"
import Image from "next/image"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React, { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';

export default function Project({
    route,
    image,
    next,
    previous,
}: React.PropsWithChildren<{ route: string, image: string, next:any, previous:any }>) {
    const [imgWidth, setImgWidth] = useState(Number); // Default width

    useEffect(() => {
        // Add an event listener to track window resize
        const handleResize = () => {
            // Calculate the width based on screen size or any other condition
            const newWidth = window.innerWidth < 1068 ? 150 : 250; // Example condition
            setImgWidth(newWidth);
        };

        // Initial calculation
        handleResize();

        // Attach the event listener
        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='flex items-center justify-evenly'>
                <div className='flex items-center justify-center '>
                    <span><IconButton onClick={previous}><ArrowBackIcon className='bg-orange hover:-translate-x-2 scale-150 transition-all duration-700' /></IconButton> </span>
                </div>
            <Link
                href={route}
                className='sections'>
                <div>
                    <Image src={image} alt="Your SVG" width={imgWidth} height={200} />
                </div>
            </Link>
                <div className='flex items-center justify-center'>
                    <span><IconButton onClick={next}><ArrowForwardIcon className='bg-orange hover:translate-x-2 scale-150 transition-all duration-700' /></IconButton></span>
                </div>
        </div>
    )
}