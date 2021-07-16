import React, { useState } from 'react'
import styled from 'styled-components'
import  { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

// Components
import Header from '../components/Header'
import Button from '../components/Button'

const PatientDetailStyled = styled.div`
  .patientDetailContainer{
    padding: 20px 20px 0 20px;
  }
`
export default function PatientDetail() {
  const [buttonActive, setButtonActive] = useState(0)
  const buttonData = ['Datos']

  const handleButton = (index) => {
    setButtonActive(index)
  }

  const { id } = useParams()
  const patientList = useSelector(store => store.patient.patientList)
  const patient = patientList.find(patient => patient._id === id)

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
      <div className="patientDetailContainer">
        {patient && <>
          <p>{patient.name}</p>
          <p>{patient.lastname}</p>
          <p>{patient.DNI}</p>
          <p>{patient.phone}</p>
        </>}
      </div>
    </PatientDetailStyled>
  )
}