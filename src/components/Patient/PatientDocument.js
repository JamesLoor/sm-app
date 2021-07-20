import React from 'react'
import styled from 'styled-components'

// Components

const PatientDocumentStyled = styled.div`
  display: grid;
  grid-template-columns: 190px 1fr;
  gap: 25px;
`
export default function PatientDocument() {
  return (
    <PatientDocumentStyled>
      <h1>Documentos</h1>
    </PatientDocumentStyled>
  )
}