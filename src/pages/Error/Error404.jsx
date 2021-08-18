import styled from 'styled-components'

const Error404Styled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Error404 = () => {
  return (
    <Error404Styled>
      <h1>Error 404 | Ruta no especificada</h1>
    </Error404Styled>
  )
}

export default Error404
