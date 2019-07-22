import React, { Component } from 'react';
import ComponentVisualSelect from '../components/componentVisualSelect';
import ComponentVisualInput from '../components/componentVisualInput';


class templateForm extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Formulario</h1>
        <ComponentVisualSelect message="Flexibilidad: " />
        <ComponentVisualSelect message="Carrera: " />
        <ComponentVisualSelect message="Idioma : " />
        <ComponentVisualSelect message="Años de experiencia : " />
        <ComponentVisualSelect message="Rango de sueldo estimado :" />
        <ComponentVisualInput message="Nombre del cargo: " validate={this.validateName} />
      </React.Fragment>
    );
  }
}

export default templateForm;
