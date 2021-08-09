import { useSelector, useDispatch } from 'react-redux'
import { loginService } from '../services/auth'
import {
  actionAuthLoading,
  actionAuthError,
  actionAuthSucces,
  actionAuthLogout
} from '../redux/authDucks'

const useAuth = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector((store) => store.auth.token)
  const isAuthFailed = useSelector((store) => store.auth.isAuthFailed)
  const isAuthLoading = useSelector((store) => store.auth.isLoading)

  const loginUser = async (user) => {
    dispatch(actionAuthLoading())
    try {
      const result = await loginService(user)
      const { token } = result.data.message
      dispatch(actionAuthSucces(token))
    } catch (error) {
      dispatch(actionAuthError())
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
    logoutUser
  }
}

export default useAuth
