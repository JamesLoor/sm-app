/* eslint-disable no-underscore-dangle */
/* eslint-disable no-case-declarations */
// Constants
const initialState = {
  patientList: [],
  patientListByName: [],
  patientObtainedById: null,
  isLoading: false,
  amountPatientToGet: null,
  numberPages: null
}

const GET_PATIENT_LIST_SUCCESS = 'GET_PATIENT_LIST_SUCCESS'
const GET_PATIENT_LIST_ERROR = 'GET_PATIENT_LIST_ERROR'
const GET_PATIENT_LIST_LOADING = 'GET_PATIENT_LIST_LOADING'

const SET_PATIENT_LIST_BY_NAME = 'SET_PATIENT_LIST_BY_NAME'

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

export const patientReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PATIENT_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        patientList: [...payload.patients],
        numberPages: payload.numberPages
      }
    case GET_PATIENT_LIST_ERROR:
      return { ...initialState }
    case GET_PATIENT_LIST_LOADING:
      return { ...state, isLoading: true }
    case SET_PATIENT_LIST_BY_NAME:
      const patientListByName = state.patientList.filter((patient) =>
        patient.name.toLowerCase().includes(payload.toLowerCase())
      )
      return { ...state, patientListByName }

    case GET_PATIENT_SUCCESS:
      return { ...state, patientObtainedById: { ...payload } }
    case GET_PATIENT_ERROR:
      return { ...state }
    case GET_PATIENT_LOADING:
      return { ...state, isLoading: true }

    case POST_PATIENT_SUCCESS:
      return { ...state, patientList: [...state.patientList, payload] }
    case POST_PATIENT_ERROR:
      return { ...state }
    case POST_PATIENT_LOADING:
      return { ...state, isLoading: true }

    case DELETE_PATIENT_SUCCESS:
      const filteredPatientList = state.patientList.filter(
        (patient) => patient._id !== payload
      )
      return { ...state, patientList: filteredPatientList }
    case DELETE_PATIENT_ERROR:
      return { ...state }
    case DELETE_PATIENT_LOADING:
      return { ...state }

    case UPDATE_PATIENT_SUCCESS:
      return { ...state }
    case UPDATE_PATIENT_ERROR:
      return { ...state }
    case UPDATE_PATIENT_LOADING:
      return { ...state, isLoading: true }

    default:
      return state
  }
}

export const actionGetPatientList = {
  success: (patientList) => {
    return {
      type: GET_PATIENT_LIST_SUCCESS,
      payload: patientList
    }
  },
  error: () => {
    return {
      type: GET_PATIENT_LIST_ERROR
    }
  },
  loading: () => {
    return {
      type: GET_PATIENT_LIST_LOADING
    }
  }
}

export const actionGetPatient = {
  success: (patient) => {
    return {
      type: GET_PATIENT_SUCCESS,
      payload: patient
    }
  },
  error: () => {
    return {
      type: GET_PATIENT_ERROR
    }
  },
  loading: () => {
    return {
      type: GET_PATIENT_LOADING
    }
  }
}

export const actionPostPatient = {
  success: (newPatient) => {
    return {
      type: POST_PATIENT_SUCCESS,
      payload: newPatient
    }
  },
  error: () => {
    return {
      type: POST_PATIENT_ERROR
    }
  },
  loading: () => {
    return {
      type: POST_PATIENT_LOADING
    }
  }
}

export const actionDeletePatient = {
  success: (id) => {
    return {
      type: DELETE_PATIENT_SUCCESS,
      payload: id
    }
  },
  error: () => {
    return {
      type: DELETE_PATIENT_ERROR
    }
  },
  loading: () => {
    return {
      type: DELETE_PATIENT_LOADING
    }
  }
}

export const actionFilteredPatientByName = (nameToSearch) => {
  return {
    type: SET_PATIENT_LIST_BY_NAME,
    payload: nameToSearch
  }
}
