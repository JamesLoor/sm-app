import { useState } from 'react'

const useDropdown = (initialState) => {
  const [isDropdownOpen, setDropdownOpen] = useState(initialState)

  const openDropdown = () => setDropdownOpen(true)

  const closeDropdown = () => setDropdownOpen(false)

  const toggleDropdown = () => setDropdownOpen((c) => !c)

  return {
    isDropdownOpen,
    toggleDropdown,
    openDropdown,
    closeDropdown
  }
}

export default useDropdown
