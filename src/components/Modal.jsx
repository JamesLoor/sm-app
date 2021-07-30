import { useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ReactDOM from 'react-dom'

const ModalStyled = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
  padding: 20px;
  cursor: pointer;
`

const ModalWindow = styled.div`
  background: #ffffff;
  box-shadow: rgb(0 0 0 / 20%) 0px 0px 10px 0px;
  border-radius: 15px;
  padding: 20px;
  overflow-y: scroll;
  cursor: default;
  max-width: 90%;
  max-height: 90%;
  .modalContainer {
    display: grid;
    grid-auto-flow: row;
    gap: 10px;
  }
  .modalTitle {
    font-size: 20px;
    font-weight: bold;
  }
  .modalBody {
    /*  */
  }
  .modalButtons {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`

/*
    |￣￣￣￣￣  
    | // TODO: Improve this
    |＿＿＿_ 
(\__/)|| 
(•ㅅ•)|| 
/  づ
*/

const ModalContainer = document.getElementById('modalContainer')

const Modal = ({ children, isModalOpen, setModalOpen }) => {
  const modalbackground = useRef(null)
  const handleModal = (e) => {
    if (modalbackground.current === e.target) {
      setModalOpen(false)
    }
  }

  if (isModalOpen) {
    return ReactDOM.createPortal(
      <ModalStyled ref={modalbackground} onClick={handleModal}>
        <ModalWindow>{children}</ModalWindow>
      </ModalStyled>,
      ModalContainer
    )
  }
  return null
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isModalOpen: PropTypes.boolisRequired,
  setModalOpen: PropTypes.func.isRequired
}

export default Modal
