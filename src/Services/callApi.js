import { useSelector } from 'react-redux';

import http from 'Utils/http';

export default async ({ url, method }, params) => {
  try {
    const { data } = await http({
      url: url,
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('karyaToken') || null
      },
      method: method,
      data: params
    });

    return {
      response: data,
      error: false
    };
  } catch (error) {
    if (!error.response) {
      throw {
        response: {
          message: 'Network Error'
        },
        error: true
      };
    }

    throw {
      response: { data: error.response.data, message: 'Error' },
      error: true
    };
  }
};
