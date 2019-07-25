/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import ComponentVisualInput from '../components/componentVisualInput';
import ComponentVisualButton from '../components/componentVisualButton';
import ComponentVisualModal from '../components/componentVisualModal';
import { FirebaseContext } from '../data/firebase';
import './css/templateAuth.css';

class templateAuth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onOpen: false,
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ onOpen: true });
  }

  handleCloseModal() {
    this.setState({ onOpen: false });
    Array.from(document.getElementsByClassName('datesenterprise')).forEach((element) => {
      element.value = '';
    });
  }

  handleSubmit(evt) {
    // this.props.sendToDataBase();
    evt.preventDefault();
    this.handleOpenModal();
  }

  render() {
    return (
      <FirebaseContext.Consumer>
        {firebase => (
          <section className="templateAuth">
            <div className="firstText">
              <h3>Necesitamos tus datos</h3>
              <h5><u>Volver</u></h5>
            </div>
            <Form onSubmit={(event) => { this.handleSubmit(event); }}>
              <ComponentVisualInput message="Nombre y apellido" className="datesenterprise col-xs-12" placeholder="Juan Perez" validate={this.validateName} name="nombre" />
              <ComponentVisualInput message="Empresa a la que representas" className="datesenterprise col-xs-12" placeholder="XYZ ltda." validate={this.validateName} />
              <ComponentVisualInput message="Rut de la empresa" className="datesenterprise col-xs-12" placeholder="00000000-0" validate={this.validateName} />
              <ComponentVisualInput message="Correo electrónico" className="datesenterprise col-xs-12" placeholder="ejemplo@ejemplo.cl" validate={this.validateName} />
              <ComponentVisualInput message="Teléfono de contacto" className="datesenterprise col-xs-12" placeholder="+56 900000000" validate={this.validateName} />
              <ComponentVisualInput message="Contraseña" className="datesenterprise col-xs-12" placeholder="**********" validate={this.validateName} />
              <ComponentVisualInput message="Confirmar contraseña" className="datesenterprise col-xs-12" placeholder="**********" validate={this.validateName} />
              <ComponentVisualButton
                type="submit"
                name="Crear perfil"
                className="btn_login"
                buttonOnClick={() => {}}
              />
            </Form>
            <ComponentVisualModal
              confirmation="Se ha creado tu cuenta"
              message="¡Felicitaciones!"
              text="te hemos enviado un correo de verificación"
              onClose={this.handleCloseModal}
              isOpen={this.state.onOpen}
            />
          </section>
        )}

      </FirebaseContext.Consumer>
    );
  }
}

export default templateAuth;
