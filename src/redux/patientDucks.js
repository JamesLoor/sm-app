import { getPatients, getPatient, savePatient, deletePatient } from '../services/patient'

// Constants

const initialState = {
  patientList: [],
  patientListByName: [],
  patientObtainedById: null,
  isLoading: false,
  amountPatientToGet: null,
  numberPages: null
}

const GET_PATIENT_LIST_SUCCESS = 'GET_PATIENT_LIST_SUCCES'
const GET_PATIENT_LIST_ERROR = 'GET_PATIENT_LIST_ERROR'
const GET_PATIENT_LIST_LOADING = 'GET_PATIENT_LIST_LOADING'

const GET_PATIENT_SUCCESS = 'GET_PATIENT_SUCCESS'
const GET_PATIENT_ERROR = 'GET_PATIENT_ERROR'
const GET_PATIENT_LOADING = 'GET_PATIENT_LOADING'

const POST_PATIENT_SUCCESS = 'POST_PATIENT_SUCCES'
const POST_PATIENT_ERROR = 'POST_PATIENT_ERROR'
const POST_PATIENT_LOADING = 'POST_PATIENT_LOADING'

const DELETE_PATIENT_SUCCESS = 'DELETE_PATIENT_SUCCES'
const DELETE_PATIENT_ERROR = 'DELETE_PATIENT_ERROR'
const DELETE_PATIENT_LOADING = 'DELETE_PATIENT_LOADING'

const UPDATE_PATIENT_SUCCESS = 'UPDATE_PATIENT_SUCCES'
const UPDATE_PATIENT_ERROR = 'UPDATE_PATIENT_ERROR'
const UPDATE_PATIENT_LOADING = 'UPDATE_PATIENT_LOADING'

const SET_PATIENT_LIST_BY_NAME = 'SET_PATIENT_LIST_BY_NAME'

// Reducer

export const patientReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PATIENT_LIST_SUCCESS:
      return {...state, isLoading: false, patientList: [...payload.patients], numberPages: payload.numberPages}
    case GET_PATIENT_LIST_ERROR:
      return {...initialState}
    case GET_PATIENT_LIST_LOADING:
      return {...state, isLoading: true}

    case GET_PATIENT_SUCCESS:
      return {...state, patientObtainedById: {...payload}}
    case GET_PATIENT_ERROR:
      return {...state}
    case GET_PATIENT_LOADING:
      return {...state, isLoading: true}

    case POST_PATIENT_SUCCESS:
      return {...state, patientList: [...state.patientList, payload]}
    case POST_PATIENT_ERROR:
      return {...state}
    case POST_PATIENT_LOADING:
      return {...state, isLoading: true}

    case DELETE_PATIENT_SUCCESS:
      const filteredPatientList = state.patientList.filter(patient => patient._id !== payload)
      return {...state, patientList: filteredPatientList}
    case DELETE_PATIENT_ERROR:
      return {...state}
    case DELETE_PATIENT_LOADING:
      return {...state}

    case UPDATE_PATIENT_SUCCESS:
      return {...state}
    case UPDATE_PATIENT_ERROR:
      return {...state}
    case UPDATE_PATIENT_LOADING:
      return {...state, isLoading: true}

    case SET_PATIENT_LIST_BY_NAME:
      const patientListByName = state.patientList.filter(patient => patient.name.toLowerCase().includes(payload.toLowerCase()))
      return {...state, patientListByName}

    default:
      return state
  }
}

// Actions

export const getPatientList = (token, amount, page) => async (dispatch) => {
  dispatch({
    type: GET_PATIENT_LIST_LOADING
  })
  try {
    if(token) {
      const result = await getPatients(token, amount, page);
      const patientList = result.data.message
      dispatch({
        type: GET_PATIENT_LIST_SUCCESS,
        payload: patientList
      })
    } else {
      dispatch({
        type: GET_PATIENT_LIST_ERROR
      })
    }
  } catch (error) {
    dispatch({
      type: GET_PATIENT_LIST_ERROR
    })
  }
}

export const getPatientById = (token, id) => async (dispatch) => {
  dispatch({
    type: GET_PATIENT_LOADING
  })
  try {
    if(token) {
      const result = await getPatient(token, id)
      const { patientID } = result.data.message.patient
      dispatch({
        type: GET_PATIENT_SUCCESS,
        payload: patientID
      })
    } else {
      dispatch({
        type: GET_PATIENT_ERROR
      })
    }
  } catch (error) {
    dispatch({
      type: GET_PATIENT_ERROR
    })
  }
}

export const saveNewPatient = (token, newPatient) => async (dispatch) => {
  dispatch({
    type: POST_PATIENT_LOADING
  })
  try {
    if(token) {
      const result = await savePatient(token, newPatient)
      const { patient } = result.data.message
      dispatch({
        type: POST_PATIENT_SUCCESS,
        payload: patient
      })
      return true
    } else {
      dispatch({
        type: POST_PATIENT_ERROR
      })
      return false
    }
  } catch (error) {
    console.log(error.message)
    dispatch({
      type: POST_PATIENT_ERROR
    })
    return false
  }
}

export const deletePatientById = (token, id) => async (dispatch) => {
  dispatch({
    type: DELETE_PATIENT_LOADING
  })
  try {
    if(token) {
      await deletePatient(token, id)
      dispatch({
        type: DELETE_PATIENT_SUCCESS,
        payload: id
      })
    } else {
      dispatch({
        type: DELETE_PATIENT_ERROR,
      })
    }
  } catch (e) {
    console.log(e)
    dispatch({
      type: DELETE_PATIENT_ERROR,
    })
  }
}

export const filteredPatientByName = (nameToSearch) => (dispatch) => {
  try {
    dispatch({
      type: SET_PATIENT_LIST_BY_NAME,
      payload: nameToSearch
    })
  } catch (error) {
    console.log(error)
  }
}