import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

// Redux
import { logoutUser, getUser } from '../redux/userDucks'
import { useSelector } from 'react-redux'

const HeaderStyled = styled.header`
  position: fixed;
  width: 100%;
  background-color: #ffffff;
  z-index: 1000;
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
`
export default function Header() {

  const dispatch = useDispatch()

  function handleButton(e) {
    dispatch(logoutUser())
  }
  const userToken = useSelector(store => store.user.userToken)
  const name = useSelector(store => store.name.nameLastname)

  useEffect(() => {
    if (!name) {
      dispatch(getUser(userToken))
    }
  }, [name, dispatch, userToken])
  
  return (
    <HeaderStyled>
      <div className="wrapperHeader">
        <div className="containerHeader">
          <div className="logo">Sistema Médico</div>
          {name && <div>{name}</div>}
          <button className="logoutTesting" onClick={handleButton}>Cerrar Sesión</button>
        </div>
      </div>
    </HeaderStyled>
  )
}