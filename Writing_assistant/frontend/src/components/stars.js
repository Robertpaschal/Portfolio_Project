import React from 'react'
import starImage from '../assets/images/star-removebg-preview.png'



const Stars = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://via.placeholder.com/1200x800?text=Background+Image)' }}>
      <div className="flex items-center justify-center h-full">
        <h1 className="text-white text-4xl font-bold bg-black/30 p-6">Centered Content</h1>
      </div>
    </div>
  )
}

export default Stars