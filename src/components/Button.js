import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
  width: ${props => props.width ? props.width : '100%'};
  background: ${props => props.backgroundColor ? props.backgroundColor : '#ffffff'};
  color: ${props => props.color ? props.color : '#000000'};
  font-weight: 500;
  border-radius: 20px;
  padding: 7.5px 20px;
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${props => props.backgroundColorHover ? props.backgroundColorHover : 'rgba(0,0,0,0.05)'};;
  }
`
export default function Button({ children, backgroundColor, backgroundColorHover, color, width, type, action }) {
  return (
    <ButtonStyled onClick={action} type={type} backgroundColor={backgroundColor} backgroundColorHover={backgroundColorHover} color={color} width={width}>
      {children}
    </ButtonStyled>
  )
}