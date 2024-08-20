import React from 'react'
import { FaBars } from "react-icons/fa6";
import { FaSearch } from 'react-icons/fa';
import DropdownMenu from './dropdownmenu';
import Sidebar1 from './sidebar1';

const Dashboard_navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  const composeOptions = ['New Document', 'New Folder', 'New Project'];
  const shareOptions = ['Share Document', 'Share Folder', 'Share Project'];
  return (
    <nav className='flex w-full bg-[#FFFFFF] h-14 border rounded-sm items-center justify-between'>
      <div className='relative'>
        <FaBars onClick={toggle} className='text-xl text-start text-slate-500 m-2 cursor-pointer' />
        {isOpen && (
          <div className='absolute top-11 lg:hidden'>
            <Sidebar1 />
          </div>
        )}
      </div>
      <div className='border-2 border-slate-500 rounded-md'>
        <form className='hidden lg:flex items-center px-2'>
          <input type='text' placeholder='Search' className='outline-none' />
          <FaSearch className='  text-slate-500' />
        </form>

      </div>

      <div className='flex items-center space-x-4'>
        <DropdownMenu title='COMPOSE' options={composeOptions} />
        <DropdownMenu title='SHARE' options={shareOptions} />
      </div>

    </nav>
  );
};

export default Dashboard_navbar