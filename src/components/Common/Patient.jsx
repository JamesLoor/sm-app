/* eslint-disable react/prop-types */
import styled from 'styled-components'
import { useHistory } from 'react-router'
import Modal from './Modal'
import useModal from '../../hooks/useModal'
import Button from './Button'
import usePatient from '../../hooks/usePatient'
import useAuth from '../../hooks/useAuth'

const PatientStyled = styled.div`
  width: 690px;
  display: grid;
  grid-template-columns: 160px 200px 100px 100px 60px;
  align-items: center;
  grid-gap: 10px;
  padding: 20px;
  &:hover {
    background-color: var(--gray-light-color);
  }
  & span {
    overflow-x: scroll;
    overflow-y: hidden;
    &::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }
  }
  @media (min-width: 768px) {
    width: 100%;
    grid-template-columns: 1.6fr 2fr 1fr 1fr 0.6fr;
  }
`
const Patient = ({ _id, name, lastname, email, DNI, phone }) => {
  const history = useHistory()
  const { tokenJWT } = useAuth()
  const { deletePatient } = usePatient()
  const { isModalOpen, openModal, setModalOpen } = useModal()

  const handleClickPatient = () => {
    history.push(`/paciente/${_id}`)
  }

  const handleDeletePatient = e => {
    e.stopPropagation()
    openModal()
  }

  return (
    <PatientStyled id={_id} onDoubleClick={handleClickPatient}>
      <span>{`${name} ${lastname}`}</span>
      <span>{email}</span>
      <span>{DNI}</span>
      <span>{phone}</span>
      <Button type="buttonIconError" action={handleDeletePatient}>
        X
      </Button>

      <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen}>
        <div className="modalContainer">
          <div className="modalTitle">
            <p>
              ¿Estas seguro de eliminar el paciente {name} {lastname}?
            </p>
          </div>

          <div className="modalBody">
            <p>
              Recuerda que se eliminaran sus documentos y puede ser perjudicial.
            </p>
          </div>

          <div className="modalButtons">
            <Button type="button" action={() => deletePatient(tokenJWT, _id)}>
              Eliminar
            </Button>
            <Button type="buttonError" action={() => setModalOpen(false)}>
              Cancelar
            </Button>
          </div>
        </div>
      </Modal>
    </PatientStyled>
  )
}

export default Patient
