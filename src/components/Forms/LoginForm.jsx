import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useHistory } from 'react-router'
import { useEffect } from 'react'
import styled from 'styled-components'
import Input from '../Common/Input'
import Button from '../Common/Button'
import useAuth from '../../hooks/useAuth'

const LoginFormStyled = styled.div`
  padding: 20px;
  border-radius: 8px;
  background-color: var(--background-box-color);
  box-shadow: var(--box-shadow-default);
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

  @media screen and (min-width: 768px) {
    .loginTitle {
      font-size: 36px;
    }
  }
`
const LoginForm = () => {
  const history = useHistory()
  const { isAuth, isAuthFailed, isAuthLoading, loginUser } = useAuth()
  const initialValues = { email: '', password: '' }
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalido').required('Obligatorio'),
    password: Yup.string().required('Obligatorio')
  })
  const onSubmit = user => loginUser(user)
  const formik = useFormik({ initialValues, validationSchema, onSubmit })

  useEffect(() => {
    if (isAuth) history.push('/')
  }, [isAuth, history])

  return (
    <LoginFormStyled>
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
        <Button type="submit">
          {isAuthLoading ? 'Cargando...' : 'Iniciar sesión'}
        </Button>
      </form>
    </LoginFormStyled>
  )
}

export default LoginForm
