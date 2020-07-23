import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";

import { register } from "../actions";

const RegistrationPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    await register(email, password);
    history.push('/login');
  };

  const setEmailInput = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
    <span>Registration Page</span>
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Register</button>
      </form>
      <Link to="/login">Login</Link>
    </div>
  </div>
  )
};


export default RegistrationPage;
