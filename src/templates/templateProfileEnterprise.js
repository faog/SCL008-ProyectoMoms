import React, { Component } from 'react';
import ComponentVisualButton from '../components/componentVisualButton';
import ComponentVisualOffers from '../components/componentVisualOffers';
import './css/templateProfileEnterprise.css';


class templateProfileEnterprise extends Component {
    render() {
    return (
    <section className="templateProfile">
      <div className="profile">
         <h3>Mi perfil</h3>
         <h5><u>Volver</u></h5>
      </div>
      <div className="sesiondates">
        <h5><u>Configuración</u></h5>
      </div>
      <div className="offers">
        <h3>Últimas ofertas realizadas</h3>
        <ComponentVisualOffers></ComponentVisualOffers>
      </div>
      <div>
      <h5><u>Ver todas las ofertas realizadas</u></h5>
        <ComponentVisualButton
       type="submit"
       name="Crear una nueva oferta laboral"
       className="btn_login"
        buttonOnClick={(evt) => {
          this.sendToDataBase(evt);
        }}
        />
      </div>
     
        </section>
    );
  }
}

export default templateProfileEnterprise;