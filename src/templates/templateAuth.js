import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import ComponentVisualInput from '../components/componentVisualInput';
import ComponentVisualButton from '../components/componentVisualButton';
import { FirebaseContext } from '../data/firebase';
import './css/templateAuth.css';

class templateAuth extends Component {
  constructor(props) {
    super(props);
    this.sendToDataBase = this.sendToDataBase.bind(this);
  }

  sendToDataBase() {
    this.props.sendToDataBase();
  }

  render() {
    return (
      <FirebaseContext.Consumer>
        {firebase => (
          <section className="templateAuth">
            <div className="firstText">
            <h3>Nueva oferta Laboral</h3>
            <h5><u>Volver</u></h5>
            </div>
            <Form>
              <ComponentVisualInput message="Nombre y apellido" className="datesenterprise col-xs-12" validate={this.validateName} />
              <ComponentVisualInput message="Empresa a la que representas" className="datesenterprise col-xs-12" validate={this.validateName} />
              <ComponentVisualInput message="Rut de la empresa" className="datesenterprise col-xs-12" validate={this.validateName} />
              <ComponentVisualInput message="Correo electrónico" className="datesenterprise col-xs-12" validate={this.validateName} />
              <ComponentVisualInput message="Teléfono de contacto" className="datesenterprise col-xs-12" validate={this.validateName} />
              <ComponentVisualInput message="Contraseña" className="datesenterprise col-xs-12" validate={this.validateName} />
              <ComponentVisualInput message="Confirmar contraseña" className="datesenterprise col-xs-12" validate={this.validateName} />
              <ComponentVisualButton
                type="submit"
                name="Crear perfil"
                className="btn_login"
                buttonOnClick={(evt) => {
                  this.sendToDataBase(evt);
                }}
              />
            </Form>
          </section>
        )}

      </FirebaseContext.Consumer>
    );
  }
}

export default templateAuth;