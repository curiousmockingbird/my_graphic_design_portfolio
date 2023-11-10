import Link from 'next/link'
import Navbar from './components/NavBar'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ScrollSnapDots from './components/ScrollSnapDots';

const Home = () => {
  return (
    <div>
      <div className='h-screen flex flex-col'>
        <main className='flex-1 main'>
          <div className='h-1/2 lg:h-3/4 grid grid-cols-1 lg:grid-cols-2'>
            <Navbar />
            <div className='group custom-div'>
              <Link
                href="/illustrations"
                className='sections'>
                <h2 className={`nav-items`}>
                  Illustrations & Posters{' '}
                </h2>
                <div className="flex items-center justify-center">
                  <span><ArrowForwardIcon className='group-hover:translate-x-2 transition-all duration-700' /></span>
                </div>
              </Link>
            </div>
          </div>
          {/* Snapping container starts here */}
          <div className='h-1/2 lg:h-1/4'>
          <div className='h-full'>
          <ScrollSnapDots>
            <div className="snap-center shrink-0 w-1/2 h-full flex justify-center items-center group custom-div">
              <Link
                href="/illustrations"
                className='sections'>
                <h2 className={`nav-items`}>
                  #WeThePeople{' '}
                </h2>
                <div className="flex items-center justify-center">
                  <span><ArrowForwardIcon className='group-hover:translate-x-2 transition-all duration-700' /></span>
                </div>
              </Link>
            </div>
            <div className="snap-center shrink-0 w-1/2 h-full flex justify-center items-center group custom-div">
              <Link
                href="/illustrations"
                className='sections'>
                <h2 className={`nav-items`}>
                  Life in Havana{' '}
                </h2>
                <div className="flex items-center justify-center">
                  <span><ArrowForwardIcon className='group-hover:translate-x-2 transition-all duration-700' /></span>
                </div>
              </Link>
            </div>
            <div className="snap-center shrink-0 w-1/2 h-full flex justify-center items-center group custom-div">
              <Link
                href="/illustrations"
                className='sections'>
                <h2 className={`nav-items`}>
                  Life in Havana{' '}
                </h2>
                <div className="flex items-center justify-center">
                  <span><ArrowForwardIcon className='group-hover:translate-x-2 transition-all duration-700' /></span>
                </div>
              </Link>
            </div>
            <div className="snap-center shrink-0 w-1/2 h-full flex justify-center items-center group custom-div">
              <Link
                href="/illustrations"
                className='sections'>
                <h2 className={`nav-items`}>
                  Life in Havana{' '}
                </h2>
                <div className="flex items-center justify-center">
                  <span><ArrowForwardIcon className='group-hover:translate-x-2 transition-all duration-700' /></span>
                </div>
              </Link>
            </div>
          </ScrollSnapDots>
            </div>

          </div>
        </main>
      </div>
    </div>
  )
}

export default Home



