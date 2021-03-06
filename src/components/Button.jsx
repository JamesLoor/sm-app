import PropTypes from 'prop-types'
import styled from 'styled-components'

const ButtonStyled = styled.button`
  width: ${(props) => (props.width ? props.width : '100%')};
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : '#ffffff'};
  color: ${(props) => (props.color ? props.color : '#000000')};
  font-weight: 500;
  border-radius: 20px;
  padding: 7.5px 20px;
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${(props) =>
      props.backgroundHover ? props.backgroundHover : 'rgba(0,0,0,0.05)'};
  }
`
const Button = ({
  children,
  backgroundColor,
  backgroundHover,
  color,
  width,
  type,
  action
}) => {
  return (
    <ButtonStyled
      onClick={action}
      type={type}
      backgroundColor={backgroundColor}
      backgroundHover={backgroundHover}
      color={color}
      width={width}
    >
      {children}
    </ButtonStyled>
  )
}

/*
    |￣￣￣￣￣  
    | // TODO: Fix prop types 
    |＿＿＿_ 
(\__/)|| 
(•ㅅ•)|| 
/  づ
*/

Button.propTypes = {
  children: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  backgroundHover: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired
}

export default Button
