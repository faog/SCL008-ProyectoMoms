import React, { Component } from 'react';
import ComponentVisualButton from '../components/componentVisualButton';
import './css/templateRoles.css';

class templateRoles extends Component {
  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
  }

  redirect(path) {
    this.props.history.push(path);
  }
  
  render() {
    return (
      <React.Fragment>
        <article className="rolesPage">
          <h5><a href="/">Volver</a></h5>
          <h3>Únete a nuestra red</h3>
          <h1>Cuéntanos quien eres</h1>
          <ComponentVisualButton name="Soy una profesional que está buscando su siguiente oportunidad laboral" className="profesionist" buttonOnClick={evt => this.redirect('/temporal', evt)} /> 
          <ComponentVisualButton name="Estoy buscando contratar para un puesto o proyecto en nombre de una empresa" className="enterprise" buttonOnClick={evt => this.redirect('/registroEmpresa', evt)} />
          <spam><a href="/temporal">Más información</a></spam>
        </article>
      </React.Fragment>
    );
  }
}

export default templateRoles;
