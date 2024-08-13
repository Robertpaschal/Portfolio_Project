import React from 'react'
import star from '../assets/images/star-removebg-preview.png'

const Body = () => {
  return (
    <div className='flex flex-col my-6 mx-4 h-full'>
      <div className=' flex items-center justify-center mt-24 '>
        <img src={star} alt="star" className="w-98 h-80  filter-red" />
        <div className=''>
          <p className='text-md'>Elevate Your Words with </p>
          <p className='text-2xl'>Intelligent Precision</p>
        </div>
      </div>
      <div>
        <form className='flex items-center justify-center my-12'>
          <input
            type='text'
            placeholder='Enter your text here'
            className='p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#CCBBBB] text-black/80 focus:border-transparent flex-grow '
          />
          <button className=' bg-blue-500 text-white rounded-md hover:bg-blue-600 p-2'>
            Analyze
          </button>
        </form>
      </div>
      <div className='flex flex-col items-center justify-center' >
        <p>Intelligent writing assistant helps with ...</p>
        <div className="flex items-center justify-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-12 h-12  "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-12 h-12 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </div>


      </div>
      <div className='flex  items-center justify-evenly w-fit h-20 mx-6  text-black/70 gap-4'>
        <div className='bg-[#CCBBBB] my-12 rounded-md'>
          <img src={star} alt="star" className="w-12 h-12 align-right" />
          <h1 className='items-center justify-center font-bold'>Communication</h1>
          <p>Streamline your
            communication with
            intelligent, precise, and
            effective writing.
          </p>

        </div>
        <div className='bg-[#CCBBBB] my-12 items-center justify-center'>
          <img src={star} alt='star' className='w-12 h-12' />
          <h1>Writing</h1>
          <p>Effortlessly craft compelling
            content with our assistant for
            clear, resonant messages.
          </p>

        </div>
        <div>

        </div>
      </div>

    </div>
  )
}

export default Body