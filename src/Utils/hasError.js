export default (data) => {
  const keys = Object.keys(data);
  let error = false;

  for (let index = 0; index < keys.length; index++) {
    if (data[index]) {
      error = true;
      break;
    }
  }

  return error;
};
