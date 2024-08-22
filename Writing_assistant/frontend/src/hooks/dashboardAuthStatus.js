import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null for loading state

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch('/api/check-auth', {
          method: 'GET',
          credentials: 'include', // Include credentials if needed (e.g., cookies)
        });

        if (response.ok) {
          const data = await response.json();
          setIsAuthenticated(data.isAuthenticated); // Assume API returns { isAuthenticated: true/false }
        } else {
          setIsAuthenticated(false); // Authentication check failed
        }
      } catch (error) {
        setIsAuthenticated(false); // Error in API call
      }
    };

    checkAuth();
  }, []);

  return { isAuthenticated };
};
