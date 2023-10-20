import Link from 'next/link'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Header({ headerText }: { headerText: string }) {
    return (
        <header className='grid grid-cols-4 gap-4 sticky top-0 bg-black z-10'>
        <Link
          href="/"
          className='group back-arrow text-white hover:text-tahiti my-4 '>
          <ArrowBackIcon className='group-hover:-translate-x-2 '/>
        </Link>
        <h2 className="section-header col-span-3 my-4">
          {headerText}
        </h2>
      </header>
    );
  }