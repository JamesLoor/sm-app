/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import avatar from '../../assets/img/avatar.svg'
import useDropdown from '../../hooks/useDropdown'
import { getFullNameUser } from '../../redux/userDucks'
import capitalize from '../../utils/capitalize'
import Dropdown from './Dropdown'
import DropdownOption from './DropdownOption'
import useAuth from '../../hooks/useAuth'

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
  .profileFullName {
    display: none;
  }
  @media (min-width: 768px) {
    .profileFullName {
      display: block;
    }
  }
`
const HeaderProfile = () => {
  const { logoutUser, tokenJWT } = useAuth()
  const { isDropdownOpen, toggleDropdown, closeDropdown } = useDropdown(false)
  const dispatch = useDispatch()
  const fullName = useSelector(store => store.user.fullName) || ''

  const handleDropdown = () => {
    toggleDropdown()
  }

  useEffect(() => {
    dispatch(getFullNameUser(tokenJWT))
  }, [dispatch, tokenJWT])

  return (
    <HeaderProfileStyled>
      <OutsideClickHandler onOutsideClick={closeDropdown}>
        <div className="profile" onClick={handleDropdown}>
          <p className="profileFullName">{capitalize(fullName)}</p>
          <img src={avatar} alt="Avatar to user" />
        </div>
        <Dropdown isDropdownOpen={isDropdownOpen} title="Opciones">
          <DropdownOption action={() => logoutUser()}>
            Cerrar sesión
          </DropdownOption>
        </Dropdown>
      </OutsideClickHandler>
    </HeaderProfileStyled>
  )
}

export default HeaderProfile
