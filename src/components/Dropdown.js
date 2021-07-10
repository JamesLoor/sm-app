import styled from "styled-components"

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

export const Dropdown = ({ titleOptions, options }) => {
  options = options.map(option => {
    return <li key={option.props.children}> {option} </li>
  })

  return (
    <DropdownStyled>
        <p className='titleOptions'>{titleOptions}</p>
        <ul>{options}</ul>
    </DropdownStyled>
  )
}
