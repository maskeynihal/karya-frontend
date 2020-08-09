export default {
  name: {
    required: true,
    validator: {
      func: (value) => /^[a-z A-Z]+$/.test(value),
      error: 'Enter valid name'
    }
  },
  email: {
    required: true,
    validator: {
      func: (value) =>
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value
        ),
      error: 'Enter valid email'
    }
  },
  password: {
    required: true,
    validator: {
      func: (value) => /^([a-zA-Z0-9@*#]{8,15})$/.test(value),
      error: 'Enter strong password'
    }
  }
};
