import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router'
import arrowLeft from '../../assets/img/arrow-left.svg'
import Header from '../../components/Header'
import PatientFormNew from '../../components/Patient/PatientFormNew'
import ButtonIcon from '../../components/ButtonIcon'

const PatientNewStyled = styled.div`
  .patientNewContainer {
    padding: 20px;
  }
`
export default function PatientNew() {

  const history = useHistory()

  return (
    <PatientNewStyled>
      <Header>
        <ButtonIcon action={() => history.goBack()}  icon={arrowLeft} alt='Arrow to back'/>
      </Header>

      <div className='patientNewContainer'>
        <PatientFormNew/>
      </div>
    </PatientNewStyled>
  )
}