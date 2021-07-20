import React from 'react'
import styled from 'styled-components'

// Components
import Header from '../components/Header'

const ScheduleStyled = styled.div`
  .scheduleContainer {
    padding: 20px;
  }
`
export default function Schedule() {
  return (
    <ScheduleStyled>
      <Header>

      </Header>
      <div className='scheduleContainer'>
        <h1>Schedule</h1>
      </div>
    </ScheduleStyled>
  )
}