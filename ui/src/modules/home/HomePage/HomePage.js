import React from 'react';

import { Redirect } from "react-router-dom";

import LoginPage from '../LoginPage';

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};


const HomePage = () => {
  if (fakeAuth.isAuthenticated) {
    return (
      <Redirect to="/board" />
    )
  }

  return (<Redirect to="/login" />);
};
