'use client'
import React, { useEffect, useRef, useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Image from 'next/image';
import type { ImageProps } from './../utils/types'
// import { number, string } from 'zod';
import Button from '@mui/material/Button';
// import './styles.css'
// useEffect imported above

let modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 350,
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 1,
  };

  
  const adjustModalWidth = () => {     
      const screenWidth = window.innerWidth;
    if (screenWidth <= 375) { // Example breakpoint for small devices
      modalStyle.width = 350; // Adjust width for small devices
    } else {
      modalStyle.width = 510; // Default width for larger devices
    }
  };
  

function ImageGallery({
    headerText,
    images,
    columnsLg,
    //TODO: add columsLg in page components/routes
}: React.PropsWithChildren<{ headerText: string, images: any, columnsLg:string }>) {
    useEffect(() => {
        // Code here runs only in the browser, safely use window
        adjustModalWidth();
      }, []); // Empty dependency array means this runs once on mount

    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(Object);
    const [currentIndex, setCurrentIndex] = useState(0);
    const gridRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<HTMLDivElement[]>([]);

    const handleOpen = (resource: any, i: any) => {
        setSelectedImage(resource);
        setCurrentIndex(i);
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    // console.log('Number', (i + 1), selectedImage)

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % images.length; // Wrap around to the first image
        setCurrentIndex(nextIndex);
        setSelectedImage(images[nextIndex]);
    };

    const handlePrevious = () => {
        const prevIndex = (currentIndex - 1 + images.length) % images.length; // Wrap around to the last image
        setCurrentIndex(prevIndex);
        setSelectedImage(images[prevIndex]);
    };

    // const handleThumbnailClick = (image: any, index: any) => {
    //     setSelectedImage(image);
    //     setCurrentIndex(index);
    //     if (!open) setOpen(true);
    // };

    useEffect(() => {
        const grid = gridRef.current;
        if (!grid) return;

        const rowHeight = 8; // px
        const rowGap = 16; // px (matches gap-4)

        const resizeItem = (item: HTMLDivElement) => {
            const img = item.querySelector('img');
            if (!img) return;
            const contentHeight = img.getBoundingClientRect().height;
            const rowSpan = Math.ceil((contentHeight + rowGap) / (rowHeight + rowGap));
            item.style.gridRowEnd = `span ${rowSpan}`;
        };

        const resizeAll = () => {
            itemRefs.current.forEach((item) => item && resizeItem(item));
        };

        const ro = new ResizeObserver(resizeAll);
        ro.observe(grid);

        // Initial sizing once images have a layout box
        requestAnimationFrame(resizeAll);

        return () => {
            ro.disconnect();
        };
    }, [images]);

    return (
        <>
            <div className='flex justify-center pb-3'>
                <h2>{headerText}</h2>
            </div>
            <div
                ref={gridRef}
                className={`grid grid-cols-1 md:grid-cols-2 ${columnsLg} gap-4 z-0`}
                style={{ gridAutoRows: '8px' }}
            >
                {images.map((resource: ImageProps, i: number) => {
                    const publicIdParts = resource.public_id.split('/');
                    const filename = publicIdParts[publicIdParts.length - 1];
                    return (
                        <div
                            key={resource.secure_url}
                            ref={(el) => {
                                if (el) itemRefs.current[i] = el;
                            }}
                            className='cursor bg-orange rounded-3xl hover:rounded-none transition-all duration-700 flex justify-center'>
                            <button key={resource.secure_url}
                                onClick={() => handleOpen(resource, i)}
                            >
                                <Image
                                    className='grayscale custom-div-illustrations hover:grayscale-0'
                                    width={resource.width}
                                    height={resource.height}
                                    src={resource.secure_url}
                                    sizes='(max-width: 768px) 35vw, (max-width: 1024px) 50vw, 100vw'
                                    alt={filename}
                                    placeholder='blur'
                                    blurDataURL={resource.blurDataUrl}
                                />
                                {/* <p>{filename}</p> */}
                            </button>
                        </div>
                    )
                })}

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >   
                    <Box sx={modalStyle}>
                    <Box >
                        <div className='grid grid-cols-10'>
                            <div className='col-end-11 col-span-2 text-right'>
                                <Button onClick={handleClose}>Close</Button>
                            </div>
                        </div>
                        {selectedImage && (
                            <Image
                                src={selectedImage.secure_url}
                                alt={selectedImage.alt}
                                width={selectedImage.width}
                                height={selectedImage.height}
                                placeholder='blur'
                                blurDataURL={selectedImage.blurDataUrl}
                            />
                        )}
                        <div className='grid grid-cols-12 gap-4 mt-2'>
                            <div className='col-span-4'>
                                <Button variant="outlined" size="small" onClick={handlePrevious}>Previous</Button>
                            </div>
                            <div className='col-span-4 text-center'>
                            <Button disabled >{`${currentIndex + 1} of ${images.length}`} </Button>
                            </div>
                            <div className='col-span-4 text-right'>
                                <Button variant="outlined" size="small" onClick={handleNext}>Next</Button>
                            </div>
                        </div>
                    
                    </Box>
                    </Box>
                </Modal>
                
            </div>
        </>
    );
}

export default ImageGallery
