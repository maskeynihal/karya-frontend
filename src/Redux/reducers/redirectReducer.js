import { redirectActions } from 'Redux/actions';

export default (state = {}, action) => {
  switch (action.type) {
    case redirectActions.REDIRECT:
      return { redirectTo: action.payload };
    default:
      return state;
  }
};
