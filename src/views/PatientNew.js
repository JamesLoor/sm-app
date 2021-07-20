import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router'

// Components
import Header from '../components/Header'
import Button from '../components/Button'
import PatientFormNew from '../components/Patient/PatientFormNew'

const PatientNewStyled = styled.div`
  .patientNewContainer {
    padding: 20px;
  }
`
export default function PatientNew() {

  const history = useHistory()
  const handleGoBack = () => {
    // history.push('/patient')
    history.goBack()
  }

  return (
    <PatientNewStyled>
      <Header>
        <Button action={handleGoBack} type='button' backgroundColor='#ffffff' color='#6C6C6C'>
          Volver
        </Button>
      </Header>

      <div className='patientNewContainer'>
        <PatientFormNew></PatientFormNew>
      </div>
    </PatientNewStyled>
  )
}