import { useState } from 'react'

export const useModal = () => {
  const [isModalOpen, setModalOpen] = useState(false)

  /**
   * Funcion que permite abrir el modal
   * @returns isOpen = true
   */
  const openModal = () => setModalOpen(true)

  /**
   * Funcion que permite cerrar el modal
   * @returns isOpen = false
   */
  const closeModal = () => setModalOpen(false)

  /**
   * Funcion que permite alteranr el modal entre true y false
   * @returns isOpen = !isOpen
   */
  const toggleModal = () => setModalOpen(c => !c)

  return [isModalOpen, setModalOpen, openModal, closeModal, toggleModal]
}