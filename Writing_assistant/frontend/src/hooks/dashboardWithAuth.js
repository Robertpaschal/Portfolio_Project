import React from 'react';
import { Navigate } from 'react-router-dom'; 
import { useAuth } from '../hooks/dashboardAuthStatus';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated === null) {
      return <div>Loading...</div>; // Or a spinner while checking authentication status
    }

    if (!isAuthenticated) {
      return <Navigate to="/signin" />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
