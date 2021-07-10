import React from 'react'
import styled from 'styled-components'

// Static
import home from '../assets/img/home.svg'
import schedule from '../assets/img/schedule.svg'
import user from '../assets/img/user.svg'
import NavLink from './NavLink'

const MenuNavStyled = styled.nav`
  width: 100%;
  ul {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
`
export default function MenuNav() {
  return (
    <MenuNavStyled>
      <ul>
        <li><NavLink to='/' icon={home} text='Inicio'/></li>
        <li><NavLink to='/patient' icon={user} text='Pacientes'/></li>
        <li><NavLink to='/schedule' icon={schedule} text='Agenda'/></li>
      </ul>
    </MenuNavStyled>
  )
}