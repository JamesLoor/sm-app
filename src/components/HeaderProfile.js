import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

// Redux
import { getFullNameUser } from '../redux/userDucks'
import { logoutUser } from '../redux/authDucks';

// Static
import avatar from '../assets/img/avatar.svg'

// Utils
import { capitalize } from '../utils/capitalize'
import { useState } from 'react'
import { Dropdown } from './Dropdown'
import DropdownOption from './DropdownOption'

const HeaderProfileStyled = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 5px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
export default function HeaderProfile() {

  const dispatch = useDispatch()
  const token = useSelector(store => store.auth.token)
  const fullName = useSelector(store => store.user.fullName) || ''
  const [dropdownActive, setDropdownActive] = useState(false)
  const headerProfileRef = useRef(null)

  const handleDropdown = (e) => {
    setDropdownActive(c => !c)
  }

  const handleLogout = () => {
    dispatch(logoutUser())
  }

  useEffect(() => {
    dispatch(getFullNameUser(token))
  }, [dispatch, token])

  return (
    <HeaderProfileStyled ref={headerProfileRef} onClick={handleDropdown}>
      <p>{capitalize(fullName)}</p>
      <img src={avatar} alt='Avatar to user' />
      {
        dropdownActive
          ? <Dropdown title='Opciones'>
              <DropdownOption action={handleLogout}>Cerrar sesión</DropdownOption>
            </Dropdown>
          : null
      }
    </HeaderProfileStyled>
  )
}