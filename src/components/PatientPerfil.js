import styled from 'styled-components'
import avatar from '../assets/img/avatar.svg'
import Input from './Input'

const PatientPerfilStyled = styled.div`
  padding: 10px;
  * {
    margin-top: 5px;
  }
  img {
    width: 100%;
    margin: 0px;
  }
`

export default function PatientPerfil () {
    
  return (
    <PatientPerfilStyled>
      <img src={avatar} alt='avatar patient'/>
      <Input label='Nombres' value='pepe'/>
      <Input label='Cedula' value='45641561561'/>
      <Input label='Celular' value='45178989465'/>
      <Input label='Fecha de nacimiento' value='15/02/10'/>
    </PatientPerfilStyled>
  )
}