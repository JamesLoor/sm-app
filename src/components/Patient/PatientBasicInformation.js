import React from 'react'
import styled from 'styled-components'

import PhotoPatient from '../PhotoPatient'
import Input from '../Input'

const PatientBasicInformationStyled = styled.div`
    display: grid;
    grid-auto-flow: row;
    gap: 10px;
`

export default function PatientBasicInformation() {
    return(
        <PatientBasicInformationStyled>
            <PhotoPatient/>
            <Input
                label='Nombres' 
                value='James Mendoza Loor'
                disable={true}
            />
            <Input
                label='Cedula'
                value='09999999'
                disable={true}
            />
             <Input
                label='Celular'
                value='09999999'
                disable={true}
            />
             <Input
                label='Fecha de nacimiento'
                value='10/06/2020'
                disable={true}
            />
        </PatientBasicInformationStyled>
    )
}