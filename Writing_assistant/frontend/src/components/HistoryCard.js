import React from 'react'
import { BsPersonCircle } from "react-icons/bs";

const card = [
  {
    name: 'Names',
    text: 'Text',
    date: 'Date',
    questionNo: 'Question No:'
  },

  {
    name: 'Names',
    text: 'Text',
    date: 'Date',
    questionNo: 'Question No:'
  },

  {
    name: 'Names',
    text: 'Text',
    date: 'Date',
    questionNo: 'Question No:'
  },
]

const HistoryCard = () => {
  return (
    <div className='hidden md:flex flex-col rounded-md'>
      <div className='flex flex-col gap-y-2'>
        {card.slice(0, 3).map((card) => (
          <div className='flex flex-col gap-2 px-4 bg-[#CCBBBB] rounded-lg'>
            <div className='flex items-center gap-4'>
              <BsPersonCircle />
              <p>{card.name}</p>
            </div>

            <div className='flex flex-col items-start justify-normal p-4 overflow-hidden '>
              <p className=''>{card.text}</p>
            </div>
            <div className='flex gap-4 '>
              <p>{card.date}</p>
              <p>{card.questionNo}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HistoryCard