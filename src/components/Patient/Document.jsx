import PropTypes from 'prop-types'
import styled from 'styled-components'
import ButtonIcon from '../ButtonIcon'

const DocumentStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 120px;
  gap: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #6c6c6c;
  padding: 8px 20px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  .DocumentsListButtons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
`
const Document = ({ date, type, name }) => {
  return (
    <DocumentStyled>
      <p>{date}</p>
      <p>{type}</p>
      <p>{name}</p>
      <div className="DocumentsListButtons">
        <ButtonIcon alt="Descargar" />
        <ButtonIcon alt="Eliminar" />
      </div>
    </DocumentStyled>
  )
}

/*
    |￣￣￣￣￣  
    | // TODO: Fix type of props
    |＿＿＿_ 
(\__/)|| 
(•ㅅ•)|| 
/  づ
*/

Document.propTypes = {
  date: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Document
