import React from 'react'
import styled from 'styled-components'

const InputDisabledStyled = styled.div`
  width: 100%;
  margin: 20px 0;
  .label {
    width: 100%;
    padding: 0px 20px;
    margin-bottom: 3px;
    color: #6C6C6C;
  }
  .inputContainer {
    width: 100%;
    border-radius: 20px;
    padding: 7.5px 20px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  }
`
export default function InputDisabled({ label, value }) {
  return (
    <InputDisabledStyled>
      <p className="label">{label}</p>
      <div className="inputContainer">
        {value}
      </div>
    </InputDisabledStyled>
  )
}