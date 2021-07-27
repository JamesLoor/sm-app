import React from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";

// Components
import PatientList from '../../components/Patient/PatientList'
import Header from '../../components/Header'
import Search from '../../components/Search'
import Button from '../../components/Button'

const PatientStyled = styled.div`
  .patientListContainer {
    padding: 20px;
  }
`
export default function Patient() {

  const history = useHistory()
  const handleNewPatient = () => {
    history.push('/new/patient')
  }

  return (
    <PatientStyled>
      <Header>
        <Search/>
        <Button action={handleNewPatient} type='button' width='200px' backgroundColor='#ffffff' color='#6C6C6C'>
          Nuevo paciente
        </Button>
      </Header>
      <div className='patientListContainer'>
        <PatientList/>
      </div>
    </PatientStyled>
  )
}