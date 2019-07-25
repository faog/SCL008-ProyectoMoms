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

import './App.css';
import logo from './img/1111.png';

function App() {
  return (
    <Router>
      <header className="navbar">
        <Menu className="collapse">
          <h2>Menú</h2>
          <NavLink className="menu-item" to="/" exact activeClassName="active">
            Sobre Nosotros
          </NavLink>
          <a className="menu-item" href="/">
          Servicios
          </a>
          <a className="menu-item" href="/">
          Advisors
          </a>
          <a className="menu-item" href="/">
          PM Academy
          </a>
          <a className="menu-item" href="/">
          Blog
          </a>
          <a className="menu-item" href="/">
          Contáctanos
          </a>
          <NavLink className="menu-item" to="/profile" exact activeClassName="active">
            Mi Cuenta
          </NavLink>
          <a className="menu-item" href="/">
          Cerrar Sesión
          </a>
        </Menu>
        <NavLink to="/" exact activeClassName="active"><img src={logo} alt="MomsLogo" /></NavLink>
      </header>
      <main>
        <Switch>
          <Route path="/" exact component={templateHome} />
          <Route path="/formulario" component={templateForm} />
          <Route path="/auth" component={templateAuth} />
          <Route path="/profile" exact component={templateProfileEnterprise} />
          <Route path="/roles" exact component={templateRoles} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
