import styled from 'styled-components'
import Header from '../../components/Common/Header'

const HomeStyled = styled.div`
  min-height: 100vh;
  .homeContent {
    padding: 10px;
  }
`
const Home = () => {
  return (
    <HomeStyled>
      <Header />
      <div className="homeContent">
        <h1>Home</h1>
      </div>
    </HomeStyled>
  )
}

export default Home
