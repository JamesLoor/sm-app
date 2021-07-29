import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { filteredPatientByName } from '../redux/patientDucks'
import lens from '../assets/img/magnifyingGlass.svg'

const SearchStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 25px;
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 300px;
  padding: 7.5px 20px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.05);
  input {
    width: 100%;
    color: #6C6C6C;
  }
`
export default function Search() {

  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')

  const handleSearch = (e) => {
    setInputValue(e.target.value)
    dispatch(filteredPatientByName(e.target.value))
  }

  return (
    <SearchStyled>
      <input type='text' placeholder='Buscar por nombre' value={inputValue} onChange={handleSearch}/>
      <img src={lens} alt='magnifying glass' />
    </SearchStyled>
  )
}