import React, { Component } from 'react';
import './templateHome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

class templateHome extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="happyTalk">
        <h4>Mas de mil mujeres y compañías nos avalan</h4>
        <h1>Conectamos talento femenino con las mejores compañías que tienen ofertas flexibles para ellas</h1>
        </div>
        <div className="call2Action">
        <button className="join">Únete</button>
        <button className="enter">Ingresa</button>
        <span>Conoce más</span>
        {/* <FontAwesomeIcon icon="faArrowCircleDown" /> */}
        </div>
      </React.Fragment>
    );
  }
}

export default templateHome;
