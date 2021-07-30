import styled from 'styled-components'
import Header from '../../components/Header'

const HomeStyled = styled.div`
  .homeContainer {
    padding: 20px;
  }
`
const Home = () => {
  return (
    <HomeStyled>
      <Header />
      <div className="homeContainer">
        <h1>Home</h1>
      </div>
    </HomeStyled>
  )
}

export default Home
