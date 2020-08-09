import http from 'Utils/http';
import { REGISTER_URL } from 'Constants/api';
export default async ({ name, email, password }) => {
  try {
    const { data } = await http.post(REGISTER_URL, { name, email, password });

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
