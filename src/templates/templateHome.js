import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import ComponentVisualButton from '../components/componentVisualButton';
import './css/templateHome.css';

class templateHome extends Component {
  render() {
    return (
      <React.Fragment>
        <article className="firstPage">
          <div className="happyTalk">
            <h4>Mas de mil mujeres y compañías nos avalan</h4>
            <h1>Conectamos talento femenino con las mejores compañías que tienen ofertas flexibles para ellas</h1>
          </div>
          <div className="call2Action">
            <ComponentVisualButton name="Únete" className="join"  />
            <ComponentVisualButton name="Ingresa" className="enter" />
            <span>Conoce más</span>
            <FontAwesomeIcon className="arrowDown" icon={faArrowAltCircleDown} />
          </div>
        </article>
      </React.Fragment>
    );
  }
}

export default templateHome;
