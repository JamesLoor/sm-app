/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import menu from '../../assets/img/menu.svg'
import Logo from '../Logo'
import MenuNav from './MenuNav'

const SidebarStyled = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: auto 1fr auto;
  background: #eee;
  grid-gap: 30px;
  padding: 12px;
  width: 250px;
  z-index: 1000;
  left: ${(props) => (props.isOpen ? '0px;' : '-200px;')};
  transition: 0.3s;
  .menuHamburger {
    cursor: pointer;
  }
  .sideBarHeader {
    display: grid;
    grid-template-columns: 1fr 25px;
    align-items: center;
  }
  .sideBarFooter {
    padding: 0 30px;
  }
`

const SideBarOverlay = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  z-index: 888;
  padding: 20px;
  cursor: pointer;
  transition: 0.3s;
`

const Sidebar = () => {
  const history = useHistory()
  const [sideBarOpen, setSideBarOpen] = useState(false)
  const overlayRef = useRef(null)

  const handleSideBar = () => {
    setSideBarOpen((c) => !c)
  }

  const handleOverlay = () => {
    setSideBarOpen(false)
  }

  history.listen((location) => {
    if (location === history.location) setSideBarOpen(false)
  })

  /*
    |￣￣￣￣￣  
    | // TODO: Improve this
    |＿＿＿_ 
(\__/)|| 
(•ㅅ•)|| 
/  づ
*/

  return (
    <>
      <SideBarOverlay
        ref={overlayRef}
        isOpen={sideBarOpen}
        onClick={handleOverlay}
      />
      <SidebarStyled isOpen={sideBarOpen}>
        <div className="sideBarHeader">
          <Logo />
          <img
            onClick={handleSideBar}
            className="menuHamburger"
            src={menu}
            alt="Menú"
          />
        </div>
        <MenuNav />
        <p className="sideBarFooter">
          Version 1.0.0 Desarrollado por HM-Computer © 2021 HM-Computer | Todos
          los derechos reservados
        </p>
      </SidebarStyled>
    </>
  )
}

export default Sidebar
