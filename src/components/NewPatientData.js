import React from 'react'
import styled from 'styled-components'
import { useFormik } from 'formik'
import * as Yup from 'yup'

// Components
import Input from '../components/Input'
import PhotoPatient from '../components/PhotoPatient'
import Button from './Button'


const NewPatientDataStyled = styled.form`
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
    color: #6C6C6C;
  }

  /* Grid for inputs
  =========================================*/
  .personalDataInputs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  .formContactInfoInputs {
    display: grid;
    grid-template-columns: .8fr .8fr 1.5fr;
    gap: 10px;
  }
  .formAddressInputs {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }

  /* Grid for buttons
  =========================================*/
  .formButtonContainer {
    display: grid;
    grid-template-columns: repeat(2, 150px);
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
`
export default function NewPatientData() {

  const formik = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      birth: '',
      DNI: '',
      DNIRepresentative: '',
      gender: '',
      phone: '',
      mobile: '',
      email: '',
      address: '',
      postalCode: '',
      mainStreet: '',
      province: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Obligatorio'),
      lastname: Yup.string().required('Obligatorio'),
      birth: Yup.string().required('Obligatorio'),
      DNI: Yup.string().required('Obligatorio'),
      DNIRepresentative: Yup.string().required('Obligatorio'),
      gender: Yup.string().required('Obligatorio'),
      phone: Yup.string(),
      mobile: Yup.string(),
      email: Yup.string(),
      address: Yup.string(),
      postalCode: Yup.string(),
      mainStreet: Yup.string(),
      city: Yup.string()
    }),
    onSubmit: async (values) => {
      console.log(values)
    }
  })

  const handleCancel = () => {
    console.log('Cancelando...')
  }

  return (
    <NewPatientDataStyled onSubmit={formik.handleSubmit}>
      <div className="formPersonalDataContainer">
        <PhotoPatient/>
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
              label="C. Representante"
              name="DNIRepresentative"
              onChange={formik.handleChange}
              value={formik.values.DNIRepresentative}
              error={formik.errors.DNIRepresentative}
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
        <h2 className="formTitle">Datos Personales</h2>
        <div className="formContactInfoInputs">
          <Input
            label="Telófono"
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
          <Input
            label="Correo electrónico"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.errors.email}
          />
        </div>
      </div>

      <div className="formAddressContainer">
        <h2 className="formTitle">Datos Personales</h2>
        <div className="formAddressInputs">
          <Input
            label="Dirección"
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
            name="mainStreet"
            onChange={formik.handleChange}
            value={formik.values.mainStreet}
            error={formik.errors.mainStreet}
          />
          <Input
            label="Ciudad"
            name="city"
            onChange={formik.handleChange}
            value={formik.values.city}
            error={formik.errors.city}
          />
        </div>
      </div>

      <div className="formButtonContainer">
        <Button type="submit" backgroundColor="#093B32" color="#ffffff">
          Guardar
        </Button>
        <Button action={handleCancel} type="button" backgroundColor="#891919" color="#ffffff">
          Cancelar
        </Button>
      </div>
    </NewPatientDataStyled>
  )
}