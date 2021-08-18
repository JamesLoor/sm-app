/* eslint-disable no-console */
import * as Yup from 'yup'
import { useFormik } from 'formik'
// import { useHistory } from 'react-router'
// import useAuth from '../hooks/useAuth'
// import usePatient from '../hooks/usePatient'
import styled from 'styled-components'
import Input from '../Common/Input'
import Button from '../Common/Button'
import PatientPhotoForm from './PatientPhotoForm'
// import cleanObject from '../utils/cleanObject'

const PatientFormStyled = styled.div`
  width: 100%;
  form {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    gap: 10px;
    @media (min-width: 634px) {
      grid-template-columns: 1fr 1fr;
      gap: 25px;
    }
    @media (min-width: 1024px) {
      grid-template-columns: 1fr 2fr;
      gap: 25px;
    }
  }
  .inputListContainer {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    @media (min-width: 1024px) {
    }
  }
  .inputListTitle {
    font-size: 24px;
    margin-bottom: 20px;
  }
`
const PatientForm = () => {
  // const history = useHistory()
  // const { createPatient } = usePatient()
  // const { tokenJWT } = useAuth()
  const initialValues = {
    image: '',
    name: '',
    lastname: '',
    DNI: '',
    DNIRepresentative: '',
    gender: '',
    birth: ''
  }
  const validationSchema = Yup.object({
    image: Yup.string(),
    name: Yup.string().required('Obligatorio'),
    lastname: Yup.string().required('Obligatorio'),
    DNI: Yup.string()
      .min(10, 'Solo 10 digitos')
      .max(11, 'Solo 10 digitos')
      .required('Obligatorio'),
    DNIRepresentative: Yup.string(),
    gender: Yup.string(),
    birth: Yup.date()
  })
  const onSubmit = async newPatient => {
    console.log(newPatient)
    // console.log(cleanObject(newPatient))
    // const createdPatient = await createPatient(tokenJWT, newPatient)
    // if (createdPatient) history.push('/pacientes')
  }
  const formik = useFormik({ initialValues, validationSchema, onSubmit })
  return (
    <PatientFormStyled>
      <form onSubmit={formik.handleSubmit}>
        <PatientPhotoForm
          onchange={formik.handleChange}
          value={formik.values.image}
          error={formik.errors.image}
          touched={formik.touched.image}
        />
        <div className="inputList">
          <h3 className="inputListTitle">Información Basica</h3>
          <div className="inputListContainer">
            <Input
              label="Nombre"
              name="name"
              placeholder="Lionel"
              onChange={formik.handleChange}
              value={formik.values.name}
              error={formik.errors.name}
              touched={formik.touched.name}
            />
            <Input
              label="Apellidos"
              name="lastname"
              placeholder="Cuccittini"
              onChange={formik.handleChange}
              value={formik.values.lastname}
              error={formik.errors.lastname}
              touched={formik.touched.lastname}
            />
            <Input
              label="Cedula"
              name="DNI"
              placeholder="0999999999"
              onChange={formik.handleChange}
              value={formik.values.DNI}
              error={formik.errors.DNI}
              touched={formik.touched.DNI}
            />
            <Input
              label="Cedula Representante"
              name="DNIRepresentative"
              placeholder="0999999999"
              onChange={formik.handleChange}
              value={formik.values.DNIRepresentative}
              error={formik.errors.DNIRepresentative}
              touched={formik.touched.DNIRepresentative}
            />
            <Input
              label="Genero"
              name="gender"
              placeholder="Femenino"
              onChange={formik.handleChange}
              value={formik.values.gender}
              error={formik.errors.gender}
              touched={formik.touched.gender}
            />
            <Input
              label="F. nacimiento"
              name="birth"
              placeholder="11/01/2001"
              onChange={formik.handleChange}
              value={formik.values.birth}
              error={formik.errors.birth}
              touched={formik.touched.birth}
            />
          </div>
        </div>
        <Button type="submit">Guardar</Button>
      </form>
    </PatientFormStyled>
  )
}

export default PatientForm
