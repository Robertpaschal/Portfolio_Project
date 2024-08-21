import React from 'react'
import { IoTelescopeOutline } from "react-icons/io5";
import { HiChartBar } from "react-icons/hi2";
import { FaHome } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { IoDocumentLockOutline } from "react-icons/io5";
import { BsStars } from "react-icons/bs";
import { HiDotsHorizontal } from "react-icons/hi";
import SignOutButton from './SignOutButton';


const Sidebar1 = () => {
  return (
    <div className='bg-[#B9B9B9] h-full'>
      <div className='flex flex-col items-center space-y-6 h-full py-14 mx-6 '>
        <div className='flex items-center justify-center gap-2'>
          <FaHome className='siz-8' />
          <p className='text-xl text-slate-500 font-normal'>Home</p>
        </div>
        <div className='flex items-center justify-center gap-2'>
          <HiChartBar className='siz-8' />
          <p className='text-xl text-slate-500 font-normal'>Channel</p>
        </div>
        <div className='flex items-center justify-center gap-2'>
          <IoPeople className='siz-8' />
          <p className='text-xl text-slate-500 font-normal'>Groups</p>
        </div>
        <div className='flex items-center justify-center gap-2 '>
          <BsStars className='siz-8' />
          <p className='text-xl text-slate-500 font-normal'>Feeds</p>
        </div>
        <div className='flex items-center justify-center gap-2'>
          <IoTelescopeOutline className='siz-8' />
          <p className='text-xl text-slate-500 font-normal'>Events</p>
        </div>
        <div className='flex items-center justify-center gap-2'>
          <IoDocumentLockOutline className='siz-8' />
          <p className='text-xl text-slate-500 font-normal'>Tasks</p>
        </div>
        <div className='flex items-center justify-center gap-2'>
          <HiDotsHorizontal className='siz-8' />
          <p className='text-xl text-slate-500 font-normal'>More</p>
        </div>

        <div>
          <SignOutButton />
        </div>
      </div>

    </div>
  )
}

export default Sidebar1