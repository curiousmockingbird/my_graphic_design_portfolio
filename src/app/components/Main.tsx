'use client'
import * as React from 'react';
import Box from '@mui/system/Box';
import Navbar from './NavBar';
import Project from './Project';

export default function Main() {
  const [currentPage, setCurrentPage] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleScrollHorizontal = (e: React.UIEvent<HTMLElement>) => {
    const { scrollLeft, clientWidth } = e.currentTarget;
    const pageIndex = Math.round(scrollLeft / clientWidth);
    setCurrentPage(pageIndex);
  };

  const scrollToPage = (pageIndex:any) => {
    const newPageIndex = Math.max(0, Math.min(pageIndex, pages.length - 1));
    if (containerRef.current) {
      const scrollX = newPageIndex * window.innerWidth;
      containerRef.current.scrollTo({ left: scrollX, behavior: 'smooth' });
    }
    setCurrentPage(newPageIndex);
  };

  const handleNext = () => {
    scrollToPage(currentPage + 1);
  };

  const handlePrevious = () => {
    scrollToPage(currentPage - 1);
  };

  const pages = [
    <Project key="voces" route='/voces' image='/VDLF_logo_color.svg' next={handleNext} previous={handlePrevious}/>,
    <Project key="illustrations" route='/illustrations' image='/pencil.svg' next={handleNext} previous={handlePrevious}/>,
    <Project key="ballet" route='/ballet' image='/pencil.svg' next={handleNext} previous={handlePrevious}/>,
    <Project key="illustrations" route='/havana' image='/pencil.svg' next={handleNext} previous={handlePrevious}/>,
    // Add more components as needed, each with a unique key
  ];

  return (
    <main>
      <Box sx={{ height: '10vh' }}>
        <Navbar />
      </Box>
      <Box
        ref={containerRef}
        sx={{
          height: '90vh',
          display: 'flex',
          overflowX: 'scroll',
          scrollSnapType: 'x mandatory',
          '& > div': {
            scrollSnapAlign: 'start',
            flex: 'none',
            width: '100vw',
          },
        }}
        onScroll={handleScrollHorizontal}
      >
        {pages}
      </Box>
      <Box
        sx={{
          position: 'fixed',
          bottom: '10vh',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        {pages.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 8,
              height: 8,
              bgcolor: currentPage === index ? '#3ab7bf' : '#fb923c',
              borderRadius: '50%',
              margin: '0 4px',
              transition: 'background-color 0.3s',
            }}
          />
        ))}
      </Box>
    </main>
  );
}
