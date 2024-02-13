'use client'
import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Image from 'next/image';
import type { ImageProps } from './../../utils/types'
// import { number, string } from 'zod';
import Button from '@mui/material/Button';
import './styles.css'
const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 1,
};

// Define the props for the Thumbnail component
interface ThumbnailProps {
    image: ImageProps;
    onClick: () => void;
}


// Thumbnail component
const Thumbnail: React.FC<ThumbnailProps> = ({ image, onClick }) => {
    return (
        <button onClick={onClick} className="thumbnail">
            <Image src={image.secure_url} alt={image.secure_url} width={50} height={50} layout="fixed" />
        </button>
    );
};


function ImageGallery({ images }: { images: any }) {

    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(Object);
    const [currentIndex, setCurrentIndex] = useState(0);

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

    const handleThumbnailClick = (image: any, index: any) => {
        setSelectedImage(image);
        setCurrentIndex(index);
        if (!open) setOpen(true);
    };

    return (
        <>
            <div className='flex justify-center pb-3'>
                <h2>Illustrations & Posters</h2>
            </div>
            <div className='columns-1 md:columns-2 lg:columns-4 gap-4 space-y-4 z-0'>
                {images.map((resource: ImageProps, i: number) => {
                    const publicIdParts = resource.public_id.split('/');
                    const filename = publicIdParts[publicIdParts.length - 1];
                    return (
                        <div key={resource.secure_url}
                            className='cursor bg-orange rounded-3xl hover:rounded-none transition-all duration-700'>
                            {/* <Link href={resource.secure_url}> */}
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
                                {/* </Link> */}
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
                        <div className='grid grid-cols-8 gap-4 mt-2'>
                            <div className='col-span-4'>
                                <Button onClick={handlePrevious}>Previous</Button>
                            </div>
                            <div className='col-span-4 text-right'>
                                <Button onClick={handleNext}>Next</Button>
                            </div>
                        </div>
                    </Box>
                    <Box>
                        <div className="thumbnail-container">
                            {images.map((image: any, index: any) => (
                                <Thumbnail key={index} image={image} onClick={() => handleThumbnailClick(image, index)} />
                            ))}
                        </div>
                    </Box>
                    </Box>
                </Modal>

            </div>
        </>
    );
}

export default ImageGallery