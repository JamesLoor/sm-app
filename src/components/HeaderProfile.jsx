/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import avatar from '../assets/img/avatar.svg'
import { useDropdown } from '../hooks/useDropdown'
import { logoutUser } from '../redux/authDucks'
import { getFullNameUser } from '../redux/userDucks'
import { capitalize } from '../utils/capitalize'
import { Dropdown } from './Dropdown/Dropdown'
import DropdownOption from './Dropdown/DropdownOption'

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
const HeaderProfile = () => {
  const { isDropdownOpen, toggleDropdown, closeDropdown } = useDropdown(false)
  const dispatch = useDispatch()
  const token = useSelector((store) => store.auth.token)
  const fullName = useSelector((store) => store.user.fullName) || ''
  const handleLogout = () => {
    dispatch(logoutUser())
  }

  const handleDropdown = () => {
    toggleDropdown()
  }

  useEffect(() => {
    dispatch(getFullNameUser(token))
  }, [dispatch, token])

  /*
    |￣￣￣￣￣  
    | // TODO: Fix this.
    |＿＿＿_ 
(\__/)|| 
(•ㅅ•)|| 
/  づ
*/

  return (
    <HeaderProfileStyled>
      <OutsideClickHandler onOutsideClick={closeDropdown}>
        <div className="profile" onClick={handleDropdown}>
          <p>{capitalize(fullName)}</p>
          <img src={avatar} alt="Avatar to user" />
        </div>
        <Dropdown isDropdownOpen={isDropdownOpen} title="Opciones">
          <DropdownOption action={handleLogout}>Cerrar sesión</DropdownOption>
        </Dropdown>
      </OutsideClickHandler>
    </HeaderProfileStyled>
  )
}

export default HeaderProfile
