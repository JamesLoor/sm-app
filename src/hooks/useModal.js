import { useState } from 'react'

const useModal = () => {
  const [isModalOpen, setModalOpen] = useState(false)

  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)
  const toggleModal = () => setModalOpen((c) => !c)

  return { isModalOpen, setModalOpen, openModal, closeModal, toggleModal }
}

export default useModal
