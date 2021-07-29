import React from 'react'
import styled from 'styled-components'

const ButtonIconStyled = styled.div`
  background: ${props => props.backgroundColor ? props.backgroundColor : '#ffffff'};
  border-radius: 50%;
  width: 44px;
  height: 44px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: rgba(0,0,0,0.05);
    ${props => props.backgroundColorHover ? props.backgroundColorHover : props.backgroundColor}
  }
  .icon {
    width: auto;
    color: #757575;
  }
`
export default function ButtonIcon({ action, icon, alt, ...rest}) {
  return (
    <ButtonIconStyled onClick={action}>
      <img className='icon' src={icon} alt={alt} {...rest}/>
    </ButtonIconStyled>
  )
}