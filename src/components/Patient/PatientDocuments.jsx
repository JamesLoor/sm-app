import styled from 'styled-components'
import PatientBasicInformation from './PatientBasicInformation'
import PatientHeader from './PatientHeader'
import DocumentsList from './DocumentsList'

const PatientDocumentsStyled = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 40px;
`
const PatientDocuments = () => {
  return (
    <PatientDocumentsStyled>
      <PatientBasicInformation />
      <div className="patientDocumentsContainer">
        <PatientHeader title="Documentos Adjuntos" />
        <DocumentsList />
      </div>
    </PatientDocumentsStyled>
  )
}

export default PatientDocuments
