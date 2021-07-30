import { getFullName } from '../services/auth'

const initialState = {
  fullName: null,
  isLoading: false,
  isFailed: false
}

const GET_FULLNAME_LOADING = 'GET_FULLNAME_LOADING'
const GET_FULLNAME_SUCCES = 'GET_FULLNAME_SUCCES'
const GET_FULLNAME_ERROR = 'GET_FULLNAME_ERROR'

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_FULLNAME_LOADING:
      return { ...state, isLoading: true }
    case GET_FULLNAME_SUCCES:
      return { ...state, isLoading: false, fullName: payload }
    case GET_FULLNAME_ERROR:
      return { ...initialState, isFailed: true }

    default:
      return state
  }
}

export const getFullNameUser = (token) => async (dispatch) => {
  dispatch({
    type: GET_FULLNAME_LOADING
  })
  try {
    if (token) {
      const response = await getFullName(token)
      const { name, lastname } = response.data.message
      dispatch({
        type: GET_FULLNAME_SUCCES,
        payload: `${name} ${lastname}`
      })
    } else {
      dispatch({
        type: GET_FULLNAME_ERROR
      })
    }
  } catch (err) {
    dispatch({
      type: GET_FULLNAME_ERROR
    })
  }
}
