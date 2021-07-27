import { useState } from 'react'

export const useModal = () => {
  const [isModalOpen, setModalOpen] = useState(false)

  /**
   * Funcion to open the modal
   * isOpen = true
   */
  const openModal = () => setModalOpen(true)

  /**
   * Funcion to close the modal
   * isOpen = false
   */
  const closeModal = () => setModalOpen(false)

  /**
   * Function to toggle the modal
   * isOpen = !isOpen
   */
  const toggleModal = () => setModalOpen(c => !c)

  return [isModalOpen, setModalOpen, openModal, closeModal, toggleModal]
}