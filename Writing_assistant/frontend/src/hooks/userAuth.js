import { useState } from "react";
import axios from "axios";
import { useClerk } from "@clerk/clerk-react";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const { client } = useClerk(); // Access Clerk client to get user info

  const handleToken = async (token) => {
    try {
      const response = await axios.post("/api/auth/login", { token });
      setUserData(response.data.user);
      setIsAuthenticated(true);
    } catch (err) {
      setError("Invalid credetials, try again!", err.message);
    }
  };

  const logout = async () => {
    try {
      await client.signOut();
      setIsAuthenticated(false);
      setUserData(null);
    } catch (err) {
      setError(err.message);
    }
  };
  return { isAuthenticated, userData, error, handleToken, logout };

};

export default useAuth;