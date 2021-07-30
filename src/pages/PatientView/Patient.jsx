import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../../components/Button'
import Header from '../../components/Header'
import PatientList from '../../components/Patient/PatientList'
import Search from '../../components/Search'

const PatientStyled = styled.div`
  .patientListContainer {
    padding: 20px;
  }
`
const Patient = () => {
  const history = useHistory()
  const handleNewPatient = () => {
    history.push('/new/patient')
  }

  return (
    <PatientStyled>
      <Header>
        <Search />
        <Button action={handleNewPatient} type="button">
          Nuevo paciente
        </Button>
      </Header>
      <div className="patientListContainer">
        <PatientList />
      </div>
    </PatientStyled>
  )
}

export default Patient
