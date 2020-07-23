import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";

import { login } from "../actions";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    history.push('/board');
  };

  return (
    <div>
      <span>You must login to view this page</span>
      <div>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Login</button>
        </form>
        <Link to="/register">Register</Link>
      </div>
    </div>
  )
};


export default LoginPage;
