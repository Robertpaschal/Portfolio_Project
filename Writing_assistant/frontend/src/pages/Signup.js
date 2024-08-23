import React, { useState } from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";
import PropTypes from 'prop-types';
import { SignUp } from '@clerk/clerk-react';
import { signupUser } from '../services/api';
import { useNavigate } from 'react-router-dom';

const SignUpPage = ({ closing }) => {
  const [email, setEmail] = useState('');
  const [full_name, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [useManualLogin, setUseManualLogin] = useState(true);
  const navigate = useNavigate();

  const handleManualSignUp = async (e) => {
    e.preventDefault();
    try {
      await signupUser(email, full_name, password);
      navigate('/');
    } catch (err) {
      setError('Signup failed. Please check your credentials and try again.');
    }
  };

  const toggleLoginMethod = () => {
    setUseManualLogin(!useManualLogin);
  };

  return (
    <div className='top-0 left-0 w-full bg-white bg-opacity-90 flex justify-center items-center overflow-hidden m-0'>
      <div className='flex flex-col justify-center items-center py-36 px-20 border w-full'>
        {closing && (
          <button className='absolute top-20 right-40 m-4 p-2' onClick={closing} aria-label='Close'>
            <IoCloseCircleOutline className='size-10 opacity-40' />
          </button>
        )}
        <h1 className='text-[36px] font-black-900'>Register for FREE</h1>
        <p className=''>and start using Intelligent Writing Assistant</p>
        <p>at a glance!</p>
        <div>
          <div className='w-full mt-4 flex justify-center'>
            {useManualLogin ? (
              <form onSubmit={handleManualSignUp} className='gap-6 text-stone-700'>
                <div className='flex justify-center items-center'>
                  <input
                    type='text'
                    placeholder='Enter your Fullname'
                    value={full_name}
                    id='fullname'
                    onChange={(e) => setFullName(e.target.value)}
                    className='border border-zinc-300 m-2 h-10 w-full rounded-md p-2 text-sm'
                  />
                </div>
                <div className='gap-2 flex justify-center items-center'>
                  <input
                    type='email'
                    placeholder='Enter your email'
                    value={email}
                    id='email'
                    onChange={(e) => setEmail(e.target.value)}
                    className='border border-zinc-300 m-2 rounded-md h-10 w-full p-2 text-sm'
                  />
                </div>
                <div className='gap-2 flex justify-center items-center'>
                  <input
                    type='password'
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id='password'
                    className='border border-zinc-300 m-2 rounded-md h-10 w-full p-2 text-left text-sm'
                  />
                </div>
                <div className='gap-2 flex justify-center items-center'>
                  <button
                    type='submit'
                    className='border border-zinc-500 m-2 h-10 w-full rounded-md p-2 bg-blue-500 text-white border-none'
                  >
                    Register
                  </button>
                </div>
                {error && <p className='text-red-500'>{error}</p>}
              </form>
            ) : (
              <SignUp
                path="/SignUp"
                routing="path"
                signInUrl="/SignIn"
              />
            )}
          </div>
          <div className='mt-4 flex justify-center'>
            <button onClick={toggleLoginMethod} className='text-blue-500'>
              {useManualLogin ? 'Use Social Login' : 'Use Manual Signup'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

SignUpPage.propTypes = {
  closing: PropTypes.func,
};

export default SignUpPage;
