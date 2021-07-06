import React from 'react'
import styled from 'styled-components'
import { useFormik } from 'formik'

// Components
import Box from '../components/Box'
import Input from '../components/Input'
import Button from '../components/Button'

// Services
import { loginService } from '../services/auth'

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
`
export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async (user) => {
      console.log(user)
      const result = await loginService(user)
      console.log(result)
    }
  })

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
          <Button type="submit" backgroundColor="#093B32">Iniciar Sesión</Button>
        </form>
      </Box>
    </LoginStyled>
  )
}