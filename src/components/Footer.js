import React from 'react'
import styled from 'styled-components'

const FooterStyled = styled.div`
  p {
    text-align: center;
    font-size: 12px;
  }
`
export default function Footer() {
  return (
    <FooterStyled>
      <p>
        Version 1.0.0 <br />
        Desarrollado por HM-Computer <br />
        © 2021 HM-Computer | Todos los <br />
        derechos reservados
      </p>
    </FooterStyled>
  )
}