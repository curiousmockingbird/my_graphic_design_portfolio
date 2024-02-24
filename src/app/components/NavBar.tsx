// Navbar.js or your main component file
import React from 'react';
import dynamic from 'next/dynamic';

// Import your ResponsiveNavbar component dynamically with SSR disabled
const ResponsiveNavbar = dynamic(() => import('./ResponsiveNavBar'), { ssr: false });

export default function Navbar() {
  // You can include other parts of your navbar component that don't rely on client-side APIs

  return (
    <>
      <ResponsiveNavbar />
      {/* Other parts of your navbar or other components */}
    </>
  );
}

