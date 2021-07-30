import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import arrow from '../../assets/img/arrow.svg'

const NavLinkStyled = styled.div`
  .link {
    display: grid;
    grid-template-columns: 25px 0.8fr 9px;
    justify-content: center;
    align-items: center;
    grid-gap: 10px;
    cursor: pointer;
  }
  .link:hover {
    color: #093b32;
  }
  .link p {
    font-weight: 500;
  }
`
const NavLink = ({ to, text, icon }) => {
  return (
    <NavLinkStyled>
      <Link className="link" to={to}>
        <img src={icon} alt="Pacientes" />
        <p>{text}</p>
        <img src={arrow} alt="arrow" />
      </Link>
    </NavLinkStyled>
  )
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default NavLink
