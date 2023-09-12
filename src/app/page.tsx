
import Link from 'next/link'
import Navbar from './navBar/page'

export default function Home() {
  return (
    <body>
    <div className='flex flex-col'>
    <main className='main'>
    <div className='h-screen lg:h-screen grid grid-cols-1 lg:grid-cols-2'>
    <Navbar/>
      <div className='custom-div'>
        <Link
          href="/illustrations"
          className='sections'>            
          <h2 className="nav-items">
            Illustrations & Posters{' '}
          </h2>
        </Link>
      </div>
      <div className='custom-div'>
        <Link
          href="/illustrations"
          className='sections'>
          <h2 className="nav-items">
            Ballet Nacional de Cuba{' '}
          </h2>
        </Link>
      </div>
      <div className='custom-div'>
        <Link
          href="/illustrations"
          className='sections'>
          <h2 className="nav-items">
            Motion Graphics & Animations{' '}
          </h2>
        </Link>
      </div>
      <div className='custom-div'>
        <Link
          href="/illustrations"
          className='sections'>
          <h2 className="nav-items">
            Life in Havana{' '}
          </h2>
        </Link>
      </div>
      <div className='custom-div'>
        <Link
          href="/illustrations"
          className='sections'>
          <h2 className="nav-items">
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
