import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import { BoardPage } from "../modules/board";
import { HomePage, LoginPage, RegistrationPage } from '../modules/home';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route> 
        <Route exact path="/register">
          <RegistrationPage />
        </Route> 
        <Route exact path="/board">
          <BoardPage />
        </Route> 
      </Switch>
    </div>
  );
}

export default App;
