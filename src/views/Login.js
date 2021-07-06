import React from 'react'
import styled from 'styled-components'
import { useFormik } from 'formik'

// Components
import Box from '../components/Box'
import Input from '../components/Input'
import Button from '../components/Button'

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
      username: '',
      password: ''
    },
    onSubmit: async (values) => {
      console.log(values)
    }
  })

  return (
    <LoginStyled>
      <Box>
        <p className="loginTitle">Iniciar Sesión</p>
        <form onSubmit={formik.handleSubmit}>
          <Input
            label="Usuario"
            name="username"
            onChange={formik.handleChange}
            value={formik.values.date}
          />
          <Input
            label="Contraseña"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.date}
          />
          <Button type="submit" backgroundColor="#093B32">Iniciar Sesión</Button>
        </form>
      </Box>
    </LoginStyled>
  )
}