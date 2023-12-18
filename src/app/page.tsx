// import Link from 'next/link'
import Navbar from './components/NavBar'
import Main from './components/Main'
import Link from 'next/link'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Home = () => {
  return (
    <div>
      <div className='h-screen flex flex-col'>
          <div className='mx-auto w-full lg:w-4/5 grid lg:grid-cols-3'>
          <div className='flex justify-center items-center p-4 lg:p-6 custom-div'>
          <Link href="/about"
             className='text-white hover:text-tahiti'>
             <InfoOutlinedIcon className="nav-items"/> about
          </Link>          
          {/* <h1 className='p-12 underline'>harolDesigner.art</h1> */}
          </div>
          <div className='flex justify-center'>
          <h1 className='p-12 underline'>harolDesigner.art</h1>
          </div>
          <Navbar />
          </div>
          <div className='flex justify-center'>
          <hr className='w-4/5 text-tahiti'/>
          </div>
          <Main/>
      </div>
    </div>
  )
}

export default Home



