import styled from 'styled-components'
import Header from '../../components/Common/Header'
import PatientForm from '../../components/Forms/PatientForm'

const PatientNewStyled = styled.div`
  min-height: 100vh;
  .patientNewContent {
    display: grid;
    align-items: center;
    gap: 10px;
    padding: 25px 15px;
    @media (min-width: 768px) {
      padding: 25px 20px;
    }
  }
`
const PatientNew = () => {
  return (
    <PatientNewStyled>
      <Header />
      <div className="patientNewContent">
        <PatientForm />
      </div>
    </PatientNewStyled>
  )
}

export default PatientNew
