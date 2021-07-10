import React from 'react'
import styled from 'styled-components'
import { Dropdown } from './Dropdown'

// Components
import Perfil from './Perfil'

const HeaderStyled = styled.header`
  position: relative;
  width: 100%;
  background-color: #ffffff;
  padding: 14px 0;
  box-shadow: 0px 0px 7px #1111117a;
  .wrapperHeader {
    padding: 0px 20px;
    margin: 0 auto;
    display: inherit;
    justify-content: inherit;
    align-items: inherit;
  }
  .containerHeader {
    display: grid;
    grid-template-columns: auto auto;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    grid-gap: 40px;

    .logo {
      width: 100%;
      font-weight: 600;
      font-size: 18px;
    }
  }
  .logoutTesting {
    cursor: pointer;
  }
  .dropdownHeader {
    display: none;
    position: fixed;
    right: 50px;
    top: 50px;
  }
`
export default function Header() {

  return (
    <HeaderStyled>
      <div className="wrapperHeader">
        <div className="containerHeader">
          <div className="logo">Sistema Médico</div>
          <Perfil/>
        </div>
      </div>
      <div className='dropdownHeader'>
        <Dropdown options={['Perfil', 'Configuración', 'Cerrar sesión']} titleOptions='Options'>
        </Dropdown>
      </div>
    </HeaderStyled>
  )
}

// <button className="logoutTesting" onClick={handleButton}>Cerrar Sesión</button>
