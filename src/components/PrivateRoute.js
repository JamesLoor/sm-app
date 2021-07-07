import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ children, ...rest }) => {
  let auth = localStorage.getItem('Token');
  return (
    <Route {...rest} render={({ location }) =>
        auth
          ? children
          : <Redirect to={{ pathname: "/login", state: { from: location } }}/>
      }
    />
  )
}