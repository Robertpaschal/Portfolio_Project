import React from 'react'
import logo  from '../assets/images/logo-black.png'

const Navbar = () => {
  return (
    <>
      <nav className="mx-3 my-2 flex items-center justify-between px-10 bg-gradient-to-r from-neutral-50  to-zinc-800 rounded-m-md fixed top-0 w-full">
        <img src={logo} alt="logo" className="w-20 h-20" />
        <ul className='py-2 flex gap-4  pr-10'>
          <li className=' hover:text-sky-800'> Home </li>
          <li className=" hover:text-sky-800">Dashboard </li>
          <li className=" hover:text-sky-800">Editor</li>
          <li className="hover:text-sky-800">Login </li>
          <li className="hover:text-sky-800 ">Signup </li>
        </ul>

      </nav>
    </>
  )
}

export default Navbar