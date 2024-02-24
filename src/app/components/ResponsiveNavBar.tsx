// ResponsiveNavbar.js
import React, { useState } from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ResponsiveNavbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event:any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  // Your conditional rendering logic based on isMobile
  return (
    <>
      {isMobile ? (
        <AppBar position="static">
          <Toolbar className='flex items-center justify-center bg-black'>
            <div className='grid grid-cols-2 w-full'>
              <div className='flex items-center justify-center'>
              <p>harolDesigner.art</p>
              </div>
            <div className='flex items-center justify-end'>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ }}
              onClick={handleMenu}
              >
              <MenuIcon />
            </IconButton>
            </div>
              </div>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <Link href="/about">About</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link href="/contact">Contact</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <a href="https://www.instagram.com/harold_designer/" target="_blank" rel="noopener noreferrer">Instagram</a>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <a href="https://www.linkedin.com/in/haroldmesa93/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      ) : (
        <div className="h-full grid grid-cols-5">
          <div className='col-span-2 flex justify-center items-center'>
            <div className='text-white'>
              <ContactMailOutlinedIcon className="nav-items" />
              harolDesigner.art
            </div>
          </div>
          <div className='flex justify-center items-center nav-menu'>
            <Link href="/about"
              className='text-white hover:text-tahiti'>
              <InfoOutlinedIcon className="nav-items" />
              about
            </Link>
          </div>
          <div className='flex justify-center items-center nav-menu'>
            <Link href="/contact"
              className='text-white hover:text-tahiti'>
              <ContactMailOutlinedIcon className="nav-items" />
              contact
            </Link>
          </div>
          <div className='flex justify-center items-center nav-menu'>
            <a href="https://www.instagram.com/harold_designer/" target="_blank" rel="noopener noreferrer" className='text-white hover:text-tahiti'>
              <InstagramIcon sx={{ fontSize: 40 }} />
            </a>
            <a href="https://www.linkedin.com/in/haroldmesa93/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon sx={{ fontSize: 40 }} />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default ResponsiveNavbar;
