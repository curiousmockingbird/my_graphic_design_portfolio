import Link from 'next/link';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
export default function Navbar() {
  return (
    <nav className="custom-div">
        <div className="p-4 lg:p-6 custom-div">
          <div className="flex space-x-4 ">
            <Link href="/about"
             className='text-white  hover:text-tahiti'>About
             <InfoOutlinedIcon className="nav-items"/> & Contact
             <ContactMailOutlinedIcon className="nav-items"/>

            </Link>
            {/* <Link href="/contact"
             className='text-white  hover:text-tahiti'>Contact
             <ContactMailOutlinedIcon className="nav-items"/>
            </Link> */}
          </div>
        </div>
    </nav>
  );
}
