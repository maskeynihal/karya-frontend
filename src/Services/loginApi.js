import http from 'Utils/http';
import { LOGIN_URL } from 'Constants/api';
export default async ({ email, password }) => {
  try {
    const { data } = await http.post(LOGIN_URL, { email, password });

    return {
      response: data,
      error: false
    };
  } catch (error) {
    if (!error.response) {
      return {
        response: {
          message: 'Network Error'
        },
        error: true
      };
    }

    return {
      response: error.response.data,
      error: true
    };
  }
};
