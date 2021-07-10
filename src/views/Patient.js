import React from 'react'
import styled from 'styled-components'
import PatientList from '../components/PatientList'

const PatientStyled = styled.div`
  
`
export default function Patient() {
  return (
    <PatientStyled>
      <PatientList/>
    </PatientStyled>
  )
}