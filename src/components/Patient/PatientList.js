import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import Patient from './Patient'
import { getPatientList } from '../../redux/patientDucks'

const PatientListStyled = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  .titleListContainer{
    padding: 8px 20px;
    background-color: #093B32;
    border-radius: 20px;
  }
  .titleList{
    display: grid;
    grid-template-columns: 1fr 1.2fr 1.4fr 1.6fr 1fr 40px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
  }
  .messageError {
    text-align: center;
  }
`
export default function PatientList() {

  const dispatch = useDispatch()
  const token = useSelector(store => store.auth.token)
  const patientListByName = useSelector(store => store.patient.patientListByName)
  const patientList = useSelector(store => {
  if(patientListByName.length > 0) return patientListByName
    else return store.patient.patientList
  })

  useEffect(() => {
    dispatch(getPatientList(token, 10,1))
  }, [dispatch, token])

  return (
    <PatientListStyled>
      <div className='titleListContainer'>
        <ul className='titleList'>
          <li>Cedula</li>
          <li>Nombre</li>
          <li>Apellidos</li>
          <li>Dirección</li>
          <li>Teléfono</li>
        </ul>
      </div>
      {
        patientList.length !== 0
          ? patientList.map((patient) => {
              return (
                <Patient
                  key={patient._id}
                  _id={patient._id}
                  dni={patient.DNI}
                  name={patient.name}
                  lastname={patient.lastname}
                  address={patient.address}
                  phone={patient.phone}
                />
              )
            })
          : <p className='messageError'>Aun no se ah ingresado pacientes</p>
      }
    </PatientListStyled>
  )
}