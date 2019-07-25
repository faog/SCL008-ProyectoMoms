/* eslint-disable no-tabs */
/* eslint-disable react/prop-types */
import React, { Component } from 'react'; 
import './css/componentVisualApplications.css';
import ComponentVisualButton from './componentVisualButton';

class ComponentVisualApplications extends Component {
  render() {
    const { applications } = this.props;
    return (
      <React.Fragment>
        {applications.map(application => (
          <div key={application.id} className="jobOffer">
            <h1>
              {application.carrera}
            </h1>
            <h4>
              Realizada el {' '}
              {application.timeApplied.toDate().toLocaleDateString()}
            </h4>
            <h3>
              {application.nombreCargo}
            </h3>
            <ComponentVisualButton
              name="Ver postulantes"
              className="btn_postulants" />
            <p>Ver más</p>

            <div>
              {application.users.map(user => (
                <div key={user.id}>
                  <div className="principalInfo">
                    <div className="ranking">
                      <div className="percentage">
                      <h1>
                        {user.ranking}
                      </h1>
                      <h3>%</h3>
                      </div>
                      <div className="rankingletter">
                        <h3>match</h3>
                      </div>
                    </div>
                    <div className="womenInfo">
                      <h1>
                        {user.nombre}
                      </h1>
                      <h4>
                        {user.carrera}
                      </h4>
                      <h3>
                        {user.idioma}
                      </h3>
                    </div>
                  </div>
                  <div className="workingDay">
                    <p>{user.flexibilidad}</p>
                  </div>
                  <ComponentVisualButton
              name="Ver perfil"
              className="btn_postulants" />
            <p>Ver más</p>
                </div>
              ))}
            </div>
          </div>
        ))}

      </React.Fragment>
    );
  }
}

export default ComponentVisualApplications;
