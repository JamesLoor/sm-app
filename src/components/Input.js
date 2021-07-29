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
    /* box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15); */
    border: 2px solid rgba(0, 0, 0, 0.15);
  }
  .inputError {
    border: 1px solid red;
  }
  .labelError {
    color: red;
  }
  .errorMessage {
    font-size: 12px;
    color: red;
    width: 100%;
    padding: 0 0 0 20px;
  }
`
export default function Input({ label, name, value, type, disabled, onChange, error}) {
  return (
    <InputStyled>
      <label className={error ? 'labelError' : ''}>
        {label}
      </label>
      <input
        className={`inputContainer ${error ? 'inputError' : ''}`}
        name={name}
        type={type}
        disabled={disabled}
        onChange={onChange ? onChange : () => {}}
        value={value}
      />
      <p className='errorMessage'>{error ? error : ''}</p>
    </InputStyled>
  )
}