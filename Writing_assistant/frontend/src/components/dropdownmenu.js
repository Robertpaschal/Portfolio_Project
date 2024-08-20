import React, { useState, useEffect, useRef } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';

const DropdownMenu = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='relative' ref={menuRef}>
      <button onClick={toggleMenu} className='flex items-center'>
        <p className='mr-1'>{title}</p>
        <RiArrowDropDownLine className='size-8' />
      </button>
      {isOpen && (
        <ul className='absolute right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-10'>
          {options.map((option, index) => (
            <li
              key={index}
              className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
