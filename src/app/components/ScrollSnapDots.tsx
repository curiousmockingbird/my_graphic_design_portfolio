'use client'

import React, { useState, useEffect, useRef } from 'react';

type ScrollSnapDotsProps = {
    children: React.ReactNode;
  };
  
  const ScrollSnapDots: React.FC<ScrollSnapDotsProps> = ({ children }) => {
    const snapContainerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollEventThreshold = 50; // Adjust this threshold as needed
    let lastScrollLeft = 0;
  
    useEffect(() => {
      const updateActiveDot = () => {
        if (snapContainerRef.current) {
          const scrollLeft = snapContainerRef.current.scrollLeft;
          if (Math.abs(scrollLeft - lastScrollLeft) > scrollEventThreshold) {
            const totalWidth = snapContainerRef.current.scrollWidth;
            const itemWidth = totalWidth / React.Children.count(children);
            const newActiveIndex = Math.round(scrollLeft / itemWidth);
            setActiveIndex(newActiveIndex);
            lastScrollLeft = scrollLeft;
          }
        }
      };
  
      const snapContainer = snapContainerRef.current;
      if (snapContainer) {
        snapContainer.addEventListener('scroll', updateActiveDot);
      }
  
      return () => {
        if (snapContainer) {
          snapContainer.removeEventListener('scroll', updateActiveDot);
        }
      };
    }, [children]);
  
    const scrollToElement = (index: number) => {
      if (snapContainerRef.current) {
        const totalWidth = snapContainerRef.current.scrollWidth;
        const itemWidth = totalWidth / React.Children.count(children);
        snapContainerRef.current.scrollTo({
          left: itemWidth * index,
          behavior: 'smooth'
        });
      }
    };

  return (
    <div className='h-full flex-1'>
    <div className='h-1/2 lg:h-3/4 flex justify-center'>
      <div ref={snapContainerRef} className="w-full flex overflow-x-auto snap-x snap-mandatory">
        {children}
      </div>
    </div>
      <div className="h-1/2 lg:h-1/4 flex justify-center space-x-2 mt-4">
        {React.Children.map(children, (_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${activeIndex === index  ? 'bg-tahiti' : 'bg-orange'}`}
            onClick={() => scrollToElement(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollSnapDots;
