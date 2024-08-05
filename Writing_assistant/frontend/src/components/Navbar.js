import React from 'react'
import logo  from '../assets/images/logo-black.png'

const Navbar = () => {
  return (
    <>
      <nav className="mx-3 my-6 flex items-center justify-between px-10 bg-gradient-to-r from-neutral-50  to-zinc-800 rounded-m-md">
        <img src={logo} alt="logo" className="w-20 h-20" />
        <ul className='py-2 flex gap-4  pr-10'>
          <li className=""> Home </li>
          <li className="">Dashboard </li>
          <li className="">Editor</li>
          <li className="">Login </li>
          <li className=" ">Signup </li>
        </ul>

      </nav>
    </>
  )
}

export default Navbar