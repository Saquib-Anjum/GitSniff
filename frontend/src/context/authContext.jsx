import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export const authContext = createContext();

export const useAuthContext = () => {
  return useContext(authContext);
};

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/auth/check`, { withCredentials: true });
        const data = res.data;  // no need for await here on res.data
        setAuthUser(data.user);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setLoading(false);  // important to set loading false
      }
    };

    checkUserLoggedIn();  // ✅ Actually call the function here
  }, []);

  return (
    <authContext.Provider value={{ authUser, setAuthUser, loading }}>
      {children}
    </authContext.Provider>
  );
};
