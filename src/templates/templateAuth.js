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
   }
    this.sendToDataBase = this.sendToDataBase.bind(this);  
  }

   handleOpenModal= () =>{
     this.setState({onOpen:true}) 
   }
  
  handleCloseModal= e =>{
    this.setState({onOpen:false})
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
                  this.handleOpenModal();
                }}
              />
            </Form>
            <ComponentVisualModal 
            confirmation="Se ha creado tu cuenta"
            message="¡Felicitaciones!"
            text="te hemos enviado un correo de verificación"
            onClose={this.handleCloseModal}
            onOpen={this.state.onOpen}
            />
          </section>
        )}

      </FirebaseContext.Consumer>
    );
  }
}

export default templateAuth;