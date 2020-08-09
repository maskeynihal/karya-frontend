export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';
export const API_ERROR = 'API_ERROR';
export const API_CANCEL = 'API_CANCEL';

export const apiRequest = ({ url, method, data }) => ({ type: API_REQUEST, meta: { url, method, data } });

export const cancelApiRequest = () => ({ type: API_CANCEL });

export const apiSuccess = ({ response }) => ({
  type: API_SUCCESS,
  payload: response
});

export const apiError = ({ error }) => ({
  type: API_ERROR,
  payload: error
});
