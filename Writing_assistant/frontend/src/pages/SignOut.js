import React from 'react';
import { useAuth } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import { logoutUser as backendLogoutUser } from '../services/api';

const SignOutButton = () => {
    // Get the signOut function from useAuth
    const { signOut, isSignedIn } = useAuth();
    const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
        if (isSignedIn){
            // Sign out the user from Clerk
            await signOut();
        }
        // Sign out the user from the backend and remove token from Redis
        await backendLogoutUser();
        navigate('/signin'); 
    } catch (err) {
        console.error('Error signing out:', err);
    }
  };

  return (
    <button onClick={handleSignOut}>
      Sign Out
    </button>
  );
};

export default SignOutButton;
