import styled from 'styled-components'
import PropTypes from 'prop-types'
import SideBar from './SideBar'

const LayoutStyled = styled.div`
  main {
    background-color: var(--background-main-color);
    padding-left: 60px;
  }
`
const Layout = ({ children }) => {
  return (
    <LayoutStyled>
      <SideBar />
      <main>{children}</main>
    </LayoutStyled>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
