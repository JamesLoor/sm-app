import React from 'react'
import styled from 'styled-components'

// Static
import defaultAvatar from '../assets/img/defaultAvatar.svg'

const PhotoPatientStyled = styled.div`
  width: 100%;
  height: 200px;
  background-color: #093B32;
  border-radius: 0 20px 0 0;
  display: grid;
  justify-content: center;
  align-items: center;
`
export default function PhotoPatient() {
  return (
    <PhotoPatientStyled>
      <img src={defaultAvatar} alt="Default avatar" />
    </PhotoPatientStyled>
  )
}