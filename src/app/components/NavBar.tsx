import Link from 'next/link';
// import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
export default function Navbar() {
  return (
    <nav className="flex items-center justify-center p-4 lg:p-6 custom-div">
        <div>
          <div className="flex space-x-4 ">
            <Link href="/contact"
             className='text-white  hover:text-tahiti'>
             <ContactMailOutlinedIcon className="nav-items"/>
              contact
            </Link>
          </div>
        </div>
    </nav>
  );
}
