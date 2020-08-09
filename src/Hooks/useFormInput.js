import { useState } from 'react';

const useFormInput = (initialState) => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    const { event } = e;

    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return {
    values,
    handleChange
  };
};

export default useFormInput;
