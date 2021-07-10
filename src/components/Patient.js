import React from 'react'
import styled from 'styled-components'

const PatientStyled = styled.div`
	padding: 8px 0;
	border-radius: 20px;
	box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.30);
.patientList {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #6C6C6C;
  }
`
export default function Patient({cedula, nombre, apellidos, direccion, telefono}){
    return (
        <PatientStyled>
					<ul className='patientList'>
						<li>{cedula}</li>
						<li>{nombre}</li>
						<li>{apellidos}</li>
						<li>{direccion}</li>
						<li>{telefono}</li>
					</ul>
        </PatientStyled>
    )
}