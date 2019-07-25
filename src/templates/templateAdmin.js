/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { FirebaseContext } from '../data/firebase';
import ComponentVisualApplications from '../components/componentVisualApplications';


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
        <section>
          <div >
            <h3>Ver consultas</h3>
            <h5><u>Volver</u></h5>
          </div>
          <div>
            <ComponentVisualApplications applications={this.state.applications} />
          </div>
        </section>
      </React.Fragment>
    )
  };

}

export default templateAdmin;
