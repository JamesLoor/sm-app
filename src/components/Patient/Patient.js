import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

// Components
import Button from '../Button'
import { Modal } from '../Modal'

// Redux
import { deletePatientById } from '../../redux/patientDucks'

// Hooks
import { useModal } from '../../hooks/useModal'

const PatientStyled = styled.div`
  padding: 8px 20px;
  border-radius: 20px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  .patient {
    display: grid;
    grid-template-columns: 1fr 1.2fr 1.4fr 1.6fr 1fr 40px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #6C6C6C;
  }
`
export default function Patient({_id, dni, name, lastname, address, phone}){

  const history = useHistory()
  const dispatch = useDispatch()
  const token = useSelector(store => store.auth.token)
  const [isModalOpen, setModalOpen] = useModal()

  /**
   * Funcion que enviara al usuario a los detalles del paciente clickeado
   */
  const handleClickPatient = (e) => {
    history.push(`/patient/${_id}`)
  }

  /**
   * Funcion que eliminara un paciente de la lista
   */
  const handleDelete = (e) => {
    e.stopPropagation()
    setModalOpen(true)
  }

  return (
    <>
      <PatientStyled id={_id} onClick={handleClickPatient}>
        <ul className='patient'>
          <li>{dni}</li>
          <li>{name}</li>
          <li>{lastname}</li>
          <li>{address}</li>
          <li>{phone}</li>
          <li>
            <Button action={handleDelete} type='button' backgroundColor='#891919' color='#ffffff'>
              X
            </Button>
          </li>
        </ul>
      </PatientStyled>
      <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen}>
        <div className="modalContainer">
          <div className='modalTitle'>
            <p>Estas seguro de eliminar el paciente {name} {lastname}?</p>
          </div>

          <div className="modalBody">
            <p>Recuerda que se eliminaran tambien sus documentos y puede ser perjudicial</p>
          </div>

          <div className='modalButtons'>
            <Button action={() => dispatch(deletePatientById(token, _id))} type='button' backgroundColor='#891919' color='#ffffff'>
              Eliminar
            </Button>
            <Button action={() => setModalOpen(false)} type='button'>
              Cancelar
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}