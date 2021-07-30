import React from 'react'
import styled from 'styled-components'
import Document from './Document'

const DocumentsListStyled = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  .titleListContainer{
    padding: 8px 20px;
    background-color: #093B32;
    border-radius: 20px;
  }
  .titleList{
    display: grid;
    grid-template-columns: 1fr 1fr 2fr 120px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
  }
`

export default function DocumentsList(){
  return (
    <DocumentsListStyled>
      <div className="titleListContainer">
        <ul className="titleList">
          <li>Fecha</li>
          <li>Tipo</li>
          <li>Nombre</li>
        </ul>
      </div>
      <Document date='18/10/2021' type='Receta' name='Remedios'/>
    </DocumentsListStyled>
  )
}