import React from 'react'
import { BsPersonCircle } from "react-icons/bs";

const HistoryCard = () => {
  return (
    <div className='flex flex-col bg-slate-400  w-2/6'>
      <div className='flex flex-col p-2 h-fit'>
        <div className='flex my-2 gap-2'>
          <BsPersonCircle />
          <p>Names</p>
          <div className='flex flex-col items-start justify-normal p-4 overflow-hidden '>
            <p className=''>Text</p>
          </div>
          <div className='flex gap-4 '>
            <p>Date</p>
            <p>Question No:</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HistoryCard