import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Index from './containers/Home';
import SignIn from './containers/SingIn';
import PrivateRoute from './containers/PrivateRoute';
import PublicRoute from './containers/PublicRoute';
import './App.css';
import App from "./App";
import TaskStore from './models/TaskStore';

//debugging tools
import { onPatch } from 'mobx-state-tree';
import makeInspectable from 'mobx-devtools-mst';
onPatch(store, patch => {
  console.log(patch)
})
const store = TaskStore.create({})
makeInspectable(store);

function RouterApp() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <PublicRoute restricted={true} component={Index} path="/" exact />
          <PublicRoute restricted={true} component={SignIn} path="/signin" exact />
          <PrivateRoute store={store} component={App} path="/dashboard" exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default RouterApp;
