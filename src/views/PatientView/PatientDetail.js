import React, { useEffect } from 'react'
import styled from 'styled-components'
import  { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'

// Components
import Header from '../../components/Header'
import Button from '../../components/Button'
import PatientFormView from '../../components/Patient/PatientFormView'

// Redux
import { getPatientById } from '../../redux/patientDucks'
import { useState } from 'react'
import PatientDocuments from '../../components/Patient/PatientDocuments'

const PatientDetailStyled = styled.div`
  .patientDetailContainer{
    padding: 20px 20px 0 20px;
  }
`
export default function PatientDetail() {
  const history = useHistory()
  const dispatch = useDispatch()
  const { id } = useParams()
  const token = useSelector(store => store.auth.token)
  const patient = useSelector(store => store.patient.patientObtainedById)
  useEffect(() => {
    dispatch(getPatientById(token, id))
  }, [dispatch, token, id])

  const [component, setComponent] = useState('')
  const switchPatientData = (type) => {
    switch(type) {
      case 'Documents': return <PatientDocuments/>
      default: return <PatientFormView patient={patient}/>
    }
  }

  return (
    <PatientDetailStyled>
      <Header>
        <Button
          action={() => history.goBack()}
          type='button'
          backgroundColor='#ffffff'
          color='#6C6C6C'>
          Volver
        </Button>

        <Button
          action={() => setComponent('')}
          type='button'
          backgroundColor='#ffffff'
          color='#6C6C6C'>
          Datos
        </Button>

        <Button
          action={() => setComponent('Documents')}
          type='button'
          backgroundColor='#ffffff'
          color='#6C6C6C'>
          Documentos
        </Button>
      </Header>
      <div className='patientDetailContainer'>
        {patient ? switchPatientData(component) : 'Cargando...'}
      </div>
    </PatientDetailStyled>
  )
}