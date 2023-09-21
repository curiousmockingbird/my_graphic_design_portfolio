import Link from 'next/link';
// import { title } from 'process';

export default function Navbar(props:any) {
  console.log(props.title);
  return (
    <nav className="custom-div">
        <div className="p-4 lg:p-6 custom-div">
          <div className="flex flex-row">
            <Link href="/"
             className="nav-items"> Home
            </Link>
            <Link href="/about"
             className="nav-items">About
            </Link>
            <Link href="/contact"
             className="nav-items">Contact
            </Link>
          </div>
        </div>
    </nav>
  );
}
