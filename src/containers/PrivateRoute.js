import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { isLogin } from '../utils';
import TaskStore from '../models/TaskStore';

//debugging tools
import { onPatch } from 'mobx-state-tree';
import makeInspectable from 'mobx-devtools-mst';

const store = TaskStore.create({})
makeInspectable(store);

onPatch(store, patch => {
  console.log(patch)
})

const PrivateRoute = ({component: Component, ...rest}) => {
  return (

    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route {...rest} render={props => (
      isLogin() ?
        <Provider store={store}><Component {...props} /></Provider>
        : <Redirect to="/signin" />
    )} />
  );
};

export default PrivateRoute;