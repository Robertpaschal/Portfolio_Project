import React, { useState } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";


const DropDownItem = ({ question, notes }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  };
  return (
    <div className='space-y-6 mx-28'>
      <div className='flex flex-col items-center bg-white px-2 justify-items-start rounded-md w-full cursor-pointer'
        onClick={toggleDropdown} >
        <div className='flex items-center justify-between'>
          <p>{question}</p>
          <RiArrowDropDownLine className={`text-4xl transform ${isOpen ? 'rotate-180' : ''}`} />
        </div>
        <div className={`overflow-hidden transition-max-height duration-500 ${isOpen ? 'max-h-40' : 'max-h-0'}`}>
          <p className='px-4 py-2'>{notes}</p>
        </div>
      </div>
      {/* {isOpen && (
        <div className='bg-white px-2 justify-items-start rounded-md w-4/6'>
          <p>{notes}</p>
        </div>
      )} */}

    </div>
  );
};

export default DropDownItem