import React, { useState } from 'react'
import { HiDotsHorizontal } from "react-icons/hi";
import TextEditor from './TextEditor';
import HistoryCard from './HistoryCard';
import Updates from './Updates';

const Dashboard_mini_navbar2 = () => {

  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Answered', 'Unanswered', 'Announcements'];

  return (
    <div className='bg-[#E3E0E0] w-full'>
      <div className='  bg-[#E3E0E0] px-4 py-2'>
        <div className='flex justify-end p-2'>
          <HiDotsHorizontal className='text-2xl  text-black ' />

        </div>
        <div className='bg-[#B9B9B9]  rounded-xl '>
          <div className=''>
            <div className='flex items-center justify-start h-12 px-2 space-x-4'>
              {tabs.map((tab) => (
                <p
                  key={tab}
                  className={`font-bold text-[11px] md:text-base cursor-pointer py-2 ${activeTab === tab
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
      <div className='flex gap-4 w-full justify-between px-4'>
        <Updates />
        <HistoryCard />
        <TextEditor />
      </div>

    </div>


  )
}

export default Dashboard_mini_navbar2