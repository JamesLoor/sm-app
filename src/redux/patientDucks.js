import { getPatients, savePatient } from '../services/patient'

// Constants

const initialState = {
  patientList: [],
  patientListByName: [],
  isLoading: false,
  isFailed: false,
  amountPatientToGet: null,
  numberPages: null
}

const GET_PATIENT_LIST_SUCCESS = 'GET_PATIENT_LIST_SUCCES'
const GET_PATIENT_LIST_ERROR = 'GET_PATIENT_LIST_ERROR'
const GET_PATIENT_LIST_LOADING = 'GET_PATIENT_LIST_LOADING'

const SET_PATIENT_LIST_BY_NAME = 'SET_PATIENT_LIST_BY_NAME'

const POST_NEW_PATIENT_SUCCESS = 'POST_NEW_PATIENT_SUCCES'
const POST_NEW_PATIENT_ERROR = 'POST_NEW_PATIENT_ERROR'
const POST_NEW_PATIENT_LOADING = 'POST_NEW_PATIENT_LOADING'

// Reducer

export const patientReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PATIENT_LIST_LOADING:
      return {...state, isLoading: true}
    case GET_PATIENT_LIST_SUCCESS:
      return {...state, isLoading: false, patientList: [...payload.patients], numberPages: payload.numberPages}
    case GET_PATIENT_LIST_ERROR:
      return {...initialState}

    case POST_NEW_PATIENT_SUCCESS:
      return state
    case POST_NEW_PATIENT_ERROR:
      return state
    case POST_NEW_PATIENT_LOADING:
      return state

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

export const saveNewPatient = (token, newPatient) => async (dispatch) => {
  dispatch({
    type: POST_NEW_PATIENT_LOADING
  })
  try {
    if(token) {
      const result = await savePatient(token, newPatient)
      const { patient } = await result.data.message
      // dispatch({
      //   type: POST_NEW_PATIENT_SUCCESS,
      //   payload: patientId
      // })
    } else {
      dispatch({
        type: POST_NEW_PATIENT_ERROR
      })
    }
  } catch (error) {
    dispatch({
      type: POST_NEW_PATIENT_ERROR
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

// export const getPatientByID = (token, id) => async (dispatch) => {
//   dispatch({
//     type: GET_PATIENT_LOADING
//   })
//   try {
//     if(token) {
//       const result = await getPatient(token, id)
//       const { patientId } = result.message.patient
//       dispatch({
//         type: GET_PATIENT_SUCCESS,
//         payload: patientId
//       })
//     } else {
//       dispatch({
//         type: GET_PATIENT_ERROR
//       })
//     }
//   } catch (error) {
//     dispatch({
//       type: GET_PATIENT_ERROR
//     })
//   }
// }