import React from 'react'
import Navbar from '../components/Navbar'
import Body from '../components/body'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='flex justify-between flex-col bg-[#D9D9D9] w-full sm:place-content-center'>
      <Navbar />
      <Body />
      <Footer />
      
    </div>
  )
}

export default Home