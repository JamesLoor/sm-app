import React, { useRef } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router'

// Components
import MenuNav from './MenuNav'
import Logo from './Logo'

// Static
import menu from '../assets/img/menu.svg'
import { useState } from 'react'

const SidebarStyled = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: auto 1fr auto;
  background: #eee;
  grid-gap: 30px;
  padding: 12px;
  width: 250px;
  z-index: 1000;
  left: ${props => props.isOpen ? '0px;' : '-200px;'};
  transition: .3s;
  .menuHamburger {
    cursor: pointer;
  }
  .sideBarHeader {
    display: grid;
    grid-template-columns: 1fr 25px;
    align-items: center;
  }
  .sideBarFooter {
    text-align: center;
    font-size: 12px;
    padding: 0 30px;
  }
`

const SideBarOverlay = styled.div`
  display: ${props => props.isOpen ? 'block' : 'none'};
  position: absolute;
  background-color: rgba(0, 0, 0, 0.30);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  z-index: 888;
  padding: 20px;
  cursor: pointer;
  transition: .3s;
`

export default function Sidebar() {

  const history = useHistory()
  const [sideBarOpen, setSideBarOpen] = useState(false)
  const overlayRef = useRef(null)

  const handleSideBar = () => {
    setSideBarOpen(c => !c)
  }

  const handleOverlay = () => {
    setSideBarOpen(false)
  }

  history.listen(location => {
    if(location === history.location) setSideBarOpen(false)
  })

  return (
    <>
      <SideBarOverlay ref={overlayRef} isOpen={sideBarOpen} onClick={handleOverlay}></SideBarOverlay>
      <SidebarStyled isOpen={sideBarOpen}>
        <div className='sideBarHeader'>
          <Logo/>
          <img onClick={handleSideBar} className='menuHamburger' src={menu} alt='Menú' />
        </div>
        <MenuNav/>
        <p className='sideBarFooter'>
          Version 1.0.0 Desarrollado por HM-Computer © 2021 HM-Computer | Todos los derechos reservados
        </p>
      </SidebarStyled>
    </>
  )
}