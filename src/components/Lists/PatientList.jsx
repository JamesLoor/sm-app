/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from 'react'
import styled from 'styled-components'
import useAuth from '../../hooks/useAuth'
import usePatient from '../../hooks/usePatient'
import Patient from '../Common/Patient'

const PatientListStyled = styled.div`
  width: 100%;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: var(--box-shadow-default);
  overflow-x: scroll;
  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  .patientListTitles {
    width: 690px;
    display: grid;
    grid-template-columns: 160px 200px 100px 100px 60px;
    align-items: center;
    grid-gap: 10px;
    padding: 20px;
    border-bottom: 1px solid var(--gray-color);
    & span {
      font-weight: 500;
    }
    @media (min-width: 768px) {
      width: 100%;
      grid-template-columns: 1.6fr 2fr 1fr 1fr 0.6fr;
    }
  }
  .patientListEmpty {
    width: 690px;
    text-align: center;
    padding: 20px;
  }
  .hidden {
    visibility: hidden;
  }
`
const PatientList = () => {
  const { tokenJWT } = useAuth()
  const { patientList, patientListByName, getPatientList } = usePatient()
  const isPatientListEmpty = !patientList.length
  const list = patientListByName.length > 0 ? patientListByName : patientList
  const patientListHTML = list.map(patient => {
    return <Patient key={patient._id} {...patient} />
  })
  useEffect(() => {
    getPatientList(tokenJWT, 10, 1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokenJWT])
  return (
    <PatientListStyled>
      <div className="patientListTitles">
        <span>Nombres</span>
        <span>Correo electrónico</span>
        <span>Cedula</span>
        <span>Teléfono</span>
        <span className="hidden">.</span>
      </div>

      {isPatientListEmpty ? (
        <p className="patientListEmpty">Aún no se ah ingresado pacientes</p>
      ) : (
        patientListHTML
      )}
    </PatientListStyled>
  )
}

export default PatientList
