import { loginService } from '../services/auth'

// Constants

const initialState = {
  token: null,
  isAuth: false,
  isAuthFailed: false,
  isLoading: false,
}

const AUTH_LOADING = 'AUTH_LOADING'
const AUTH_SUCCES = 'AUTH_SUCCES'
const AUTH_ERROR = 'AUTH_ERROR'
const AUTH_LOGOUT = 'AUTH_LOGOUT'


export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_LOADING:
      return {...state, isLoading: true}
    case AUTH_SUCCES:
      return {...state, isLoading: false, isAuth: true, token: payload}
    case AUTH_ERROR:
      return {...initialState, isAuthFailed: true}
    case AUTH_LOGOUT:
      return {...initialState}

    default:
      return state
  }
}

// Actions

export const loginUser = (userCredentials) => async (dispatch) => {
  dispatch({
    type: AUTH_LOADING
  })
  try {
    const result = await loginService(userCredentials)
    const { token } = result.data.message
    dispatch({
      type: AUTH_SUCCES,
      payload: token
    })
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    })
  }
}

export const logoutUser = () => (dispatch) => {
  dispatch({
    type: AUTH_LOGOUT
  })
}