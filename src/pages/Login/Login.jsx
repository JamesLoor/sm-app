/* eslint-disable react/require-default-props */
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useFormik } from 'formik'
import { useHistory } from 'react-router'
import * as Yup from 'yup'
import Input from '../../components/Input'
import Button from '../../components/Button'
import useAuth from '../../hooks/useAuth'

const LoginStyled = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  padding: 20px;
  justify-content: center;
  align-items: center;
  background-color: #f8f8fb;
  .loginPageContainer {
    display: grid;
    grid-template-columns: minmax(auto, 370px);
    justify-content: center;
    align-items: flex-start;
  }
  .loginContainer {
    width: 100%;
    padding: 20px;
    background-color: #ffffff;
    box-shadow: 0px 12px 26px rgba(16, 30, 115, 0.1);
    border-radius: 8px;
  }
  form {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
  .loginTitle {
    text-align: center;
    margin-bottom: 15px;
    font-size: 30px;
    font-weight: 700;
  }
  .loginFailed {
    padding-bottom: 10px;
    color: red;
    font-size: 14px;
  }

  .loginWelcome {
    display: none;
    gap: 12px;
  }

  .loginWelcome h1 {
    font-size: 30px;
  }

  .loginWelcome p {
    font-size: 16px;
    color: #52575c;
  }

  @media screen and (min-width: 768px) {
    .loginTitle {
      font-size: 36px;
    }
    .loginWelcome {
      display: grid;
    }
    .loginWelcome h1 {
      font-size: 36px;
    }
    .loginWelcome p {
      font-size: 20px;
    }
    .loginPageContainer {
      grid-template-columns: 1fr minmax(auto, 370px);
      gap: 20px;
    }
  }

  @media screen and (min-width: 1024px) {
    .loginWelcome h1 {
      font-size: 50px;
    }
  }
`

const Login = () => {
  const history = useHistory()
  const { isAuth, isAuthFailed, isAuthLoading, loginUser } = useAuth()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalido').required('Obligatorio'),
      password: Yup.string().required('Obligatorio')
    }),
    onSubmit: (user) => {
      loginUser(user)
    }
  })

  useEffect(() => {
    if (isAuth) history.push('/')
  }, [isAuth, history])

  return (
    <LoginStyled>
      <div className="wrapper">
        <div className="loginPageContainer">
          <div className="loginWelcome">
            <h1>Bienvenidos a SMedit</h1>
            <p>
              Software que permite a sus doctores administrar pacientes y
              agendas agendas cual sea su especialidad, proporcionando comodas.
            </p>
          </div>

          <div className="loginContainer">
            <p className="loginTitle">Inicia sesión</p>
            {isAuthFailed && (
              <p className="loginFailed">Correo y contraseña incorrectos</p>
            )}
            <form onSubmit={formik.handleSubmit}>
              <Input
                label="Correo electrónico"
                name="email"
                placeholder="example@example.com"
                onChange={formik.handleChange}
                value={formik.values.email}
                error={formik.errors.email}
                touched={formik.touched.email}
              />
              <Input
                label="Contraseña"
                name="password"
                type="password"
                placeholder="······"
                onChange={formik.handleChange}
                value={formik.values.password}
                error={formik.errors.password}
                touched={formik.touched.password}
              />
              <Button
                type="submit"
                backgroundColor="#093B32"
                color="#ffffff"
                backgroundHover="#093B32"
              >
                {isAuthLoading ? 'Cargando...' : 'Iniciar sesión'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </LoginStyled>
  )
}

export default Login
