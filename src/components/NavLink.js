import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import arrow from '../assets/img/arrow.svg'

const NavLinkStyled = styled.div`
  .link {
    display: grid;
    grid-template-columns: 25px 1fr 9px;
    justify-content: center;
    align-items: center;
    grid-gap: 10px;
    cursor: pointer;
    margin: auto 15px;
  }
  .link:hover {
    color: #093B32;
  }
  .link p {
    font-weight: 500;
  }
`
export default function NavLink({ to, text, icon}) {
  return (
    <NavLinkStyled>
      <Link className="link" to={to}>
        <img src={ icon } alt='Pacientes'/>
        <p>{ text }</p>
        <img src={ arrow } alt='arrow'/>
      </Link>
    </NavLinkStyled>
  )
}