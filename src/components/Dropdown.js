import styled from "styled-components"

const DropdownStyled = styled.div`
  display: flex;
  flex-flow: column wrap;
  border-radius: 20px;
  box-shadow: 0px 0px 6px #ccc;
  width: 200px;
  padding: 20px;
  background-color: white;
  transition: 300ms all;
  p {
    color: gray;
    font-size: 15px;
    margin-bottom: 5px;
  }
  ul {
    list-style: none;
    li {
      cursor: pointer;
      transition: 300ms all;
    }
    li:hover {
      color: #093B32;
    }
  }
`

export const Dropdown = ({ titleOptions, options }) => {
  options = options.map(option => {
    return <li key={option}> {option} </li>
  })

  return (
    <DropdownStyled>
        <p>{ titleOptions }</p>
        <ul>
          { options }
        </ul>
    </DropdownStyled>
  )
}
