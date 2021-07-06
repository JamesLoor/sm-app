import React from 'react'
import styled from 'styled-components'

const BoxStyled = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
`
export default function Box({ children }) {
  return (
    <BoxStyled>
      {children}
    </BoxStyled>
  )
}