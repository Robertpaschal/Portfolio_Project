import React from 'react'
import starImage from '../assets/images/star-removebg-preview.png'



const Stars = () => {
  return (
    <div className='flex justify-center items-center h-1/2 w-1/2'>
      <div className="bg-center bg-cover h-full w-full "
      style={{backgroundImage: 'url(${starImage})', filter: 'sepia(100%) hue-rotate(30deg) saturate(1000%)'}}>
        <p>Hello</p>
      </div>
    </div>
  )
}

export default Stars