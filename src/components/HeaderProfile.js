import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import DropdownOption from './Dropdown/DropdownOption'
import { getFullNameUser } from '../redux/userDucks'
import { logoutUser } from '../redux/authDucks';
import avatar from '../assets/img/avatar.svg'
import { capitalize } from '../utils/capitalize'
import { Dropdown } from './Dropdown/Dropdown'
import { useDropdown } from '../hooks/useDropdown'
import OutsideClickHandler from 'react-outside-click-handler'


const HeaderProfileStyled = styled.div`
  position: relative;
  .profile {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 5px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`
export default function HeaderProfile() {

  const {
    isDropdownOpen,
    toggleDropdown,
    closeDropdown
  } = useDropdown(false)
  const dispatch = useDispatch()
  const token = useSelector(store => store.auth.token)
  const fullName = useSelector(store => store.user.fullName) || ''
  const handleLogout = (e) => {
    dispatch(logoutUser())
  }

  const handleDropdown = (e) => {
    toggleDropdown()
  }

  useEffect(() => {
    dispatch(getFullNameUser(token))
  }, [dispatch, token])

  return (
    <HeaderProfileStyled>
      <OutsideClickHandler onOutsideClick={closeDropdown}>
        <div className="profile" onClick={handleDropdown}>
          <p>{capitalize(fullName)}</p>
          <img src={avatar} alt='Avatar to user' />
        </div>
        <Dropdown isDropdownOpen={isDropdownOpen} title='Opciones'>
          <DropdownOption action={handleLogout}>Cerrar sesión</DropdownOption>
        </Dropdown>
      </OutsideClickHandler>
    </HeaderProfileStyled>
  )
}