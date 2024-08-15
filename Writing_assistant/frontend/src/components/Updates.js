import React from 'react'
import { FaPlusCircle } from "react-icons/fa";

const Updates = () => {
  return (
    <div className='flex flex-col w-1/6 bg-slate-800 justify-evenly h-full'>
      <div className='flex flex-col justify-center items-center '>
        <p className='text-black/80 font-bold'>Dashboard</p>
        <p className=''>Ongoing session</p>
      </div>
      <div className='flex justify-center items-center h-4 bg-slate-700 rounded-lg mx-8'>

      </div>
      <div className='flex flex-col justify-center items-center '>
        <h1 className=' font-bold '>Categories</h1>
        <p className=''>Fix Jest test alerts</p>
        <p className=''>Business models</p>
      </div>
      <div className='flex justify-center items-center h-4 bg-slate-700 gap-2'>
        <FaPlusCircle />
        <p>New Category</p>
      </div>
    </div>
  )
}

export default Updates