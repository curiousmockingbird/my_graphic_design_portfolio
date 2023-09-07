import Link from 'next/link'
import Navbar from './navBar/page'

export default function Home() {
  return (
    <body>
    <div className='flex flex-col'>
    <main className='mx-auto w-full lg:w-4/5'>
    <div className='h-screen lg:h-screen grid grid-cols-1 lg:grid-cols-2'>
    <Navbar/>
      <div className='custom-div'>
        <Link
          href="/illustrations">
          <h2>
            Illustrations & Posters{' '}
          </h2>
        </Link>
      </div>
      <div className='custom-div'>
        <Link
          href="/illustrations">
          <h2>
            Ballet Nacional de Cuba{' '}
          </h2>
        </Link>
      </div>
      <div className='custom-div'>
        <Link
          href="/illustrations">
          <h2>
            Motion Graphics & Animations{' '}
          </h2>
        </Link>
      </div>
      <div className='custom-div'>
        <Link
          href="/illustrations">
          <h2>
            Life in Havana{' '}
          </h2>
        </Link>
      </div>
      <div className='custom-div'>
        <Link
          href="/illustrations">
          <h2>
            #WeThePeople{' '}
          </h2>
        </Link>
      </div>
    </div>
    </main>
    </div>
    </body>
  )
}
