import React, { useState } from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";
import PropTypes from 'prop-types';
import { SignUp } from '@clerk/clerk-react';
// import { signupUser } from '../services/api';
// import { useNavigate } from 'react-router-dom';

const SignUpPage = ({ closing }) => {
  // const [email, setEmail] = useState('');
  // const [full_name, setFullName] = useState('');
  // const [password, setPassword] = useState('');
  // const [error, setError] = useState(null);
  // const [useManualLogin, setUseManualLogin] = useState(true);
  // const navigate = useNavigate();

  // const handleManualSignUp = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await signupUser(email, full_name, password);
  //     navigate('/');
  //   } catch (err) {
  //     setError('Signup failed. Please check your credentials and try again.');
  //   }
  // };

  // const toggleLoginMethod = () => {
  //   setUseManualLogin(!useManualLogin);
  // };

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
              <SignUp
                path="/SignUp"
                routing="path"
                signInUrl="/SignIn"
              />
            
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
