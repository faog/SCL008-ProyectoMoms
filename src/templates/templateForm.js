import React, { Component } from 'react';
import ComponentVisualSelect from '../components/componentVisualSelect';
import ComponentVisualInput from '../components/componentVisualInput';
import ComponentVisualTextArea from '../components/componentVisualTextArea';
import { FirebaseContext } from '../data/firebase';

const selectFile = require('../data/informationSelect');

class templateForm extends Component {
  render() {
    return (
      <FirebaseContext.Consumer>
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
        </React.Fragment>
      </FirebaseContext.Consumer>
    );
  }
}

export default templateForm;
