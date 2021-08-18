/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import styled from 'styled-components'

const ButtonDefault = styled.button`
  width: ${(props) => (props.width ? props.width : '100%')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  max-width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  border-radius: 20px;
  padding: 7.5px 20px;
  background: var(--main-color);
  color: var(--text-white-color);
  box-shadow: var(--box-shadow-short);
  &:hover {
    background: var(--secundary-color);
  }
`
const ButtonError = styled(ButtonDefault)`
  background: var(--error-color);
  &:hover {
    background: var(--error-color);
  }
`
const ButtonIcon = styled(ButtonDefault)`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding: 0;
`
const ButtonIconError = styled(ButtonIcon)`
  background: var(--error-color);
  &:hover {
    background: var(--error-color);
  }
`
const Button = ({ action, children, type, ...rest }) => {
  const switchButton = (buttonType) => {
    switch (buttonType){
      case 'button':
        return <ButtonDefault onClick={action} type={type} {...rest}>{children}</ButtonDefault>
      case 'submit':
        return <ButtonDefault onClick={action} type={type} {...rest}>{children}</ButtonDefault>
      case 'buttonError':
        return <ButtonError onClick={action} type={type} {...rest}>{children}</ButtonError>
      case 'buttonIcon':
        return <ButtonIcon onClick={action} type={type} {...rest}>{children}</ButtonIcon>
      case 'buttonIconError':
        return <ButtonIconError onClick={action} type={type} {...rest}>{children}</ButtonIconError>
      default:
        return null
    }
  }
  return switchButton(type)
}

export default Button