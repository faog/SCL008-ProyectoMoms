/* eslint-disable no-tabs */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import ComponentVisualButton from './componentVisualButton';
import './css/componentVisualOffers.css';

class ComponentVisualOffers extends Component {
  render() {
    const { applications } = this.props;
    return (
      <React.Fragment>
        {applications.map(application => (
          <div key={application.id}>
            <div className="containerOffers">
              <h1>{application.carrera}</h1>
              <h6>
                Realizada el
                {' '}
                {application.timeApplied.toDate().toLocaleDateString()}
              </h6>
              <h3>{application.nombreCargo}</h3>
              <ComponentVisualButton
                name="Ver postulantes"
                className="btn_show"
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
