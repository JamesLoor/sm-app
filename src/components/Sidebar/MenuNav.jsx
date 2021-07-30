import styled from 'styled-components'

import home from '../../assets/img/home.svg'
import schedule from '../../assets/img/schedule.svg'
import user from '../../assets/img/user.svg'
import NavLink from './NavLink'

const MenuNavStyled = styled.nav`
  width: 100%;
  ul {
    display: grid;
    grid-template-columns: 0.8fr;
    grid-gap: 10px;
  }
`
const MenuNav = () => {
  return (
    <MenuNavStyled>
      <ul>
        <li>
          <NavLink to="/" icon={home} text="Inicio" />
        </li>
        <li>
          <NavLink to="/patient" icon={user} text="Pacientes" />
        </li>
        <li>
          <NavLink to="/schedule" icon={schedule} text="Agenda" />
        </li>
      </ul>
    </MenuNavStyled>
  )
}

export default MenuNav
