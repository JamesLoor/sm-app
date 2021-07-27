import { useState } from 'react'

export const useDropdown = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false)

  /**
   * Function to open the dropdown
   * isDropdown = true
   */
  const openDropdown = () => setDropdownOpen(true)

  /**
   * Function to close the dropdown
   * isDropdown = false
   */
  const closeDropdown = () => setDropdownOpen(false)

  /**
   * Function to toggle the dropdown
   * isDropdown = !isDropdown
   */
  const toggleDropdown = () => setDropdownOpen(c => !c)

  return [isDropdownOpen, setDropdownOpen, openDropdown, closeDropdown, toggleDropdown]
}