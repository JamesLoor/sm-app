import styled from 'styled-components'
import { useHistory } from 'react-router'
import Header from '../../components/Common/Header'
import Search from '../../components/Common/Search'
import Button from '../../components/Common/Button'
import PatientList from '../../components/Lists/PatientList'

const PatientStyled = styled.div`
  min-height: 100vh;
  .patientContent {
    padding: 25px 15px;
    @media (min-width: 768px) {
      padding: 25px 20px;
    }
  }
`
const Patient = () => {
  const history = useHistory()

  return (
    <PatientStyled>
      <Header>
        <Search />
      </Header>
      <div className="patientContent">
        <Button
          type="button"
          action={() => history.push('/nuevo/paciente')}
          width="200px"
          margin="0 0 15px 0"
        >
          Nuevo Paciente
        </Button>
        <PatientList />
      </div>
    </PatientStyled>
  )
}

export default Patient
