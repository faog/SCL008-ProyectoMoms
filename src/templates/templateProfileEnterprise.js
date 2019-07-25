/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ComponentVisualButton from '../components/componentVisualButton';
import ComponentVisualOffers from '../components/componentVisualOffers';
import logoBci from '../img/bci-logo.png';
import './css/templateProfileEnterprise.css';


class templateProfileEnterprise extends Component {
  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
  }

  redirect(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <section className="templateProfile">
        <article className="profileInfo">
          <div className="firstSectionProfile">
            <h2>Mi perfil</h2>
            <h5><a href="/">Volver</a></h5>
          </div>
          <div className="bodyProfile">
            <img src={logoBci} className="logo-bci" alt="logo" />
            <div className="textProfile">
              <p>Banco BCI</p>
              <p>Alejandra López</p>
              <p>alendralopez@bci.com</p>
              <h5><a href="/temporal">Configuración</a></h5>
            </div>
          </div>
          <hr />
        </article>
        <article className="offersInfo">
        <h3>Últimas ofertas realizadas</h3>
          <ComponentVisualOffers />
          {/* <ComponentVisualButton
            type="submit"
            name="Crear nueva oferta laboral"
            className="btn_profilenew"
            buttonOnClick={(evt) => {
              this.redirect('/postulacion', evt);
            }
            }
          /> */}
        </article>
      </section>

    );
  }
}

export default templateProfileEnterprise;
