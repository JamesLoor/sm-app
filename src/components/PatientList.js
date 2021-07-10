import React from 'react'
import styled from 'styled-components'

const PatientListStyled = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
`
export default function PatientList() {
  return (
    <PatientListStyled>
      <h1>Hello</h1>
    </PatientListStyled>
  )
}