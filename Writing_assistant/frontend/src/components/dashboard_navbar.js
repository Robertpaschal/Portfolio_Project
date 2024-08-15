import React from 'react'
import { FaBars } from "react-icons/fa6";
import { FaSearch } from 'react-icons/fa';
// import { RiArrowDropDownLine } from "react-icons/ri";
import DropdownMenu from './dropdownmenu';

const Dashboard_navbar = () => {
  const composeOptions = ['New Document', 'New Folder', 'New Project'];
  const shareOptions = ['Share Document', 'Share Folder', 'Share Project'];
  return (
    <nav className='flex w-full  top-0 bg-[#FFFFFF] h-10 border rounded-sm items-center justify-evenly'>
      <div className='flex-shrink-0'>
        <FaBars className='text-xl text-start text-slate-500 m-2 ' />
      </div>

      <form className='flex relative'>
        <input type='text' placeholder='Search' className='border-2 border-slate-500 rounded-md px-2' />
        <FaSearch className='absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-500' />
      </form>

      <div className='flex items-center space-x-4'>
        <DropdownMenu title='COMPOSE' options={composeOptions} />
        <DropdownMenu title='SHARE' options={shareOptions} />
      </div>

    </nav>
  );
};

export default Dashboard_navbar