/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import ComponentVisualSelect from '../components/componentVisualSelect';
import ComponentVisualInput from '../components/componentVisualInput';
import ComponentVisualTextArea from '../components/componentVisualTextArea';
import ComponentVisualButton from '../components/componentVisualButton';
import { FirebaseContext } from '../data/firebase';

const selectFile = require('../data/informationSelect');

class templateForm extends Component {
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
          <Form>
            <React.Fragment>
              <h1>Formulario</h1>
              <ComponentVisualInput message="Nombre del cargo " validate={this.validateName} />
              <ComponentVisualSelect message="Flexibilidad otorgada " options={selectFile.flexibilidad} />
              <ComponentVisualSelect message="Idioma " options={selectFile.idioma} />
              <ComponentVisualSelect message="Nivel " options={selectFile.nivel} />
              <ComponentVisualSelect message="Carrera " options={selectFile.carrera} />
              <ComponentVisualSelect message="Nivel de estudios " options={selectFile.nivelEstudios} />
              <ComponentVisualSelect message="Años de experiencia " options={selectFile.experiencia} />
              <ComponentVisualSelect message="Rango de sueldo estimado " options={selectFile.rangoSueldo} />
              <ComponentVisualTextArea message="Descripción del cargo" />
              <ComponentVisualTextArea message="Tareas claves:" />
              <ComponentVisualTextArea message="Educación adicional:" />
              <ComponentVisualButton
                type="submit"
                name="Crear postulación"
                className="create"
                buttonOnClick={(evt) => {
                  this.sendToDataBase(evt);
                }}
              />
            </React.Fragment>
          </Form>
        )}

      </FirebaseContext.Consumer>
    );
  }
}

export default templateForm;
