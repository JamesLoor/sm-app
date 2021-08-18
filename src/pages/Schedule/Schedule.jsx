import styled from 'styled-components'
import Header from '../../components/Common/Header'

const ScheduleStyled = styled.div`
  min-height: 100vh;
  .scheduleContent {
    padding: 10px;
  }
`
const Schedule = () => {
  return (
    <ScheduleStyled>
      <Header />
      <div className="scheduleContent">
        <h1>Schedule</h1>
      </div>
    </ScheduleStyled>
  )
}

export default Schedule
