import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Index from './containers/Home';
import SignIn from './containers/SingIn';
import PrivateRoute from './containers/PrivateRoute';
import PublicRoute from './containers/PublicRoute';
import './App.css';
import App from "./App";


function RouterApp() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <PublicRoute restricted={true} component={Index} path="/" exact />
          <PublicRoute restricted={true} component={SignIn} path="/signin" exact />
          <PrivateRoute component={App} path="/dashboard" exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default RouterApp;
