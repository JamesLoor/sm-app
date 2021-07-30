import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Button from '../Button'
import Modal from '../Modal'
import { deletePatientById } from '../../redux/patientDucks'
import useModal from '../../hooks/useModal'

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
    color: #6c6c6c;
  }
`
const Patient = ({ _id, dni, name, lastname, address, phone }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const token = useSelector((store) => store.auth.token)
  const [isModalOpen, setModalOpen] = useModal()

  const handleClickPatient = () => {
    history.push(`/patient/${_id}`)
  }

  const handleDelete = (e) => {
    e.stopPropagation()
    setModalOpen(true)
  }

  return (
    <>
      <PatientStyled id={_id} onClick={handleClickPatient}>
        <ul className="patient">
          <li>{dni}</li>
          <li>{name}</li>
          <li>{lastname}</li>
          <li>{address}</li>
          <li>{phone}</li>
          <li>
            <Button
              action={handleDelete}
              type="button"
              backgroundColor="#891919"
              backgroundColorHover="#891919"
              color="#ffffff"
            >
              X
            </Button>
          </li>
        </ul>
      </PatientStyled>
      <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen}>
        <div className="modalContainer">
          <div className="modalTitle">
            <p>
              Estas seguro de eliminar el paciente {name} {lastname}?
            </p>
          </div>

          <div className="modalBody">
            <p>
              Recuerda que se eliminaran tambien sus documentos y puede ser
              perjudicial
            </p>
          </div>

          <div className="modalButtons">
            <Button
              action={() => dispatch(deletePatientById(token, _id))}
              type="button"
              backgroundColor="#891919"
              color="#ffffff"
            >
              Eliminar
            </Button>
            <Button action={() => setModalOpen(false)} type="button">
              Cancelar
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}

Patient.propTypes = {
  _id: PropTypes.string.isRequired,
  dni: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
}

export default Patient
