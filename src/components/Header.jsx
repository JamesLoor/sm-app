import PropTypes from 'prop-types'
import styled from 'styled-components'
import HeaderProfile from './HeaderProfile'

const HeaderStyled = styled.header`
  position: relative;
  width: 100%;
  background-color: #ffffff;
  padding: 10px 0;
  min-height: 64px;
  box-shadow: 0px 0px 7px #1111117a;
  display: grid;
  .wrapperHeader {
    padding: 0px 20px;
    margin: 0 auto;
    display: inherit;
    justify-content: inherit;
    align-items: inherit;
    width: inherit;
  }
  .containerHeader {
    display: grid;
    grid-template-columns: auto auto;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    grid-gap: 40px;

    .logo {
      width: 100%;
      font-weight: 600;
      font-size: 18px;
    }
  }
  .logoutTesting {
    cursor: pointer;
  }
  .dropdownHeader {
    display: none;
    position: fixed;
    right: 50px;
    top: 50px;
  }
  .contentHeader {
    display: grid;
    grid-auto-flow: column;
    gap: 10px;
  }
`
const Header = ({ children }) => {
  return (
    <HeaderStyled>
      <div className="wrapperHeader">
        <div className="containerHeader">
          <div className="contentHeader">{children}</div>
          <HeaderProfile />
        </div>
      </div>
    </HeaderStyled>
  )
}

Header.propTypes = {
  children: PropTypes.node.isRequired
}

export default Header
