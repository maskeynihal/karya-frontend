import { useDispatch } from 'react-redux';
import { redirectActions } from 'Redux/actions';

/**
 * Hooks for redirect.
 */
const useRedirect = () => {
  const dispatch = useDispatch();

  const handleRedirect = (path) => {
    dispatch(redirectActions.redirect(path));
  };

  return {
    handleRedirect
  };
};

export default useRedirect;
