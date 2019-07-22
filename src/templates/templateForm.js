import React, { Component } from 'react';
import ComponentVisualInput from '../components/componentVisualInput';

class templateForm extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Formulario</h1>
        <ComponentVisualInput message="Nombre:" validate={this.validateName} />
      </React.Fragment>
    );
  }
}

export default templateForm;
