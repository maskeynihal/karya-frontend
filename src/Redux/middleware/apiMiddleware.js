import * as apiActions from 'Redux/actions/apiActions';
import loginApi from 'Services/loginApi';
import { LOGIN_URL, ADD_TODO_URL } from 'Constants/api';
import callApi from 'Services/callApi';

export default ({ dispatch }) => (next) => async (action) => {
  next(action);
  if (action.type === apiActions.API_REQUEST) {
    const { url, method, data } = action.meta;
    let dataFetch = {};
    let response = {};
    let error = false;

    try {
      console.log(url, ADD_TODO_URL, url === ADD_TODO_URL);
      switch (url) {
        case LOGIN_URL:
          dataFetch = await loginApi(data);
          break;
        case ADD_TODO_URL:
          dataFetch = await callApi(ADD_TODO_URL, data);
          break;
        default:
          break;
      }
      response = dataFetch.response;
      error = dataFetch.error;
      if (error) {
        dispatch(apiActions.apiError({ error: response }));
      } else {
        dispatch(apiActions.apiSuccess({ response }));
      }
    } catch (error) {
      dispatch(apiActions.apiError({ error: error.response }));
    }
  }
};
