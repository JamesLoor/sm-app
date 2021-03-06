import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import * as Yup from 'yup'
import { saveNewPatient } from '../../redux/patientDucks'
import { cleanObject } from '../../utils/cleanObject'
import Button from '../Button'
import Input from '../Input'
import PatientPhoto from './PatientPhoto'

const PatientFormNewStyled = styled.form`
  display: grid;
  gap: 20px;
  .formPersonalDataContainer {
    display: grid;
    grid-template-columns: 190px 1fr;
    gap: 25px;
  }
  .formTitle {
    font-size: 30px;
    font-weight: normal;
    color: #6c6c6c;
  }

  .personalDataInputs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  .formContactInfoInputs {
    display: grid;
    grid-template-columns: 1.5fr 0.8fr 0.8fr;
    gap: 10px;
  }
  .formAddressInputs {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }

  .formButtonContainer {
    display: grid;
    grid-template-columns: repeat(2, 150px);
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
`
const PatientFormNew = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const token = useSelector((store) => store.auth.token)
  const formik = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      DNI: '',
      birth: '',
      gender: '',
      phone: '',
      mobile: '',
      email: '',
      address: '',
      postalCode: '',
      street: '',
      province: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Obligatorio'),
      lastname: Yup.string().required('Obligatorio'),
      DNI: Yup.string().required('Obligatorio'),
      birth: Yup.string(),
      gender: Yup.string(),
      phone: Yup.string(),
      mobile: Yup.string(),
      email: Yup.string().email('Invalido').required('Obligatorio'),
      address: Yup.string(),
      postalCode: Yup.string(),
      street: Yup.string(),
      province: Yup.string()
    }),
    onSubmit: async (newPatient) => {
      const wasSaved = await dispatch(
        saveNewPatient(token, cleanObject(newPatient))
      )
      if (wasSaved) history.push('/patient')
    }
  })

  const handleCleanForm = () => formik.resetForm()

  return (
    <PatientFormNewStyled onSubmit={formik.handleSubmit}>
      <div className="formPersonalDataContainer">
        <PatientPhoto />
        <div className="personalData">
          <h2 className="formTitle">Datos Personales</h2>
          <div className="personalDataInputs">
            <Input
              label="Nombre"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              error={formik.errors.name}
            />
            <Input
              label="Apellidos"
              name="lastname"
              onChange={formik.handleChange}
              value={formik.values.lastname}
              error={formik.errors.lastname}
            />
            <Input
              label="F. nacimiento"
              name="birth"
              onChange={formik.handleChange}
              value={formik.values.birth}
              error={formik.errors.birth}
            />
            <Input
              label="Cedula"
              name="DNI"
              onChange={formik.handleChange}
              value={formik.values.DNI}
              error={formik.errors.DNI}
            />
            <Input
              label="Genero"
              name="gender"
              onChange={formik.handleChange}
              value={formik.values.gender}
              error={formik.errors.gender}
            />
          </div>
        </div>
      </div>

      <div className="formContactInfoContainer">
        <h2 className="formTitle">Informaci??n de contacto</h2>
        <div className="formContactInfoInputs">
          <Input
            label="Correo electr??nico"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.errors.email}
          />
          <Input
            label="Tel??fono"
            name="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
            error={formik.errors.phone}
          />
          <Input
            label="Celular"
            name="mobile"
            onChange={formik.handleChange}
            value={formik.values.mobile}
            error={formik.errors.mobile}
          />
        </div>
      </div>

      <div className="formAddressContainer">
        <h2 className="formTitle">Direcci??n</h2>
        <div className="formAddressInputs">
          <Input
            label="Direcci??n"
            name="address"
            onChange={formik.handleChange}
            value={formik.values.address}
            error={formik.errors.address}
          />
          <Input
            label="Codigo postal"
            name="postalCode"
            onChange={formik.handleChange}
            value={formik.values.postalCode}
            error={formik.errors.postalCode}
          />
          <Input
            label="Calle principal"
            name="street"
            onChange={formik.handleChange}
            value={formik.values.street}
            error={formik.errors.street}
          />
          <Input
            label="Ciudad"
            name="province"
            onChange={formik.handleChange}
            value={formik.values.province}
            error={formik.errors.province}
          />
        </div>
      </div>

      <div className="formButtonContainer">
        <Button type="submit" backgroundColor="#093B32" color="#ffffff">
          Guardar
        </Button>
        <Button
          action={handleCleanForm}
          type="button"
          backgroundColor="#ffffff"
          color="#6C6C6C"
        >
          Limpiar
        </Button>
      </div>
    </PatientFormNewStyled>
  )
}

export default PatientFormNew
