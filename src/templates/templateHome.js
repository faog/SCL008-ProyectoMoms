/* eslint-disable max-len */
import React, { Component } from 'react';
import {
  BrowserRouter as Router, NavLink, Switch, Route,
} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import templateRoles from './templateRoles';
import ComponentVisualButton from '../components/componentVisualButton';
import './css/templateHome.css';

class templateHome extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <article className="firstPage">
            <div className="happyTalk">
              <h4>Mas de mil mujeres y compañías nos avalan</h4>
              <h1>Conectamos talento femenino con las mejores compañías que tienen ofertas flexibles para ellas</h1>
            </div>
            <div className="call2Action">
              <NavLink to="/SCL008-ProyectoMoms/roles" exact activeClassName="active" className="join">Únete</NavLink>
              <ComponentVisualButton name="Ingresa" className="enter" />
              <h4>Conoce más</h4>
              <FontAwesomeIcon className="arrowDown" icon={faArrowAltCircleDown} />
            </div>
            <Switch>
              <Route path="/SCL008-ProyectoMoms/roles" exact component={templateRoles} />
            </Switch>
          </article>
        </React.Fragment>
      </Router>
    );
  }
}

export default templateHome;
