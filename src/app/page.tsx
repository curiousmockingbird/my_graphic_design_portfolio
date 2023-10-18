import Link from 'next/link'
import Navbar from './components/NavBar'
// import IllustrationsList from './components/IllustrationsList'
const Home = () => {
  return (
    <div>
    <div className='flex flex-col'>
    <main className='main'>
    <div className='h-screen lg:h-screen grid grid-cols-1 lg:grid-cols-2'>
    <Navbar title='Holaaaa'/>
      {/* <IllustrationsList/> */}
      <div className='custom-div'>
        <Link
          href="/illustrations"
          className='sections'>
          <h2 className={`nav-items`}>
          Illustrations & Posters{' '}
          </h2>            
          <div className="flex items-center justify-center">
  <span className="transition-all duration-300 transform hover:translate-x-3">→</span>
</div>
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
    </div>
  )
}

export default Home



