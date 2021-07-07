import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
  width: ${props => props.width ? props.width : '100%'};
  background: ${props => props.backgroundColor ? props.backgroundColor : '#ffffff'};
  color: ${props => props.backgroundColor ? "#ffffff" : "#000000"};
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  padding: 7.5px 20px;
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`
export default function Button({ children, backgroundColor, width, type}) {
  return (
    <ButtonStyled type={type} backgroundColor={backgroundColor} width={width}>
      {children}
    </ButtonStyled>
  )
}