/* eslint-disable no-console */
import { useSelector, useDispatch } from 'react-redux'
import {
  getPatientListService,
  getPatientService,
  savePatientService,
  deletePatientService
} from '../services/patient'
import {
  actionGetPatient,
  actionPostPatient,
  actionDeletePatient,
  actionGetPatientList,
  actionFilteredPatientByName
} from '../redux/patientDucks'

const usePatient = () => {
  const dispatch = useDispatch()
  const patientList = useSelector(store => store.patient.patientList)
  const patientListByName = useSelector(
    store => store.patient.patientListByName
  )
  const patientObtainedById = useSelector(
    store => store.patient.patientObtainedById
  )
  const isLoading = useSelector(store => store.patient.isLoading)

  const getPatientList = async (token, amount, page) => {
    dispatch(actionGetPatientList.loading())
    try {
      if (token) {
        const result = await getPatientListService(token, amount, page)
        const patients = result.data.message
        dispatch(actionGetPatientList.success(patients))
      }
    } catch (e) {
      console.log(e)
      dispatch(actionGetPatientList.error())
    }
  }

  const getPatient = async (token, id) => {
    dispatch(actionGetPatient.loading())
    try {
      const result = await getPatientService(token, id)
      const { patient } = result.data.message
      dispatch(actionGetPatient.success(patient))
    } catch (e) {
      console.log(e)
      dispatch(actionGetPatient.error())
    }
  }

  const createPatient = async (token, newPatient) => {
    dispatch(actionPostPatient.loading())
    try {
      if (token) {
        const result = await savePatientService(token, newPatient)
        const { patient } = result.data.message
        dispatch(actionPostPatient.success(patient))
      }
    } catch (e) {
      console.log(e)
      dispatch(actionPostPatient.error())
    }
  }

  const deletePatient = async (token, id) => {
    dispatch(actionDeletePatient.loading())
    try {
      if (token) {
        await deletePatientService(token, id)
        dispatch(actionDeletePatient.success(id))
      }
    } catch (e) {
      console.log(e)
      dispatch(actionDeletePatient.error())
    }
  }

  const searchPatientByName = name => {
    dispatch(actionFilteredPatientByName(name))
  }

  return {
    patientList,
    patientListByName,
    patientObtainedById,
    isLoading,
    getPatientList,
    getPatient,
    createPatient,
    deletePatient,
    searchPatientByName
  }
}

export default usePatient
