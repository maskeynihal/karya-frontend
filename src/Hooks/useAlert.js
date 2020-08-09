import { useState } from 'react';

const useAlert = (initialState = {}) => {
  const [alert, setAlert] = useState(initialState);

  const handleAlert = ({ message, ...props }) => {
    setAlert({ ...props, message });
  };

  return {
    alert,
    handleAlert
  };
};

export default useAlert;
