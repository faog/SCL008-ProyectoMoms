/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { FirebaseContext } from '../data/firebase';
import ComponentVisualApplications from '../components/componentVisualApplications';
import './css/templateAdmin.css';

class templateAdmin extends Component {
  firebase = {};
  constructor(props) {
    super(props);
    this.state = {
      'applications' : []
    };
  }

  setupFirebase(firebase) {
    this.firebase = firebase;
  }

  componentDidMount(){
    this.firebase.getAllApplications().then(applications=>{
      this.setState({'applications':applications});
    });
  }

  render() {
    return (
      <React.Fragment>
        <FirebaseContext.Consumer>
          {firebase => this.setupFirebase(firebase)}
        </FirebaseContext.Consumer>
        <section className="adminProfile">
          <div className="adminInformation">
              <div className="initialText">
              <h2>Mi perfil</h2>
              <h5><u>Volver</u></h5>
              </div>
              <div className="personalData">
               <p><strong>Administrador</strong></p>
               <p>Lorena Ferrada</p>
               <p>Recursos humanos</p>
               <p>lferrada@proyectomoms.com</p>
               <h5><u>Configuración</u></h5>
              </div>
          </div>
          <div className="offersData" >
            <h3>Utimas ofertas realizadas</h3>
            <p>Empresa Banco BCI</p>
            <h5>Ver todas las empresas</h5> 
          </div>
          <div className="applications">
            <ComponentVisualApplications applications={this.state.applications} />
         </div>
        </section>
      </React.Fragment>
    )
  };

}

export default templateAdmin;
