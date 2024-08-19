import React from 'react'
import logo from '../assets/images/logo-white.png'
import { FaDiscord } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className='w-full items-center justify-center text-white/80'>
      <footer className='h-70 bg-[#817777]'>
        <div className='flex justify-between flex-col lg:flex-row items-center '>
          <div className='flex flex-col'>
            <div>
              <img src={logo} alt="logo" className="w-20 h-20 " />
            </div>
            <div className='flex my-2 mx-6 gap-2 '> 
              <FaDiscord className="w-8 h-8"/>
              <CiLinkedin  className='w-8 h-8'/>
              <CiYoutube  className='w-8 h-8'/>
              <FaXTwitter  className='w-8 h-8'/>
              
            </div>
          </div>
          <div className='flex flex-col  items-center justify-center'>
            <p><b>RESOURCES</b></p>
            <div className='flex flex-col items-center '>
              <a href='/' className='hover:underline hover:text-sky-800'>Login</a>
              <a href='/'className='hover:underline hover:text-sky-800'>SignUp</a>
              <a href='/'className='hover:underline hover:text-sky-800'>Extension</a>
            </div>
          </div>
          <div>
            <p><b>COMPANY</b></p>
            <div className='flex flex-col '>
              <a href='/'className='hover:underline hover:text-sky-800'>Privacy Policy</a>
              <a href='/'className='hover:underline hover:text-sky-800'>Terms Of Service</a>
              <a href='/'className='hover:underline hover:text-sky-800'>Extension</a>
            </div>
          </div>
          <div className='mr-6 '>
            <p className=''><b>CONNECT</b></p>
            <div className='flex flex-col'>
              <a href='/'className='hover:underline hover:text-sky-800'>Help Center</a>
              <a href='/'className='hover:underline hover:text-sky-800'>Contact Us</a>
              <a href='/'className='hover:underline hover:text-sky-800'>intelligentwa.com</a>
            </div>
          </div>
        </div>
        <div className='flex gap-12 mt-4 italic justify-start'>
          <div>
            <p>© 2024 Intelligent Writing Assistant</p>
          </div>
          <div>
            <p><i>All Rights Reserved</i></p>
          </div>
          <div>
          <p>Designed by  a Team of 4</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer