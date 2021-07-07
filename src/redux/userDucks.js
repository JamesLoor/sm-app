import { loginService } from "../services/auth"

// Constants

const initialState = {
  isLogged: false,
  isLoading: false
}

const LOGIN_SUCCES = 'LOGIN_SUCCES'
const LOGIN_ERROR = 'LOGIN_ERROR'
const LOGIN_LOADING = 'LOGIN_LOADING'

// const LOGOUT_SUCCES = 'LOGOUT_SUCCES'
// const LOGOUT_ERROR = 'LOGOUT_ERROR'
// const LOGOUT_LOADING = 'LOGOUT_LOADING'

// Reducers

export default function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOGIN_LOADING:
      return {...state, isLoading: true}
    case LOGIN_ERROR:
      return {...initialState}
    case LOGIN_SUCCES:
      return {...state, isLoading: false, isLogged: true, user: payload}

    default:
      return state
  }
}

// Actions

export const loginUser = (userCredentials) => async (dispatch) => {
  dispatch({
    type: LOGIN_LOADING
  })
  try {
    const result = await loginService(userCredentials)
    const userToken = result.data.message.token
    dispatch({
      type: LOGIN_SUCCES,
      payload: userToken
    })
    localStorage.setItem('token', userToken)
  } catch (error) {
    dispatch({
      type: LOGIN_ERROR,
    })
  }
}





