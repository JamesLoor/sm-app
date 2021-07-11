import React from 'react'
import styled from 'styled-components'

const FooterStyled = styled.div`
  p {
    text-align: center;
    font-size: 12px;
    padding: 0 30px;
  }
`
export default function Footer() {
  return (
    <FooterStyled>
      <p>
        Version 1.0.0 Desarrollado por HM-Computer © 2021 HM-Computer | Todos los derechos reservados
      </p>
    </FooterStyled>
  )
}