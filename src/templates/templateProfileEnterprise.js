import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ComponentVisualButton from '../components/componentVisualButton';
import ComponentVisualOffers from '../components/componentVisualOffers';
import logoBci from '../img/bci-logo.png';
import './css/templateProfileEnterprise.css';


class templateProfileEnterprise extends Component {
    render() {
    return (
    <section className="templateProfile">
      <Container className="profile">
      <Row>
          <Col xs="4" className="colProfile">
            <h3>Mi perfil</h3> 
            <img src={logoBci} className="logo-bci" alt="logo" />
          </Col>
          <Col xs="8">
            <h5><u>Volver</u></h5>
            <br></br>
            <p>Banco BCI</p>
            <p>Alejandra López</p>
            <p>alendralopez@bci.com</p>
            <h5><u>Configuración</u></h5>
          </Col>
        </Row>      
      </Container>
      <div className="offers">
        <br></br>
        <h3>Últimas ofertas realizadas</h3>
      </div>
      <div>
      <ComponentVisualOffers></ComponentVisualOffers>
      <br></br>
      <h5><u>Ver todas las ofertas realizadas</u></h5>
        <ComponentVisualButton
       type="submit"
       name="Crear nueva oferta laboral"
       className="btn_login2"
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