import styled from 'styled-components'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Home from '../../assets/img/Home.svg'
import Patient from '../../assets/img/Patient.svg'
import Schedule from '../../assets/img/Schedule.svg'
import Menu from '../../assets/img/Menu.svg'

const SideBarStyled = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  width: ${props => (props.isOpen ? '250px' : '60px')};
  background-color: var(--main-color);
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 60px min-content;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  transition: 0.4s;
  box-shadow: var(--box-shadow-default);
  overflow: hidden;
  .sideBarHeader {
    display: grid;
    grid-template-columns: ${props =>
      props.isOpen ? 'min-content min-content' : '1fr'};
    justify-content: space-between;
    align-items: center;
    padding: 0 17.5px;
    background-color: var(--secundary-color);
    height: 100%;
  }
  .sideBarLogo {
    display: ${props => (props.isOpen ? 'block' : 'none')};
    font-size: 30px;
    font-weight: 600;
    color: var(--text-white-color);
  }
  .nav {
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    grid-auto-flow: row;
    & li {
      width: 100%;
      padding: 18px 17.5px;
      border-bottom: 1px solid var(--text-white-color);
    }
    & li:last-child {
      border-bottom: none;
    }
  }
  .menuHamburguer {
    cursor: pointer;
  }
  .navLink {
    width: 100%;
    display: grid;
    grid-template-columns: ${props => (props.isOpen ? '25px 1fr' : '1fr')};
    gap: ${props => (props.isOpen ? '15px' : '0')};
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .navLink img {
    display: block;
    margin: auto;
  }
  .navLinkText {
    display: ${props => (props.isOpen ? 'block' : 'none')};
    color: var(--text-white-color);
    font-weight: 500;
  }
`
const SideBar = () => {
  const history = useHistory()
  const [sideBarOpen, setSideBarOpen] = useState(false)
  const handleSideBar = () => {
    setSideBarOpen(c => !c)
  }

  history.listen(location => {
    if (location === history.location) setSideBarOpen(false)
  })
  return (
    <SideBarStyled isOpen={sideBarOpen}>
      <div className="sideBarHeader">
        <span className="sideBarLogo">SMedit</span>
        <button
          type="button"
          onClick={handleSideBar}
          className="menuHamburguer"
        >
          <img src={Menu} alt="Menu Hamburguesa" />
        </button>
      </div>

      <ul className="nav">
        <li>
          <Link className="navLink" to="/">
            <img src={Home} alt="Inicio" />
            <span className="navLinkText">Inicio</span>
          </Link>
        </li>

        <li>
          <Link className="navLink" to="/pacientes">
            <img src={Patient} alt="Pacientes" />
            <span className="navLinkText">Pacientes</span>
          </Link>
        </li>

        <li>
          <Link className="navLink" to="/agenda">
            <img src={Schedule} alt="Agenda" />
            <span className="navLinkText">Agenda</span>
          </Link>
        </li>
      </ul>
    </SideBarStyled>
  )
}

export default SideBar
