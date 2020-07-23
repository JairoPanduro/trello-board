import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link, useHistory } from "react-router-dom";

import { login } from "../actions";

const LoginPage = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    const loggedIn = await props.login(email, password);
    if (loggedIn) {
      history.push('/board');
    }
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
            type="password"
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


const mapDispatchToProps = {
  login
}

export default compose(
  connect(
    null,
    mapDispatchToProps,
  )
)(LoginPage);
