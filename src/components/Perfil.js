import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

// Redux
import { getFullNameUser } from '../redux/userDucks'

// Static
import avatar from '../assets/img/avatar.svg'

// Utils
import { capitalize } from '../utils/capitalize'

const PerfilStyled = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 5px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
export default function Perfil() {

  const dispatch = useDispatch()
  const token = useSelector(store => store.auth.token)
  const fullName = useSelector(store => store.user.fullName) || ''

  useEffect(() => {
    dispatch(getFullNameUser(token))
  }, [token, dispatch])

  return (
    <PerfilStyled>
      <p>{capitalize(fullName)}</p>
      <img src={avatar} alt="Avatar to user" />
    </PerfilStyled>
  )
}