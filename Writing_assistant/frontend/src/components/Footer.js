import React from 'react'
import logo from '../assets/images/logo-white.png'
import discord from '../assets/images/logo-discord.png'
import linkedin from '../assets/images/logo-linkedin.png'
import twitter from '../assets/images/xcom.png'
import youtube from '../assets/images/logo-youtube.png'

const Footer = () => {
  return (
    <div className='absolute bottom-0 w-full items-center justify-center text-white/80'>
      <footer className=' h-70  bg-[#817777]'>
        <div className='flex justify-between items-center '>
          <div className='flex flex-col'>
            <div>
              <img src={logo} alt="logo" className="w-20 h-20 " />
            </div>
            <div className='flex my-2 mx-6 gap-2 '> 
              <img src={discord} alt="discord" className="w-8 h-8" />
              <img src={linkedin} alt="linkedin" className="w-8 h-8" />
              <img src={twitter} alt="twitter" className="w-8 h-8" />
              <img src={youtube} alt="youtube" className="w-8 h-8" />
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