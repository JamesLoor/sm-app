import { useSelector, useDispatch } from 'react-redux'
import { actionAuthLogin, actionAuthLogout } from '../redux/authDucks'
import { loginService } from '../services/auth'

const useAuth = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector((store) => store.auth.token)
  const isAuthFailed = useSelector((store) => store.auth.isAuthFailed)
  const isAuthLoading = useSelector((store) => store.auth.isLoading)
  const tokenJWT = useSelector((store) => store.auth.token)

  const loginUser = async (user) => {
    dispatch(actionAuthLogin.loading())
    try {
      const result = await loginService(user)
      const { token } = result.data.message
      dispatch(actionAuthLogin.success(token))
    } catch (error) {
      dispatch(actionAuthLogin.error())
    }
  }

  const logoutUser = () => {
    dispatch(actionAuthLogout())
  }

  return {
    isAuth,
    isAuthFailed,
    isAuthLoading,
    loginUser,
    logoutUser,
    tokenJWT
  }
}

export default useAuth
