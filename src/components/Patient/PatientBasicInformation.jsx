import styled from 'styled-components'
import Input from '../Input'
import PatientPhoto from './PatientPhoto'

const PatientBasicInformationStyled = styled.div`
  display: grid;
  grid-auto-flow: row;
  gap: 10px;
`

const PatientBasicInformation = () => {
  return (
    <PatientBasicInformationStyled>
      <PatientPhoto />
      <Input label="Nombres" value="James Mendoza Loor" disable />
      <Input label="Cedula" value="09999999" disable />
      <Input label="Celular" value="09999999" disable />
      <Input label="Fecha de nacimiento" value="10/06/2020" disable />
    </PatientBasicInformationStyled>
  )
}

export default PatientBasicInformation
