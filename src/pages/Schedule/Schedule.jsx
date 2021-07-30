import styled from 'styled-components'
import Header from '../../components/Header'

const ScheduleStyled = styled.div`
  .scheduleContainer {
    padding: 20px;
  }
`
const Schedule = () => {
  return (
    <ScheduleStyled>
      <Header>.</Header>
      <div className="scheduleContainer">
        <h1>Schedule</h1>
      </div>
    </ScheduleStyled>
  )
}

export default Schedule
