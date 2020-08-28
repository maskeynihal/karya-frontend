import React from 'react';

import { LoginForm } from 'Components/container/login';

/**
 * Register Page.
 */
function LoginPage() {
  return (
    <>
      <div className="row">
        <div className="col-6 mx-auto text-center mt-5">
          <h1>KARYA</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-6 mx-auto mt-5 pt-5">
          <LoginForm></LoginForm>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
