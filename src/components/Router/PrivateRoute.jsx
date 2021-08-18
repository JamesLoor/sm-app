/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import useAuth from '../../hooks/useAuth'

/*
    |￣￣￣￣￣
    | // TODO: Improve this
    |＿＿＿_
(\__/)||
(•ㅅ•)||
/  づ
*/

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { tokenJWT } = useAuth()
  return (
    <Route
      {...rest}
      render={props =>
        tokenJWT ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  )
}

PrivateRoute.prpTypes = {
  Component: PropTypes.node.isRequired
}

export default PrivateRoute
