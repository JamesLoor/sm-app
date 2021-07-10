import React from 'react'
import styled from 'styled-components'
import { Sidebar } from './Sidebar'

// Components
import Header from './Header'

const LayoutStyled = styled.div`
  display: flex;
  flex-flow: row wrap;
  position: fixed;
  top: 0px;
  bottom: 0px;
  z-index: 999;
  main {
    padding: 20px;
  }
  .sidebar {
    width: 20px;
  }
  .contentAuth {
    position: fixed;
    right: 0;
    left: 250px;
  }
`
export default function Layout({ children }) {
  return (
    <LayoutStyled>
      <Sidebar/>
      <div className='contentAuth'>
        <Header/>
        <main>
          {children}
        </main>
      </div>
    </LayoutStyled>
  )
}