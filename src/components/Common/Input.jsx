/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types'
import styled from 'styled-components'

const InputStyled = styled.div`
  width: 100%;
  display: grid;
  gap: 5px;
  label {
    width: 100%;
    color: #6c6c6c;
    font-size: 14px;
  }
  .inputContainer {
    width: 100%;
    padding: 7.5px 20px;
    background-color: var(--background-box-color);
    border-bottom: 2px solid rgba(0, 0, 0, 0.15);
  }
  .inputError {
    border-bottom: 1px solid red;
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
const Input = ({ label, error, touched, ...rest }) => {
  return (
    <InputStyled>
      <label className={error && touched && 'labelError'} htmlFor={label}>
        {label} {error && touched && `- ${error}`}
      </label>
      <input
        className={`inputContainer ${error && touched && 'inputError'}`}
        {...rest}
      />
    </InputStyled>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  touched: PropTypes.bool,
  disabled: PropTypes.string
}

export default Input