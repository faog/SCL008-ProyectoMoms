/* eslint-disable no-tabs */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';

class ComponentVisualApplications extends Component {
  render() {
    const { applications } = this.props;
    return (
      <React.Fragment>
        {applications.map(application => (
          <div key={application.id}>
            <div>
							Cargo:
              {application.nombreCargo}
            </div>
            <div>
              Flexibilidad:
              {application.flexibilidad}
            </div>
            <div>
              Fecha:
              {application.timeApplied.toDate().toLocaleDateString()}
            </div>
            <div>
              Postulantes:
              {application.users.map(user => (
                <div key={user.id}>
                  <div>
                  nombre:
                    {user.nombre}
                  </div>
                  <div>
                  carrera:
                    {user.carrera}
                  </div>
                  <div>
                  Ranking:
                    {user.ranking}
                  %
                  </div>
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
