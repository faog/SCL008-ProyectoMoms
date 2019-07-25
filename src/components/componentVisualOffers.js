/* eslint-disable no-tabs */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import ComponentVisualButton from './componentVisualButton';
import ComponentVisualModalCompany from './componentVisualModalCompany';
import './css/componentVisualOffers.css';

class ComponentVisualOffers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onOpen: false,
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ onOpen: true });
  }

  handleCloseModal() {
    this.setState({ onOpen: false });
  }

  handleOpen() {
    this.handleOpenModal();
  }

  render() {
    const { applications } = this.props;
    return (
      <React.Fragment>
        {applications.map(application => (
          <div key={application.id}>
            <div className="containerOffers">
              <h1 className="title">{application.carrera}</h1>
              <h6>
                Realizada el
                {' '}
                {application.timeApplied.toDate().toLocaleDateString()}
              </h6>
              <h3>{application.nombreCargo}</h3>
              <ComponentVisualButton
                name="Ver postulantes"
                className="btn_show"
                type="button"
                buttonOnClick={() => {
                  this.handleOpen();
                }}
              />
              <ComponentVisualModalCompany
                confirmation="Tu solicitud sigue en proceso"
                message="¡Oops!"
                text="Seguimos encontrando a las mejores candidatas. No desesperes."
                onClose={this.handleCloseModal}
                isOpen={this.state.onOpen}
              />
              <h5>Ver más</h5>
            </div>
          </div>
        ))}


      </React.Fragment>
    );
  }
}

export default ComponentVisualOffers;
