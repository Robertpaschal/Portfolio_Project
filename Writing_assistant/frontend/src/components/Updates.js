import React from 'react'
import { FaPlusCircle } from "react-icons/fa";

const Updates = () => {
  return (
    <div className='hidden lg:flex flex-col gap-y-4 my-6 w-1/3'>
      <div className='flex flex-col gap-y-4 items-center my-12'>
        <p className='text-black/80 font-bold'>Dashboard</p>
        <p className=''>Ongoing session</p>
      </div>
      <div className='flex justify-center items-center h-4 bg-slate-700 rounded-lg mx-8 space-y-8'>

      </div>
      <div className='flex flex-col space-y-4 items-center my-12'>
        <h1 className=' font-bold '>Categories</h1>
        <p className=''>Fix Jest test alerts</p>
        <p className=''>Business models</p>
      </div>
      <button className='flex justify-center items-center h-fit rounded-md bg-slate-700 gap-2'>
        <FaPlusCircle />
        <p>New Category</p>
      </button>
    </div>
  )
}

export default Updates