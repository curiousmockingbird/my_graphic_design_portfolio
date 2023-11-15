import Link from 'next/link'
import Navbar from './components/NavBar'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ScrollSnapDots from './components/ScrollSnapDots';

const Home = () => {
  return (
    <div>
      <div className='h-screen flex flex-col'>
          <div className='mx-auto w-full lg:w-4/5 flex items-center justify-center border-transparent rounded-sm border-2 hover:rounded-3xl hover:border-tahiti transition-all duration-700'>
          <h1 className='p-12'>Harold Designer</h1>
          </div>
        <main className='flex-1 main'>
          <div className='h-1/2 lg:h-3/4 grid grid-cols-1 lg:grid-cols-3'>
            <Navbar />
            <div className='group custom-div'>
              <Link
                href="/illustrations"
                className='sections'>
                <h2 className={`nav-items`}>
                  Voces de la Frontera{' '}
                </h2>
                <div className="flex items-center justify-center">
                  <span><ArrowForwardIcon className='group-hover:translate-x-2 transition-all duration-700' /></span>
                </div>
              </Link>
            </div>
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
            <div className="snap-center shrink-0 w-1/4 h-full flex justify-center items-center">
              <div className="flex items-center justify-center">
                  <span><ArrowForwardIcon className='group-hover:translate-x-2 transition-all duration-700' /></span>
              </div>
              <div className="flex items-center justify-center">
                  <span><ArrowForwardIcon className='group-hover:translate-x-2 transition-all duration-700' /></span>
              </div>
            </div>
            <div className="snap-center shrink-0 w-1/2 h-full flex justify-center items-center group custom-div">
              <Link
                href="/wethepeople"
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
                href="/havana"
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
                href="/ballet"
                className='sections'>
                <h2 className={`nav-items`}>
                  Ballet Nacional de Cuba{' '}
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



