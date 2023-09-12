"use client"
import { CldImage as NextCldImage} from 'next-cloudinary';
import React, { useState } from 'react';

const CldImage = (props: any) => {
    const [isGrayscale, setIsGrayscale] = useState(false);

    const handleMouseOver = () => {
        setIsGrayscale(true);
      };
    
      const handleMouseOut = () => {
        setIsGrayscale(false);
      };

return (
    <NextCldImage {...props}
      grayscale={isGrayscale ? "" : "true"}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}/>
)
}

export default CldImage;