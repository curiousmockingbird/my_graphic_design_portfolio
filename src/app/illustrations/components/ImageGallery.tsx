'use client'
import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Image from 'next/image';
import type { ImageProps } from './../../utils/types'

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

function ImageGallery({ images }: { images: any }) {

    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(Object);

    const handleOpen = (resource: any) => {
        setSelectedImage(resource);
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    console.log('Hola', selectedImage.height)
    return (
        //   <div className='flex justify-center pb-3'>
        //     <h2>Illustrations & Posters</h2>
        //   </div>
        <div className='columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 z-0'>
            {images.map((resource: ImageProps) => {
                const publicIdParts = resource.public_id.split('/');
                const filename = publicIdParts[publicIdParts.length - 1];
                return(
                    <div key={resource.secure_url}
                        className='cursor bg-orange rounded-3xl hover:rounded-none transition-all duration-700'>
                        {/* <Link href={resource.secure_url}> */}
                        <button key={resource.secure_url}
                            onClick={() => handleOpen(resource)}
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
                )})}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyle}>
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
                </Box>
            </Modal>
        
        </div>
    );
}

export default ImageGallery