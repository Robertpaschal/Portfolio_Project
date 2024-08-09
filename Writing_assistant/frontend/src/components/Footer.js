import React from 'react'
import logo from '../assets/images/logo-white.png'

const Footer = () => {
  return (
    <div>
      <footer className='w-full h-70  bg-[817777] absolute b-0'>
        <div className='flex justify-between items-center '>
          <div className='flex flex-col'>
            <div>
              <img src={logo} alt="logo" className="w-20 h-20 " />
            </div>
            <div> 

            </div>
          </div>
          <div className='flex flex-col'>
            <p><b>RESOURCES</b></p>
            <div>
              <a href='/'>Login</a>
              <a href='/'>SignUp</a>
              <a href='/'>Extension</a>
            </div>
          </div>
          <div>
            <p><b>COMPANY</b></p>
            <div>
              <a href='/'>Privacy Policy</a>
              <a href='/'>Terms Of Service</a>
              <a href='/'>Extension</a>
            </div>
          </div>
          <div>
            <p><b>CONNECT</b></p>
            <div>
              <a href='/'>Help Center</a>
              <a href='/'>Contact Us</a>
              <a href='/'>intelligentwa.com</a>
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <div>
            <p>© 2024 Intelligent Writing Assistant</p>
          </div>
          <div>
            <p><i>All Rights Reserved</i></p>
            <p>Designed by  a Team of 4</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer