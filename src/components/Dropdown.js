import styled from 'styled-components'

const DropdownStyled = styled.div`
  position: absolute;
  top: 120%;
  right: 0;
  display: flex;
  flex-flow: column wrap;
  border-radius: 20px;
  box-shadow: 0px 0px 6px #ccc;
  padding: 20px;
  background-color: white;
  transition: 300ms all;
  width: 150px;
  .titleOptions {
    color: gray;
    font-size: 12px;
    margin-bottom: 5px;
  }
  ul {
    list-style: none;
    li * {
      cursor: pointer;
      font-weight: 500;
      transition: 300ms all;
      color: black;
      text-decoration: none;
    }
    li *:hover {
      color: #093B32;
    }
  }
`

export const Dropdown = ({ title, children }) => {
  return (
    <DropdownStyled>
        <p className='titleOptions'>{title}</p>
        <ul>{children}</ul>
    </DropdownStyled>
  )
}
