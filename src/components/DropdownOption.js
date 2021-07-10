import React from 'react'
import styled from 'styled-components'

const DropdownOptionStyled = styled.li`
  cursor: pointer;
  font-weight: 500;
  &:hover {
    color: #093B32;
  }
`
export default function DropdownOption({ children, action }) {
  return (
    <DropdownOptionStyled onClick={action}>{children}</DropdownOptionStyled>
  )
}