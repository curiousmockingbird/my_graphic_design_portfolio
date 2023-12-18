'use client'
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import Header from '../components/Header'
// import Image from 'next/image';
import { useState, useEffect } from 'react'
// import { useWindowWidth} from '@react-hook/window-size'
import { SiAdobecreativecloud } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobeindesign } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";

const About = () => {

    const [imgWidth, setImgWidth] = useState(200); // Default width

  useEffect(() => {
    // Add an event listener to track window resize
    const handleResize = () => {
      // Calculate the width based on screen size or any other condition
      const newWidth = window.innerWidth < 768 ? 300 : 400; // Example condition
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
        <div className='h-screen flex-1'>
            <div className='main h-1/5'>
                <Header headerText='about me' />
            </div>
            <div className='lg:h-4/5'>
                <main className='h-full main grid lg:grid-cols-2'>
                    
                <div className='flex flex-col justify-center items-center'>
                    <div><h2>Proficient in:</h2></div>
                    <div className='flex justify-center items-center'>
                    <SiAdobecreativecloud style={{ fontSize: '50px', paddingRight:'0.4rem' }}/>                    
                    <SiAdobeillustrator style={{ fontSize: '50px', paddingRight:'0.4rem' }}/>                    
                    <SiAdobeindesign style={{ fontSize: '50px', paddingRight:'0.4rem' }}/>                    
                    <SiAdobephotoshop style={{ fontSize: '50px', paddingRight:'0.4rem'  }}/>                    
                    <SiAdobepremierepro style={{ fontSize: '50px', paddingRight:'0.4rem'  }}/>                    
                    <SiAdobeaftereffects style={{ fontSize: '50px', paddingRight:'0.4rem'  }}/>                    
                    </div>
                    </div>
                    <div className="grid-rows-2">
                        <div className='flex items-center justify-center py-4'>
                            <img
                                src="/profile_pic.jpg"
                                alt="Your Name"
                                className="rounded-full"
                                width={imgWidth}
                            />
                        </div>
                        <div className='px-6 flex items-center pb-6 lg:pb-0'>
                            <div className=''>
                                {/* <p className="text-lg leading-relaxed mb-3">
                            Hello! I'm [Your Name], a passionate Graphic Designer with over [X years] of experience. I specialize in creating unique designs that capture the essence of a brand and resonate with its audience. From logos to comprehensive branding projects, I have worked with various clients across different industries.
                        </p> */}
                                <p className="text-lg text-center leading-relaxed">
                                Hi, I am Harold Mesa,<br/> a Designer with more than six years of professional experience.
                                </p>
                                <p className="text-lg text-center leading-relaxed">
                                I am an illustrator, animator, and editorial designer, an have worked for agencies and as a freelancer for various clients. I am always eager to learn new tools and techniques, and to apply my design thinking and user-centered approach to web development and design.                                </p>
                            </div>
                        </div>
                    </div>
                    
                </main>
            </div>
        </div>
    );
}

export default About;
