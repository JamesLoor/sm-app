import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'

export const PrivateRoute = ({ component: Component, ...rest }) => {
  let auth = useSelector(store => store.auth.token)
  return (
    <Route {...rest} render={(props) =>
        auth
          ? <Component {...props} />
          : <Redirect to={{ pathname: '/login', state: { from: props.location } }}/>
      }
    />
  )
}