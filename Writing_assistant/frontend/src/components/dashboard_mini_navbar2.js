import React, { useState } from 'react'
import { HiDotsHorizontal } from "react-icons/hi";

const Dashboard_mini_navbar2 = () => {

  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Answered', 'Unanswered', 'Announcements'];

  return (
    <div className='  bg-[#c26666] w-full px-4'>
      <HiDotsHorizontal className='text-2xl mx-4 text-right-0' />
      <div className='bg-[#B9B9B9]  rounded-xl w-full  mt-4 '>
        <div className=''>
          <div className='flex items-center justify-start h-12 px-2 space-x-4'>
            {tabs.map((tab) => (
              <p
                key={tab}
                className={`font-bold text-lg cursor-pointer py-2 ${activeTab === tab
                  ? ' border-b-2 border-[#4B4B4B]'
                  : 'text-[#4B4B4B] hover:border-b hover:border-[#4B4B4B]'
                  }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </p>
            ))}
           
            <div
              className=''
              style={{ width: `calc(100% / ${tabs.length})`, transform: `translateX(${tabs.indexOf(activeTab) * (100 / tabs.length)}%)` }}
            />
          </div>
        </div>

      </div>

    </div>
    

  )
}

export default Dashboard_mini_navbar2