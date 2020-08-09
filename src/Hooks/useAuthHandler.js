import { useState } from 'react';

const INITIAL_STATE = window.localStorage.getItem('karyaAuthToken');
const useAuthHandler = (initialState = INITIAL_STATE) => {
  const [authToken, setAuthToken] = useState(initialState);

  const handleLogin = (token) => {
    window.localStorage.setItem('karyaAuthToken', token);
  };
};
