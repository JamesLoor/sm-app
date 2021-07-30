import styled from 'styled-components'
import defaultAvatar from '../../assets/img/defaultAvatar.svg'

const PatientPhotoStyled = styled.div`
  width: 100%;
  height: 200px;
  background-color: #093b32;
  border-radius: 0 20px 0 0;
  display: grid;
  justify-content: center;
  align-items: center;
`
const PatientPhoto = () => {
  return (
    <PatientPhotoStyled>
      <img src={defaultAvatar} alt="Default avatar" />
    </PatientPhotoStyled>
  )
}

export default PatientPhoto
