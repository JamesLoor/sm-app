import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { loginUser } from '../../redux/authDucks'

const LoginStyled = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 400px);
  height: 100vh;
  width: 100%;
  padding: 20px;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.15);
  .loginContainer {
    width: 100%;
    padding: 20px;
    background-color: #ffffff;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
  }
  form {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
  .loginTitle {
    text-align: center;
    margin: 15px 0;
    font-size: 24px;
    font-weight: 700;
  }
  .loginFailed {
    padding: 0 20px;
    color: red;
    font-size: 14px;
  }
`

export default function Login() {
  const dispatch = useDispatch()
  const history = useHistory()
  const isAuth = useSelector((store) => store.auth.token)
  const isAuthFailed = useSelector((store) => store.auth.isAuthFailed)
  const isLoading = useSelector((store) => store.auth.isLoading)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalido').required('Obligatorio'),
      password: Yup.string().required('Obligatorio')
    }),
    onSubmit: async (user) => {
      dispatch(loginUser(user))
    }
  })

  useEffect(() => {
    if (isAuth) history.push('/')
  }, [isAuth, history])

  return (
    <LoginStyled>
      <div className="loginContainer">
        <p className="loginTitle">Iniciar Sesión</p>
        <form onSubmit={formik.handleSubmit}>
          <Input
            label="Correo electrónico"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.errors.email}
          />
          <Input
            label="Contraseña"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            error={formik.errors.password}
          />
          {isAuthFailed ? (
            <p className="loginFailed">
              Correo electronico y contraseña no registrados
            </p>
          ) : null}
          <Button type="submit" backgroundColor="#093B32" color="#ffffff">
            {isLoading ? 'Cargando...' : 'Iniciar Sesión'}
          </Button>
        </form>
      </div>
    </LoginStyled>
  )
}
