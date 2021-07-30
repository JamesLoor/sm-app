import PropTypes from 'prop-types'
import styled from 'styled-components'

const InputStyled = styled.div`
  width: 100%;
  label {
    width: 100%;
    padding: 0 0 0 20px;
    margin-bottom: 3px;
    color: #6c6c6c;
  }
  .inputContainer {
    width: 100%;
    border-radius: 20px;
    padding: 7.5px 20px;
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
const Input = ({ label, name, value, type, disabled, onChange, error }) => {
  return (
    <InputStyled>
      <label className={error && 'labelError'} htmlFor={label}>
        {label}
      </label>
      <input
        className={`inputContainer ${error ? 'inputError' : ''}`}
        name={name}
        type={type}
        disabled={disabled}
        onChange={onChange}
        value={value}
        id={label}
      />
      <p className="errorMessage">{error && error}</p>
    </InputStyled>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired
}
