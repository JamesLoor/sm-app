import React from 'react'
import styled from 'styled-components'

const NotFound404Styled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`
export default function NotFound404() {
  return (
    <NotFound404Styled>
      <h1>Error 404 | Ruta no especificada</h1>
    </NotFound404Styled>
  )
}