import PropTypes from 'prop-types'
import styled from 'styled-components'

const ButtonIconStyled = styled.div`
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : '#ffffff'};
  border-radius: 50%;
  width: 44px;
  height: 44px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${(props) =>
      props.backgroundColorHover
        ? props.backgroundColorHover
        : props.backgroundColor};
  }
  .icon {
    width: auto;
    color: #757575;
  }
`
const ButtonIcon = ({
  icon,
  alt,
  action,
  backgroundColor,
  backgroundHover
}) => {
  return (
    <ButtonIconStyled
      onClick={action}
      backgroundColor={backgroundColor}
      backgroundHover={backgroundHover}
    >
      <img className="icon" src={icon} alt={alt} />
    </ButtonIconStyled>
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

ButtonIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  backgroundHover: PropTypes.string.isRequired
}

export default ButtonIcon
