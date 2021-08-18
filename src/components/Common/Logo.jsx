import styled from 'styled-components'

const LogoStyled = styled.figure`
  display: grid;
  grid-template-columns: auto 1fr;
  justify-content: flex-start;
  align-items: center;
  grid-gap: 10px;
  width: 100%;
  user-select: none;
  .circleLogo {
    background-color: #093b32;
    padding: 10px;
    border-radius: 999px;
    text-align: center;
    p {
      font-size: 25px;
      font-weight: bold;
      color: white;
    }
  }
  .textLogo {
    font-size: 25px;
    font-weight: bold;
  }
`

const Logo = () => {
  return (
    <LogoStyled>
      <div className="circleLogo">
        <p>SM</p>
      </div>
      <p className="textLogo">Medit</p>
    </LogoStyled>
  )
}

export default Logo
