import React from 'react'
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa6";
import PropTypes from 'prop-types';
import style from '../styles/fonts.css';
import { Link } from 'react-router-dom';
import SignUp from './Signup';



const SignIn = ({ closing }) => {
  return (
    <div className='fixed top-0 left-0 w-full bg-white bg-opacity-90 flex justify-center items-center overflow-hidden m-0' >
      <div className='flex  flex-col justify-center items-center py-36 px-20 border w-full'>
        <button className=' absolute  top-20 right-40 m-4 p-2 ' onClick={closing}>
          <IoCloseCircleOutline  className='size-10 opacity-40'/></button>
        <h1 className='text-[36px] font-black-900 font-[{style.interFont}]'>Welcome back!</h1>
        <div>
          <form className='w-full'>
          <div className='flex justify-center mt-2 px-4 items-center space-x-2'>
              <div className='bg-slate-500 size-0.5 w-20 h-0.5'></div>
              <p>Or continue with</p>
              <div className='bg-slate-500 size-0.5 w-20 h-0.5'></div>
            </div>
            <div className='my-2'>
              <div className='flex justify-evenly gap-2'>
                <button className='border border-zinc-500  rounded-md   text-slate-800 fill-none px-4 flex justify-center gap-2 items-center py-2'>
                  <FcGoogle className='size-4' />
                  Google
                </button>
                <button className='rounded-md  bg-black text-white px-4 flex justify-center items-center gap-2 py-2'
                >
                  <FaApple className=' size-4 ' />
                  Apple
                </button>
                <button className='rounded-md  bg-black text-white px-4 flex justify-center items-center gap-2 py-2'
                >
                  <FaDiscord  className='size-4'/>
                  Discord
                </button>
              </div>
            </div>

            <div className='gap-6 text-stone-700'> 
              <div className='gap-2 flex  justify-center items-center'>
                <input type='Email' placeholder='Enter your email' id='email' className='border border-zinc-300 m-2 rounded-md h-10 w-full p-2 text-sm' />
              </div>
              <div className='gap-2 flex  justify-center items-center'>
                <input type='password' placeholder='Enter your password' id='password' className='border border-zinc-300 m-2 rounded-md h-10 w-full p-2 text-left text-sm' />
              </div>
            </div>
            <div className='gap-2 flex justify-center  items-center '>
            <button className='border border-zinc-500 m-2 h-10 w-full rounded-md p-2 bg-blue-500 text-white border-none'>Log in</button>
            </div>
            <p className='mt-3'><Link to='/SignUp'  className='text-blue-500  underline' >Create one</Link></p>
            
          </form>
        </div>

      </div>

    </div>

  )
}

SignIn.propTypes = {
  closing: PropTypes.func.isRequired,
}

export default SignIn