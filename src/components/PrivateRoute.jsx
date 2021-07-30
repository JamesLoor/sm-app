/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

/*
    |￣￣￣￣￣
    | // TODO: Improve this
    |＿＿＿_
(\__/)||
(•ㅅ•)||
/  づ
*/

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector((store) => store.auth.token)
  return (
    <Route
      {...rest}
      render={(props) =>
        auth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  )
}

PrivateRoute.prpTypes = {
  Component: PropTypes.node.isRequired
}

export default PrivateRoute
