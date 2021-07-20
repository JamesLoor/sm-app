import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import  { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

// Components
import Header from '../components/Header'
import Button from '../components/Button'
import PatientFormView from '../components/Patient/PatientFormView'

// Redux
import { getPatientById } from '../redux/patientDucks'

const PatientDetailStyled = styled.div`
  .patientDetailContainer{
    padding: 20px 20px 0 20px;
  }
`
export default function PatientDetail() {
  const dispatch = useDispatch()
  const [buttonActive, setButtonActive] = useState(0)
  const buttonData = ['Datos']

  const handleButton = (index) => {
    setButtonActive(index)
  }

  const { id } = useParams()
  const token = useSelector(store => store.auth.token)
  const patient = useSelector(store => store.patient.patientObtainedById)
  useEffect(() => {
    dispatch(getPatientById(token, id))
  }, [dispatch, token, id])

  return (
    <PatientDetailStyled>
      <Header>
        {buttonData.map((text, index) => {
          return  <Button
                    key={index}
                    action={() => handleButton(index)}
                    type='button'
                    backgroundColor={buttonActive === index ? '#093B32' : '#ffffff'}
                    color={buttonActive === index ? '#ffffff' : '#6C6C6C'}>
                    {text}
                  </Button>
        })}
      </Header>
      <div className='patientDetailContainer'>
        {patient ? <PatientFormView patient={patient}/> : 'Cargando ...'}
      </div>
    </PatientDetailStyled>
  )
}