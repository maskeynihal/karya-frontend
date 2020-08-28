import { useState } from 'react';

const INITIAL_STATE = window.localStorage.getItem('karyaToken');
const useAuthHandler = (initialState = INITIAL_STATE) => {
  const [authToken, setAuthToken] = useState(initialState);

  const handleLogin = (token) => {
    window.localStorage.setItem('karyaToken', token);
  };
};
