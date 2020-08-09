import http from 'Utils/http';

export default async ({ url, method }, params) => {
  console.log(url);
  try {
    const { data } = await http({
      url: url,
      method: method,
      data: params
    });

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
