export const REGISTER = 'REGISTER';

export const register = (user) => {
  return {
    type: REGISTER,
    payload: user
  };
};
