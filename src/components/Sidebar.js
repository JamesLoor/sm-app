import React from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import Logo from './Logo'

// Components
import MenuNav from './MenuNav'

const SidebarStyled = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  /* align-items: center; */
  background: #eee;
  grid-gap: 30px;
  padding: 20px;
  width: 250px;
`

export const Sidebar = () => {
  return (
    <SidebarStyled>
      <Logo/>
      <MenuNav/>
      <Footer/>
    </SidebarStyled>
  )
}