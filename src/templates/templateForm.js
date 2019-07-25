/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import ComponentVisualSelect from '../components/componentVisualSelect';
import ComponentVisualInput from '../components/componentVisualInput';
import ComponentVisualTextArea from '../components/componentVisualTextArea';
import ComponentVisualModal from '../components/componentVisualModal';
import ComponentVisualButton from '../components/componentVisualButton';
import { FirebaseContext } from '../data/firebase';
import './css/templateForm.css';


const selectFile = require('../data/informationSelect');

class templateForm extends Component {
  firebase = {};
  constructor(props) {
    super(props);
    this.state = {
      onOpen: false,
    };
    this.sendToDataBase = this.sendToDataBase.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ onOpen: true });
  }

  handleCloseModal() {
    this.setState({ onOpen: false });
    Array.from(document.getElementsByClassName('cleanform')).forEach((element) => {
      element.value = '';
    });
    Array.from(document.getElementsByClassName('cleanselectorform')).forEach((element) => {
      element.value = 'Selecciona...';
    });
  }

  setupFirebase(firebase) {
    this.firebase = firebase;
  }

  sendToDataBase(event) {
    let formData = new FormData(event.currentTarget);
    let companyApplication = {};
    formData.forEach((value, key) => {companyApplication[key] = value});
    console.log(companyApplication);
    this.firebase.saveCompanyApplication(companyApplication);
    event.preventDefault();
    this.handleOpenModal();
  }

  validate(event){
    // Nada por ahora
  }

  render() {
    return (
      <React.Fragment>
        <FirebaseContext.Consumer>
          {firebase=> this.setupFirebase(firebase)}
        </FirebaseContext.Consumer>
        <section className="templateform">
          <div className="firstTextOne">
            <h3>Nueva oferta Laboral</h3>
            <h5><a href='/perfilEmpresa'>Volver</a></h5>
          </div>
          <Form onSubmit={(event)=> {this.sendToDataBase(event)}}>
            <ComponentVisualInput message="Nombre del cargo" placeholder="Administradora" className="cleanform jobposition col-xs-12" validate={this.validateName} name="nombreCargo"/>
            <ComponentVisualTextArea message="Breve descripción del cargo" placeholder="Selecciona..." className="cleanform jobdescription col-xs-12" name="descripcionCargo"/>
            <ComponentVisualTextArea message="Tareas claves" placeholder="Selecciona..." className="cleanform col-xs-12" name="tareasClaves"/>
            <ComponentVisualSelect message="Nivel de estudios" className="cleanselectorform col-xs-12" options={selectFile.nivelEstudios} name="nivelEstudios"/>
            <ComponentVisualSelect message="Carrera" className="cleanselectorform col-xs-12" options={selectFile.carrera} name="carrera"/>
            <ComponentVisualSelect message="Área de experiencia" className="cleanselectorform col-xs-12" options={selectFile.areaExperiencia} name="areaExperiencia"/>
            <ComponentVisualSelect message="Años de experiencia" className="cleanselectorform col-xs-12" options={selectFile.añosExperiencia} name="añosExperiencia"/>
            <ComponentVisualSelect message="Idioma" className="cleanselectorform col-xs-6" options={selectFile.idioma} name="idioma"/>
            <ComponentVisualSelect message="Nivel" className="cleanselectorform col-xs-6" options={selectFile.nivel} name="nivelIdioma"/>
            <ComponentVisualSelect message="Flexibilidad otorgada" className="cleanselectorform col-xs-12" options={selectFile.flexibilidad} name="flexibilidad"/>
            <ComponentVisualSelect message="Rango de sueldo estimado" className="cleanselectorform col-xs-12" options={selectFile.rangoSueldo} name="rangoSueldo"/>
            <ComponentVisualTextArea message="Requerimientos especiales" placeholder="Selecciona..." className="cleanform col-xs-12" name="requerimientosAdicionales"/>
            <ComponentVisualButton
              type="submit"
              name="Crear nueva oferta laboral"
              className="btn_appealcreate"
              buttonOnClick={(evt) => {
                this.validate(evt);
              }}
            />
            <ComponentVisualModal
              confirmation="Se ha creado tu cuenta"
              message="¡Felicitaciones!"
              text="te hemos enviado un correo de verificación"
              onClose={this.handleCloseModal}
              isOpen={this.state.onOpen}
            />
          </Form>
        </section>
      </React.Fragment>      
    );
  }
}

export default templateForm;
