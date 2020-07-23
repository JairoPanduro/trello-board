import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { BoardPage } from "../modules/board";
import { LoginPage, RegistrationPage } from '../modules/home';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <HomePage />
          <Route path="/login">
            <LoginPage />
          </Route> 
          <Route path="/register">
            <RegistrationPage />
          </Route> 
          <Route path="/board">
            <BoardPage />
          </Route> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
