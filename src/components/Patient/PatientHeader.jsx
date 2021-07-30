import PropTypes from 'prop-types'
import styled from 'styled-components'
import ButtonIcon from '../ButtonIcon'

const PatientHeaderStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 100px;
  gap: 10px;
  .patientHeaderTitle {
    color: #777676;
    font-size: 30px;
  }
  .patientHeaderButton {
    width: 40px;
    color: #fff;
    font-size: 36px;
    background-color: #093b32;
    border-radius: 50%;
  }
`

const PatientHeader = ({ title }) => {
  return (
    <PatientHeaderStyled>
      <p className="patientHeaderTitle">{title}</p>
      {/* <button className="patientHeaderButton">+</button> */}
      <ButtonIcon alt="Añadir" />
    </PatientHeaderStyled>
  )
}

PatientHeader.propTypes = {
  title: PropTypes.string.isRequired
}

export default PatientHeader
