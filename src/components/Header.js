import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import avatar from '../assets/img/user.svg'
import { Dropdown } from './Dropdown'

// Redux
import { /* logoutUser, */ getUser } from '../redux/userDucks'
import { useSelector } from 'react-redux'

const HeaderStyled = styled.header`
  position: relative;
  width: 100%;
  background-color: #ffffff;
  padding: 14px 0;
  box-shadow: 0px 0px 7px #1111117a;
  .wrapperHeader {
    padding: 0px 20px;
    margin: 0 auto;
    display: inherit;
    justify-content: inherit;
    align-items: inherit;
  }
  .containerHeader {
    display: grid;
    grid-template-columns: auto auto;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    grid-gap: 40px;

    .logo {
      width: 100%;
      font-weight: 600;
      font-size: 18px;
    }
  }
  .logoutTesting {
    cursor: pointer;
  }
  .perfilHeader {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    cursor: pointer;
    img {
      margin-left: 10px;
    }
  }
  .dropdownHeader {
    display: none;
    position: fixed;
    right: 50px;
    top: 50px;
  }
`
export default function Header() {

  const dispatch = useDispatch()

  /* function handleButton(e) {
    dispatch(logoutUser())
  } */
  const userToken = useSelector(store => store.user.userToken)
  const name = useSelector(store => store.name.nameLastname)

  useEffect(() => {
    if (!name) {
      dispatch(getUser(userToken))
    }
  }, [name, dispatch, userToken])

  const displayDropdown = () => {
    const dropdown = document.querySelector('.dropdownHeader')
    if (!dropdown.style.display || dropdown.style.display === 'none') {
      dropdown.style.display = 'block'
    } else {
      dropdown.style.display = 'none'
    }
  }
  
  return (
    <HeaderStyled>
      <div className="wrapperHeader">
        <div className="containerHeader">
          <div className="logo">Sistema Médico</div>
          {name && 
            <div className="perfilHeader" onClick={displayDropdown}>
              {name} <img src={avatar} alt="logo to user" />
            </div>}
        </div>
      </div>
      <div className='dropdownHeader'>
        <Dropdown options={['Perfil', 'Configuración', 'Cerrar sesión']} titleOptions='Options'>
        </Dropdown>
      </div>
    </HeaderStyled>
  )
}

// <button className="logoutTesting" onClick={handleButton}>Cerrar Sesión</button>
