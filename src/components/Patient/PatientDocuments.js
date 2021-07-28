import React from 'react'
import styled from 'styled-components'
import PatientBasicInformation from './PatientBasicInformation'
import PatientHeader from './PatientHeader'

const PatientDocumentsStyled = styled.div`
    display: grid;
    grid-template-columns: 240px 1fr;
    gap: 40px;
`
export default function PatientDocuments() {
  return (
    <PatientDocumentsStyled>
      <PatientBasicInformation/>
      <div className='patientDocumentsContainer'>
        <PatientHeader/>
      </div>
    </PatientDocumentsStyled>
  )
}