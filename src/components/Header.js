import React from 'react'
import styled from 'styled-components'

const HeaderStyled = styled.header`
  position: fixed;
  width: 100%;
  background-color: #ffffff;
  z-index: 1000;
  padding: 15px 0;
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
`
export default function Header() {
  function handleButton(e) {
    console.log('Hello')
  }

  return (
    <HeaderStyled>
      <div className="wrapperHeader">
        <div className="containerHeader">
          <div className="logo">Sistema Médico</div>
          <button onClick={handleButton}>Iniciar Sesion</button>
        </div>
      </div>
    </HeaderStyled>
  )
}