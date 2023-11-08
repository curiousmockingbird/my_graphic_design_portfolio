import Link from 'next/link'
import Navbar from './components/NavBar'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Home = () => {
  return (
    <div>
      <div className='flex flex-col'>
        <main className='main'>
          <div className='h-screen lg:h-screen grid grid-cols-1 lg:grid-cols-2'>
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
        </main>
      </div>
    </div>
  )
}

export default Home



