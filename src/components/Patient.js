import React from 'react'
import styled from 'styled-components'

const PatientStyled = styled.div`
  padding: 8px 20px;
  border-radius: 20px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  .patientList {
    display: grid;
    grid-template-columns: 1fr 1.2fr 1.4fr 1.6fr 1fr;
    gap: 10px;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #6C6C6C;
  }
`
export default function Patient({_id, dni, nombre, apellidos, direccion, telefono}){
  return (
    <PatientStyled id={_id}>
      <ul className='patientList'>
        <li>{dni}</li>
        <li>{nombre}</li>
        <li>{apellidos}</li>
        <li>{direccion}</li>
        <li>{telefono}</li>
      </ul>
    </PatientStyled>
  )
}