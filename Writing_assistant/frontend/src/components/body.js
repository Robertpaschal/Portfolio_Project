import React from 'react'
import star from '../assets/images/star-removebg-preview.png'

const Body = () => {
  return (
    <div className='flex flex-col my-6 mx-4 '>
      <div className=' flex items-center justify-center mt-24 '>
        <img src={star} alt="star" className="w-98 h-80  filter-red" />
      </div>
    </div>
  )
}

export default Body