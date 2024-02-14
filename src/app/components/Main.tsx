'use client'
import Link from 'next/link'
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ScrollSnapDots from './ScrollSnapDots';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
export default function Main() {

    const [imgWidth, setImgWidth] = useState(80); // Default width

  useEffect(() => {
    // Add an event listener to track window resize
    const handleResize = () => {
      // Calculate the width based on screen size or any other condition
      const newWidth = window.innerWidth < 1068 ? 80 : 150; // Example condition
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
        <main className='flex-1 main'>
          <div className='h-3/4 grid grid-cols-1 lg:grid-cols-2'>
            {/* <Navbar /> */}
            <div className='group custom-div'>
              <Link
                href="/voces"
                className='sections'>
                {/* <h2 className={`nav-items`}>
                  <p className='cursor-pointer'>Voces de la Frontera{' '}</p>
                </h2> */}
                <div className='hover:text-tahiti'>
                <Image src="/voces_white_logo.svg" alt="Your SVG" width={imgWidth} height={200} />
                </div>
                <div className="flex items-center justify-center">
                  <span><ArrowForwardIcon className='group-hover:translate-x-2 transition-all duration-700' /></span>
                </div>
              </Link>
            </div>
            <div className='group custom-div'>
              <Link
                href="/illustrations"
                className='sections'>
                {/* <h2 className={`nav-items`}>
                  Personal Work{' '}
                </h2> */}
                <div className='hover:text-tahiti'>
                <Image src="/pencil.svg" alt="Your SVG" width={imgWidth} height={200}/>
                </div>
                <div className="flex items-center justify-center">
                  <span><ArrowForwardIcon className='group-hover:translate-x-2 transition-all duration-700' /></span>
                </div>
              </Link>
            </div>
          </div>
          {/* Snapping container starts here */}
          <div className='lg:h-1/4'>
            <div className='flex justify-center'>
            <hr className='`w-full text-tahiti'/>
            </div>
          <div className='h-full'>
          <ScrollSnapDots>
            <div className="snap-center shrink-0 w-1/4 h-full flex justify-center items-center">
              <div className="flex items-center justify-center">
                  <span><ArrowForwardIcon className='group-hover:translate-x-2 transition-all duration-700' /></span>
              </div>
              <div className="flex items-center justify-center">
                  <span><ArrowForwardIcon className='group-hover:translate-x-2 transition-all duration-700' /></span>
              </div>
            </div>
            <div className="snap-center shrink-0 w-1/2 h-full flex justify-center items-center group custom-div">
              <Link
                href="/ballet"
                className='sections'>
                <h2 className={`nav-items`}>
                  BNC{' '}
                </h2>
                <div className="flex items-center justify-center">
                  <span><ArrowForwardIcon className='group-hover:translate-x-2 transition-all duration-700' /></span>
                </div>
              </Link>
            </div>
            <div className="snap-center shrink-0 w-1/2 h-full flex justify-center items-center group custom-div">
              <Link
                href="/havana"
                className='sections'>
                <h2 className={`nav-items`}>
                  Life in Havana{' '}
                </h2>
                <div className="flex items-center justify-center">
                  <span><ArrowForwardIcon className='group-hover:translate-x-2 transition-all duration-700' /></span>
                </div>
              </Link>
            </div>
            <div className="snap-center shrink-0 w-1/2 h-full flex justify-center items-center group custom-div">
              <Link
                href="/wethepeople"
                className='sections'>
                <h2 className={`nav-items`}>
                  #WeThePeople{' '}
                </h2>
                <div className="flex items-center justify-center">
                  <span><ArrowForwardIcon className='group-hover:translate-x-2 transition-all duration-700' /></span>
                </div>
              </Link>
            </div>
            
          </ScrollSnapDots>
            </div>
          </div>
        </main>
    );
  }