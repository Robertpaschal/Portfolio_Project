import React from 'react'
import { FaBars } from "react-icons/fa6";
import { FaSearch } from 'react-icons/fa';
// import { RiArrowDropDownLine } from "react-icons/ri";
import DropdownMenu from './dropdownmenu';

const Dashboard_navbar = () => {
  const composeOptions = ['New Document', 'New Folder', 'New Project'];
  const shareOptions = ['Share Document', 'Share Folder', 'Share Project'];
  return (
    <nav className='flex w-full bg-[#FFFFFF] h-14 border rounded-sm items-center justify-between'>
      <div className=''>
        <FaBars className='text-xl text-start text-slate-500 m-2 ' />
      </div>

      <form className='hidden lg:flex items-center border-2 border-slate-500 rounded-md px-2'>
        <input type='text' placeholder='Search' className='' />
        <FaSearch className='  text-slate-500' />
      </form>

      <div className='flex items-center space-x-4'>
        <DropdownMenu title='COMPOSE' options={composeOptions} />
        <DropdownMenu title='SHARE' options={shareOptions} />
      </div>

    </nav>
  );
};

export default Dashboard_navbar