import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="grid grid-cols-2 gap-12 lg:gap-32 custom-div">
      <div className="custom-div p-4">
          <Link href="/"
            className="text-white text-2xl font-bold">Harold Mesa
          </Link>
    </div>
        <div className="p-4 custom-div text-center lg:text-right">
          <div className="flex flex-col">
            <Link href="/"
             className="text-white hover:text-blue-300"> Home
            </Link>
            <Link href="/about"
             className="text-white hover:text-blue-300">About
            </Link>
            <Link href="/contact"
             className="text-white hover:text-blue-300">Contact
            </Link>
          </div>
        </div>
    </nav>
  );
}
