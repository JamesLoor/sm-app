import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

// Components
import DropdownOption from './DropdownOption'

// Redux
import { getFullNameUser } from '../redux/userDucks'
import { logoutUser } from '../redux/authDucks';

// Static
import avatar from '../assets/img/avatar.svg'

// Utils
import { capitalize } from '../utils/capitalize'
import { Dropdown } from './Dropdown'

// Hooks
import { useDropdown } from '../hooks/useDropdown'

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

  const [isDropdownOpen, setDropdownOpen] = useDropdown()
  const dispatch = useDispatch()
  const token = useSelector(store => store.auth.token)
  const fullName = useSelector(store => store.user.fullName) || ''
  const headerProfileRef = useRef(null)

  /**
   * Function to logout User
   * Delete the token of locastorage || Store
   * Redirect to login
   */
  const handleLogout = () => {
    dispatch(logoutUser())
  }

  useEffect(() => {
    dispatch(getFullNameUser(token))
  }, [dispatch, token])

  return (
    <HeaderProfileStyled ref={headerProfileRef} onClick={() => setDropdownOpen(true)}>
      <p>{capitalize(fullName)}</p>
      <img src={avatar} alt='Avatar to user' />
      <Dropdown isDropdownOpen={isDropdownOpen} setDropdownOpen={setDropdownOpen} title='Opciones'>
        <DropdownOption action={handleLogout}>Cerrar sesión</DropdownOption>
      </Dropdown>
    </HeaderProfileStyled>
  )
}