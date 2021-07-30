import PropTypes from 'prop-types'
import styled from 'styled-components'
import Sidebar from './Sidebar/Sidebar'

const LayoutStyled = styled.div`
  display: grid;
  grid-template-columns: 50px auto;
  min-height: 100vh;
  top: 0px;
  bottom: 0px;
  z-index: 999;
  .contentAuth {
    position: relative;
    right: 0;
  }
`
const Layout = ({ children }) => {
  return (
    <LayoutStyled>
      <Sidebar />
      <div className="contentAuth">{children}</div>
    </LayoutStyled>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
