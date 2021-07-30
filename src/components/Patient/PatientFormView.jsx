import PropTypes from 'prop-types'
import styled from 'styled-components'
import Input from '../Input'
import Button from '../Button'
import PatientPhoto from './PatientPhoto'

const PatientFormNewStyled = styled.div`
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
    grid-auto-flow: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
`
const PatientFormNew = ({
  patient: {
    name,
    lastname,
    DNI,
    birth,
    gender,
    phone,
    mobile,
    email,
    address,
    postalCode,
    street,
    province
  }
}) => {
  const isView = true
  const handleClick = () => console.log('Editando...')

  return (
    <PatientFormNewStyled>
      <div className="formPersonalDataContainer">
        <PatientPhoto />
        <div className="personalData">
          <h2 className="formTitle">Datos Personales</h2>
          <div className="personalDataInputs">
            <Input label="Nombre" name="name" value={name} disabled={isView} />
            <Input
              label="Apellidos"
              name="lastname"
              value={lastname}
              disabled={isView}
            />
            <Input
              label="F. nacimiento"
              name="birth"
              value={birth}
              disabled={isView}
            />
            <Input label="Cedula" name="DNI" value={DNI} disabled={isView} />
            <Input
              label="Genero"
              name="gender"
              value={gender}
              disabled={isView}
            />
          </div>
        </div>
      </div>

      <div className="formContactInfoContainer">
        <h2 className="formTitle">Información de contacto</h2>
        <div className="formContactInfoInputs">
          <Input
            label="Correo electrónico"
            name="email"
            value={email}
            disabled={isView}
          />
          <Input
            label="Telófono"
            name="phone"
            value={phone}
            disabled={isView}
          />
          <Input
            label="Celular"
            name="mobile"
            value={mobile}
            disabled={isView}
          />
        </div>
      </div>

      <div className="formAddressContainer">
        <h2 className="formTitle">Dirección</h2>
        <div className="formAddressInputs">
          <Input
            label="Dirección"
            name="address"
            value={address}
            disabled={isView}
          />
          <Input
            label="Codigo postal"
            name="postalCode"
            value={postalCode}
            disabled={isView}
          />
          <Input
            label="Calle principal"
            name="street"
            value={street}
            disabled={isView}
          />
          <Input
            label="Ciudad"
            name="province"
            value={province}
            disabled={isView}
          />
        </div>
      </div>

      <div className="formButtonContainer">
        <Button
          type="button"
          action={handleClick}
          backgroundColor="#093B32"
          color="#ffffff"
        >
          Editar
        </Button>
      </div>
    </PatientFormNewStyled>
  )
}

/*
    |￣￣￣￣￣  
    | // TODO: Fix this
    |＿＿＿_ 
(\__/)|| 
(•ㅅ•)|| 
/  づ
*/

PatientFormNew.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  patient: PropTypes.object.isRequired
}

export default PatientFormNew
