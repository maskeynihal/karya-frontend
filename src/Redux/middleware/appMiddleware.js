import { authActions } from 'Redux/actions';
import { apiRequest } from 'Redux/actions/apiActions';
import { LOGIN_URL } from 'Constants/api';

export default () => (next) => (action) => {
  next(action);
  if (!action) {
    return;
  }
  switch (action.type) {
    case authActions.LOGIN: {
      next(
        apiRequest({
          url: LOGIN_URL,
          method: 'POST',
          data: action.payload
        })
      );
      break;
    }
    default:
      break;
  }
};
