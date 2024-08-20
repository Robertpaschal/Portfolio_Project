import React from 'react'
// import starImage from '../assets/images/star-removebg-preview.png'
import landingImage from '../assets/images/landingpage_icon.png'



const Stars = () => {
  return (
    <div className="relative w-full h-screen  bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${landingImage})` }}>
      <div className="flex flex-col items-center justify-center h-full ">
        <div className=' bg-[#e9c0c08e] rounded-md p-6 text-black/60'>
          <h2 className="text-xl text-center font-bold ">Elevate Your Words with </h2>
          <h1 className=" text-4xl font-bold  ">Intelligent Precision</h1>

        </div>
        <div>

        </div>

        <form className='flex items-center justify-center my-10 w-3/4 bg-[#CCBBBB] p-2 rounded-md'>
          <input
            type='text'
            placeholder='Enter your text here'
            className='bg-transparent p-2 outline-none text-black/60  flex-grow'
          />
          <button className='bg-blue-500 text-white rounded-md hover:bg-blue-600 p-2'>
            Analyze
          </button>
        </form>
      </div>
    </div>
  )
}

export default Stars