import React from 'react'
import styled from 'styled-components'

const PatientHeaderStyled = styled.div`

`

export default function PatientHeader() {
    return(
        <PatientHeaderStyled>
            <p>Documentos Adjuntos</p>
            <button>+</button>
        </PatientHeaderStyled>
    )
}