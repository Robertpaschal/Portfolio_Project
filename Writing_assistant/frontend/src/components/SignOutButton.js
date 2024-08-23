import React from 'react'
import { CgLogOut } from "react-icons/cg";
import { useClerk } from '@clerk/clerk-react';

const SignOutButton = () => {

  const { signOut } = useClerk();

  const handleSignOut = async () => {
    try {
      await signOut();
      window.location.href = '/';
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div onClick={handleSignOut} className='cursor-pointer'>
      <CgLogOut className='size-8 mt-20'/>
    </div>
  );
};

export default SignOutButton;