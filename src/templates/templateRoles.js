import React, { Component } from 'react';
import ComponentVisualButton from '../components/componentVisualButton';
import './css/templateRoles.css';

class templateRoles extends Component {
  render() {
    return (
      <React.Fragment>
        <article className="rolesPage">
          <h5>Volver</h5>
          <h3>Únete a nuestra red</h3>
          <h1>Cuéntanos quien eres</h1>
          <ComponentVisualButton name="Soy una profesional que está buscando su siguiente oportunidad laboral" className="profesionist" />
          <ComponentVisualButton name="Estoy buscando contratar para un puesto o proyecto en nombre de una empresa" className="enterprise" />
          <span>Más información</span>
        </article>
      </React.Fragment>
    );
  }
}

export default templateRoles;
