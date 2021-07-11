import React from 'react'
import styled from 'styled-components'

const InputStyled = styled.div`
  width: 100%;
  label {
    width: 100%;
    padding: 0 0 0 20px;
    margin-bottom: 3px;
    color: #6C6C6C;
  }
  .inputContainer {
    width: 100%;
    border-radius: 20px;
    padding: 7.5px 20px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  }
  .inputError {
    border: 1px solid red;
  }
  .labelError {
    color: red;
  }
`
export default function Input({ label, name, value, type, disabled, onChange, error}) {
  return (
    <InputStyled>
      <label className={error ? "labelError" : null}>
        {label} {error ? error : null}
      </label>
      <input
        className={`inputContainer ${error ? 'inputError' : null}`}
        name={name}
        onChange={onChange ? onChange : () => {}}
        value={value}
      />
    </InputStyled>
  )
}