import React from 'react'
import styled from 'styled-components'

// Components
import Sidebar from './Sidebar'

const LayoutStyled = styled.div`
  display: grid;
  grid-template-columns: 50px auto;
  min-height: 100vh;
  top: 0px;
  bottom: 0px;
  z-index: 999;
  .contentAuth {
    position: relative;
    right: 0;
  }
`
export default function Layout({ children }) {
  return (
    <LayoutStyled>
      <Sidebar/>
      <div className='contentAuth'>
        {children}
      </div>
    </LayoutStyled>
  )
}