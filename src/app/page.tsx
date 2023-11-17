// import Link from 'next/link'
import Navbar from './components/NavBar'
import Main from './components/Main'

const Home = () => {
  return (
    <div>
      <div className='h-screen flex flex-col'>
          <div className='mx-auto w-full lg:w-4/5 grid lg:grid-cols-2 border-transparent rounded-sm border-2 hover:rounded-3xl hover:border-tahiti transition-all duration-700'>
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



