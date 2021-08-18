import { useState } from 'react'
import styled from 'styled-components'
import lens from '../../assets/img/magnifyingGlass.svg'
import usePatient from '../../hooks/usePatient'

const SearchStyled = styled.div`
  display: grid;
  grid-template-columns: 25px 1fr;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 7.5px 20px;
  border-radius: 20px;
  box-shadow: var(--box-shadow-short);
  input::placeholder {
    color: var(--gray-color);
  }
  input {
    width: 100%;
    color: var(--black-color);
  }
`
const Search = () => {
  const [inputValue, setInputValue] = useState('')
  const { searchPatientByName } = usePatient()

  const handleSearch = (e) => {
    const quest = e.target.value
    setInputValue(quest)
    searchPatientByName(quest)
  }

  return (
    <SearchStyled>
      <img src={lens} alt="magnifying glass" />
      <input
        type="text"
        placeholder="Buscar"
        value={inputValue}
        onChange={handleSearch}
      />
    </SearchStyled>
  )
}

export default Search
