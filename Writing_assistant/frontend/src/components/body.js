import React from 'react';
import { FaStar } from 'react-icons/fa';
import { TbWriting } from "react-icons/tb";
import { SiRoamresearch } from "react-icons/si";
import { FaEnvelope } from "react-icons/fa";
import CustomCorousel from './custom_corousel';
import Stars from './stars';

const Body = () => {
  // SVG Data URL for FaStar
  // const  = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8...'; // SVG Data URL for FaStar
  return (
    <div className='flex flex-col my-6 mx-4 h-full'>
      <div>
        <Stars />
      </div>
      <div>
        <form className='flex items-center justify-center my-12 mx-40'>
          <input
            type='text'
            placeholder='Enter your text here'
            className='p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#CCBBBB] text-black/80 focus:border-transparent flex-grow'
          />
          <button className='bg-blue-500 text-white rounded-md hover:bg-blue-600 p-2'>
            Analyze
          </button>
        </form>
      </div>

      <div className='flex flex-col items-center justify-center'>
        <p>Intelligent writing assistant helps with ...</p>
        <div className='flex items-center justify-center space-x-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2.5}
            stroke='currentColor'
            className='w-12 h-12'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
            />
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2.5}
            stroke='currentColor'
            className='w-12 h-12'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
            />
          </svg>
        </div>
      </div>

      <div className='flex items-center justify-evenly w-fit h-20 m-8 text-black/70 gap-4 '>
        <div className='relative bg-[#CCBBBB] my-12 rounded-md h-36 p-4 flex flex-col items-center justify-center'>
          <FaEnvelope className='size-8 absolute top-2 right-4  ' />

          <h1 className='text-lg items-center justify-center font-bold'>Communication</h1>
          <p className='text-start content-fit pt-2'>Streamline your communication with intelligent, precise, and effective writing.</p>
        </div>
        <div className='relative bg-[#CCBBBB] my-12 rounded-md h-36 p-4 flex flex-col items-center justify-center'>
          <TbWriting className='size-8 absolute top-2 right-4  ' />
          <h1 className='text-lg items-center justify-center font-bold'>Writing</h1>
          <p className='text-start content-fit pt-2'>Effortlessly craft compelling content with our assistant for clear, resonant messages.</p>
        </div>
        <div className='relative bg-[#CCBBBB] my-12 rounded-md h-36 p-4 flex flex-col items-center justify-center'>
          <SiRoamresearch className='size-8 absolute top-2 right-4  ' />
          <h1 className='text-lg items-center justify-center font-bold'>Research</h1>
          <p className='text-start content-fit pt-2'>Unlock insights and enhance content with our precise writing assistant.</p>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center my-6 font-extrabold text-4xl'>
        <h2>Powerful tools to transform your work</h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 mx-24 justify-center items-center'>
        <div className='bg-[#CCBBBB]  rounded-md h-32 flex flex-col items-center justify-center'>
          <h3 className='text-3xl content-start p-2'>Explain Like I’m 5</h3>
          <p className='text-xl p-4 text-start'>Take complex topic and simplify it.</p>
        </div>
        <div className='bg-[#CCBBBB] my-4 rounded-md h-32 flex flex-col items-center justify-center'>
          <h3 className='text-3xl content-start p-2'>Magic Editor</h3>
          <p className='text-xl p-4 text-start '>Edit a document or message to improve it’s tone and clarity. </p>
        </div>
        <div className='bg-[#CCBBBB] my-4 rounded-md h-32 flex flex-col items-center justify-center'>
          <h3 className='text-3xl content-start p-2'>AI Writer</h3>
          <p className='text-xl text-start p-4'>Use AI to write content on any topic</p>
        </div>
        <div className='bg-[#CCBBBB] my-4 rounded-md h-32 flex flex-col items-center justify-center'>
          <h3 className='text-3xl content-start p-2'>Scholar AI</h3>
          <p className='text-xl p-4 text-start '>Find articles to fulfill your research  or writing task.</p>
        </div>

      </div>

      <div className='flex flex-col items-center justify-center my-6 font-mono text-4xl'>
        <h2>Media and Our Story</h2>
      </div>
      <div>
      <CustomCorousel />
      </div>

    </div>
  );
}

export default Body;
