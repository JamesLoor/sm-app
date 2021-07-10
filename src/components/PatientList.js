import React from 'react'
import styled from 'styled-components'
import Patient from './Patient'

const PatientListStyled = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  .titleListContainer{
    padding: 8px 0;
    background-color: #093B32;
    border-radius: 20px;
  }
  .titleList{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
  }
`
export default function PatientList() {
  return (
    <PatientListStyled>
      <div className='titleListContainer'>
        <ul className='titleList'>
          <li>Cedula</li>
          <li>Nombre</li>
          <li>Apellidos</li>
          <li>Dirección</li>
          <li>Teléfono</li>
        </ul>
      </div>
      <Patient
        cedula='0950678345'
        nombre='Juan'
        apellidos='Pino Delgado'
        direccion='Unrdenor 2'
        telefono='0989765434'
      />
      <Patient
        cedula='0950678345'
        nombre='Juan'
        apellidos='Pino Delgado'
        direccion='Unrdenor 2'
        telefono='0989765434'
      />
      <Patient
        cedula='0950678345'
        nombre='Juan'
        apellidos='Pino Delgado'
        direccion='Unrdenor 2'
        telefono='0989765434'
      />
      <Patient
        cedula='0950678345'
        nombre='Juan'
        apellidos='Pino Delgado'
        direccion='Unrdenor 2'
        telefono='0989765434'
      />
    </PatientListStyled>
  )
}