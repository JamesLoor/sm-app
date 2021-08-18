/* eslint-disable react/require-default-props */
import styled from 'styled-components'
import LoginForm from '../../components/Forms/LoginForm'

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
          <LoginForm />
        </div>
      </div>
    </LoginStyled>
  )
}

export default Login
