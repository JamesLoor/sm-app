import React from 'react'
import styled from 'styled-components'

// Components
import Header from './Header'

const LayoutStyled = styled.div`
  
`
export default function Layout({ children }) {
  return (
    <LayoutStyled>
      <Header/>
      <main>
        {children}
      </main>
    </LayoutStyled>
  )
}