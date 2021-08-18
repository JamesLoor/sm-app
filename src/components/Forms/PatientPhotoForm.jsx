/* eslint-disable react/prop-types */
import { useState, useRef } from 'react'
import styled from 'styled-components'
import Button from '../Common/Button'
import addImage from '../../assets/img/addImage.svg'

const PatientPhotoFormStyled = styled.div`
  position: relative;
  width: 100%;
  /* height: 250px; */
  min-height: 250px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  text-align: center;
  /* margin: 0 auto; */
  overflow: hidden;
  box-shadow: var(--box-shadow-default);
  label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: var(--main-color);
    background-image: ${props => (props.image ? `url(${props.image})` : null)};
    background-position: center;
    background-size: cover;
    cursor: pointer;
  }
  label:hover {
    background-color: var(--secundary-color);
  }
  input {
    display: none;
  }
  .buttonDeleteImage {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  .addImageTips img {
    width: 30%;
  }
  .addImageText {
    color: var(--text-white-color)
  }
  .addImageText span {
    font-weight: 500;
    font-size: 24px;
  }
`
const PatientPhotoForm = ({ onchange, value, error, touched }) => {
  const [file, setFile] = useState(null)
  const refAddImage = useRef(null)
  const handleAddImage = e => {
    e.preventDefault()
    const image = refAddImage.current.files[0]
    if (image) setFile(URL.createObjectURL(image))
  }
  const handleDeleteImage = e => {
    e.stopPropagation()
    setFile(null)
  }
  return (
    <PatientPhotoFormStyled image={file}>
      {file && (
        <Button
          className="buttonDeleteImage"
          type="buttonIconError"
          action={handleDeleteImage}
        >
          X
        </Button>
      )}
      <label htmlFor="image" onChange={handleAddImage}>
        {!file && (
          <div className="addImageTips">
            <img src={addImage} alt="images" />
            <p className="addImageText">
              <span>Agregar imagen</span>
              <br />o arrastra y suelta
            </p>
          </div>
        )}
        <input
          ref={refAddImage}
          type="file"
          name="image"
          id="image"
          onChange={onchange}
          value={value}
          error={error}
          touched={Boolean(touched)}
        />
      </label>
    </PatientPhotoFormStyled>
  )
}

export default PatientPhotoForm
