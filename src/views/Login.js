import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useFormik } from 'formik'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

// Components
import Box from '../components/Box'
import Input from '../components/Input'
import Button from '../components/Button'

// Redux
import { loginUser } from '../redux/userDucks'

const LoginStyled = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 400px);
  height: 100vh;
  width: 100%;
  padding: 20px;
  justify-content: center;
  align-items: center;
  .loginTitle {
    text-align: center;
    margin: 15px 0;
    font-size: 24px;
    font-weight: 700;
  }
  /* Component LOADER */
  
`
export default function Login() {

  const dispatch = useDispatch()
  const history = useHistory()
  const isLogged = useSelector(store => store.user.isLogged)
  const isLoading = useSelector(store => store.user.isLoading)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async (user) => {
      dispatch(loginUser(user))
    }
  })

  useEffect(() => {
    if(isLogged) history.push('/')
  }, [isLogged, history])

  return (
    <LoginStyled>
      <Box>
        <p className="loginTitle">Iniciar Sesión</p>
        <form onSubmit={formik.handleSubmit}>
          <Input
            label="Correo"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <Input
            label="Contraseña"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <Button type="submit" backgroundColor="#093B32">
            {isLoading ? "Cargando..." : "Iniciar Sesión"}
          </Button>
        </form>
      </Box>
    </LoginStyled>
  )
}