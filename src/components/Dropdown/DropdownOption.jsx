import PropTypes from 'prop-types'
import styled from 'styled-components'

const DropdownOptionStyled = styled.li`
  cursor: pointer;
  font-weight: 500;
  &:hover {
    color: #093b32;
  }
`
const DropdownOption = ({ children, action }) => {
  return (
    <DropdownOptionStyled onClick={action}>{children}</DropdownOptionStyled>
  )
}

DropdownOption.propTypes = {
  children: PropTypes.node.isRequired,
  action: PropTypes.func.isRequired
}

export default DropdownOption
