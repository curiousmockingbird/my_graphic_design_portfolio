import Link from 'next/link';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Navbar() {
  return (
    <div className="h-full grid grid-cols-5">
      <div className='col-span-2 flex justify-center items-center'>
        <div className='text-white'>
          <ContactMailOutlinedIcon className="nav-items" />
          harolDesigner.art
        </div>
      </div>
      <div className='flex justify-center items-center nav-menu'>
        <Link href="/about"
          className='text-white  hover:text-tahiti'>
          <InfoOutlinedIcon className="nav-items" />
          about
        </Link>
      </div>
      <div className='flex justify-center items-center nav-menu'>
        <Link href="/contact"
          className='text-white  hover:text-tahiti'>
          <ContactMailOutlinedIcon className="nav-items" />
          contact
        </Link>
      </div>
      <div className='flex justify-center items-center nav-menu'>
        <a href="https://www.instagram.com/harold_designer/" target="_blank" rel="noopener noreferrer" className='text-white  hover:text-tahiti'>
          <InstagramIcon sx={{ fontSize: 40 }} />
        </a>
        <a href="https://www.linkedin.com/in/haroldmesa93/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon sx={{ fontSize: 40 }} />
        </a>
      </div>
    </div>
  );
}
