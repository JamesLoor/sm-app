import { loginService } from "../services/auth"
import { getName } from "../services/auth"

// Constants

const initialState = {
  isLogged: false,
  isLoading: false,
  isLoginFailed: false,
  userToken: null,
  nameLastname: null
}

const LOGIN_SUCCES = 'LOGIN_SUCCES'
const LOGIN_ERROR = 'LOGIN_ERROR'
const LOGIN_LOADING = 'LOGIN_LOADING'
const LOGOUT = 'LOGOUT'
const USER_UNDEFINED = 'USER_UNDEFINED'
const USER_FIND = 'USER_FIND'

// Reducers

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      return {...state, isLoading: true}
    case LOGIN_ERROR:
      return {...initialState, isLoginFailed: true}
    case LOGIN_SUCCES:
      return {...state, isLoading: false, isLogged: true, userToken: payload}
    case LOGOUT:
      return {...initialState}
    default:
      return state
  }
}

export const getNameReducer = (state = initialState, { type, nameLastname }) => {
  if (type === USER_FIND) {
    return { ...state, nameLastname }
  } else {
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
  } catch (error) {
    dispatch({
      type: LOGIN_ERROR,
    })
  }
}

export const getUser = (userToken) => async (dispatch) => {
  try {
    if (userToken) {
      const response = await getName(userToken)
      const { name, lastname } = response.data.message
      dispatch({
        type: USER_FIND,
        nameLastname: name + ' ' + lastname
      })
    } else {
      dispatch({
        type: USER_UNDEFINED
      })
    }
  } catch (err) {
    dispatch({
      type: USER_UNDEFINED
    })
  }
}

export const logoutUser = () => (dispatch) => {
  dispatch({
    type: LOGOUT
  })
}