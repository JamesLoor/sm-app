import React from 'react'
import styled from 'styled-components'
import Input from './Input'
import PhotoPatient from './PhotoPatient'

const PatientBasicInfoStyled = styled.div`
  display: grid;
  grid-auto-flow: row;
  gap: 10px;
`
export default function PatientBasicInfo() {
  return (
    <PatientBasicInfoStyled>
      <PhotoPatient/>
      <Input
        label="Nombre completo"
        name="fullname"
        disabled={true}
        value={'James'}
      />
      <Input
        label="Cedula"
        name="DNI"
        disabled={true}
        value={'0912345678'}
      />
      <Input
        label="Celular"
        name="mobile"
        disabled={true}
        value={'8765432190'}
      />
      <Input
        label="F. nacimiento"
        name="birht"
        disabled={true}
        value={'01/01/2002'}
      />
    </PatientBasicInfoStyled>
  )
}