import React, { useEffect } from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";
import PropTypes from 'prop-types';
import { SignUp, useSignUp, useClerk } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';




const SignUpPage = () => {
  // const { client } = useClerk();
  const {user} = useClerk();
  const navigate = useNavigate();
  

  useEffect(() => {
    const handleSignUpComplete = async (user) => {
      if (user) {
        try {
          await fetch('/api/store-user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              userId: user.id,
              email: user.primaryEmailAddress?.emailAddress,
              username: user.username,
            }),
          });
          navigate('/SignIn', { state: { email: user.primaryEmailAddress?.emailAddress } });
        } catch (error) {
          console.error('Error storing user data:', error);
        }

      }
    };
    // const signUpListener = client.addListener('onSignUpComplete', handleSignUpComplete);

    // return () => {
    //   client.removeListener('onSignUpComplete', signUpListener);
    // }
    handleSignUpComplete();
  }, [user, navigate]);

  return (
    <div className=' top-0 left-0 w-full bg-white bg-opacity-70 flex justify-center items-center overflow-hidden m-0' >
      <div className='flex  flex-col justify-center items-center py-36 px-20 border w-full'>
        <button className=' absolute  top-20 right-40 m-4 p-2 '
        //  onClick={() => close('isSignUpOpen')}
         >
          <IoCloseCircleOutline className='size-10 opacity-40' /></button>
        <h1 className='text-[36px] font-black-900 '>Register for  FREE</h1>
        <p className=''>and start using Intelligent Writing Assistant </p>
        <p>at a glance!</p>
        <div>
          <div className='w-full'>

            <SignUp path="/SignUp" routing="path" signInUrl="/SignIn" />
          </div>
        </div>

      </div>

    </div>

  )
}

SignUp.propTypes = {
  closing: PropTypes.func,
}

export default SignUpPage