import React from 'react'
import PropTypes from 'prop-types';
import { SignIn } from '@clerk/clerk-react';
import useAuth from '../hooks/Auth';



const SignInPage = () => {
  const { handleToken, error} = useAuth();

  const handleSignIn = async (session) => {
    if (session) {
      try {

        const token = await session.getToken();
        await handleToken(token);
      } catch (err) {
        console.error("Error getting token", err.message);
      }
    }

  };


  return (
    <div className='  w-full bg-white bg-opacity-90 flex justify-center items-center ' >
      <div className='flex  flex-col justify-center items-center py-36 px-20 border w-full'>
        <h1 className='text-[36px] font-black-900 font-[{style.interFont}]'>Welcome back!</h1>
        <div className='w-full mt-4 flex justify-center'>
          <SignIn
            path="/SignIn"
            routing="path"
            signUpUrl="/Signup"
            afterSignInUrl="/"
            appearance={{
              variables: {
                // Customize colors, fonts, etc. here
              },
            }}
            onSignIn={handleSignIn} 
          />
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>

    </div>

  )
}

SignIn.propTypes = {
  closing: PropTypes.func,
}

export default SignInPage