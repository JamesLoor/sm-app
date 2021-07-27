import React from 'react'
import styled from 'styled-components'

// Components
import Header from '../components/Header'

const HomeStyled = styled.div`
  .homeContainer {
    padding: 20px;
  }
`
export default function Home() {
  return (
    <HomeStyled>
      <Header/>
      <div className='homeContainer'>
        <h1>Home</h1>
      </div>
    </HomeStyled>
  )
}