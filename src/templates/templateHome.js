/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import ComponentVisualButton from '../components/componentVisualButton';
import './css/templateHome.css';

class templateHome extends Component {
  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
  }

  redirect(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <React.Fragment>
        <article className="firstPage">
          <div className="happyTalk">
            <h4>Mas de mil mujeres y compañías nos avalan</h4>
            <h1>Conectamos talento femenino con las mejores compañías que tienen ofertas flexibles para ellas</h1>
          </div>
          <div className="call2Action">
            <ComponentVisualButton name="Unete" className="join" buttonOnClick={evt => this.redirect('/roles', evt)} />
            <ComponentVisualButton name="Ingresa" className="enter" buttonOnClick={evt => this.redirect('/auth', evt)} />
            <h4>Conoce más</h4>
            <FontAwesomeIcon className="arrowDown" icon={faArrowAltCircleDown} />
          </div>
        </article>
      </React.Fragment>
    );
  }
}

export default templateHome;
