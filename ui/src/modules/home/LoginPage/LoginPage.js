import React from 'react';

import { login } from "../api";

const LoginPage = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <span>You must login to view this page</span>
      <div>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Email"
          />
          <input
            type="text"
            placeholder="Password"
          />
          <button>Login</button>
        </form>
        <Link to="/register">Register</Link>
      </div>
    </div>
  )
};


export default LoginPage;
