import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SingIn';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import './App.css';
import App from "./App";

function RouterApp() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <PublicRoute restricted={false} component={Home} path="/" exact />
          <PublicRoute restricted={true} component={SignIn} path="/signin" exact />
          <PrivateRoute component={App} path="/dashboard" exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default RouterApp;
