/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, NavLink,
} from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import templateHome from './templates/templateHome';
import templateAuth from './templates/templateAuth';
import templateForm from './templates/templateForm';
import templateProfileEnterprise from './templates/templateProfileEnterprise';
import templateRoles from './templates/templateRoles';
import templateAdmin from './templates/templateAdmin';
import templateBuild from './templates/templateBuild';

import './App.css';
import logo from './img/1111.png';

function App() {
  return (
    <Router>
      <header className="navbar">
        <Menu className="collapse">
          <h2>Menú</h2>
          <NavLink className="menu-item" to="/temporal" exact activeClassName="active">
            Sobre Nosotros
          </NavLink>
          <NavLink className="menu-item" to="/temporal" exact activeClassName="active">
          Servicios
          </NavLink>
          <NavLink className="menu-item" to="/temporal" exact activeClassName="active">
          Advisors
          </NavLink>
          <NavLink className="menu-item" to="/temporal" exact activeClassName="active">
          PM Academy
          </NavLink>
          <NavLink className="menu-item" to="/temporal" exact activeClassName="active">
          Blog
          </NavLink>
          <NavLink className="menu-item" to="/temporal" exact activeClassName="active">
          Contáctanos
          </NavLink>
          <NavLink className="menu-item" to="/profile" exact activeClassName="active">
            Mi Cuenta
          </NavLink>
          <NavLink className="menu-item" to="/" exact activeClassName="active">
          Cerrar Sesión
          </NavLink>
        </Menu>
        <NavLink to="/" exact activeClassName="active"><img src={logo} alt="MomsLogo" /></NavLink>
      </header>
      <main>
        <Switch>
          <Route path="/" exact component={templateHome} />
          <Route path="/postulacion" component={templateForm} />
          <Route path="/registroEmpresa" component={templateAuth} />
          <Route path="/perfilEmpresa" component={templateProfileEnterprise} />
          <Route path="/tipoPerfil" component={templateRoles} />
          <Route path="/perfilAdmin" component={templateAdmin} />
          <Route path="/temporal" component={templateBuild} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
