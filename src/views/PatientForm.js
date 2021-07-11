import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import Header from '../components/Header'

const PatientFormStyled = styled.div`
  .patientFormContainer{
    padding: 20px;
  }
`
export default function PatientForm() {

  const [buttonActive, setButtonActive] = useState(0)
  const buttonData = ['Datos', 'Documentos', 'Exploración fisica', 'Operaciones']
  const handleButton = (index) => {
    setButtonActive(index)
  }
  return (
    <PatientFormStyled>
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
      <div className="patientFormContainer">
        <h1>Nuevo paciente</h1>
      </div>
    </PatientFormStyled>
  )
}