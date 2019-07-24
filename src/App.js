import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, NavLink,
} from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import templateForm from './templates/templateForm';
import templateHome from './templates/templateHome';
import templateAbout from './templates/templateAbout';
import templateAuth from './templates/templateAuth';
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
          <a className="menu-item" href="https://faog.github.io/SCL008-ProyectoMoms/about">
          Sobre Nosotros
          </a>
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
          <a className="menu-item" href="/">
          Mi cuenta
          </a>
          <a className="menu-item" href="/">
          Cerrar Sesión
          </a>
        </Menu>
        <NavLink to="/SCL008-ProyectoMoms" exact activeClassName="active"><img src={logo} alt="MomsLogo" /></NavLink>
      </header>
      <main>
        <Switch>
          <Route path="/SCL008-ProyectoMoms" exact component={templateHome} />
          <Route path="/SCL008-ProyectoMoms/about" component={templateAbout} />
          <Route path="/SCL008-ProyectoMoms/formulario" component={templateForm} />
          <Route path="/SCL008-ProyectoMoms/auth" component={templateAuth} />
          <Route path="/SCL008-ProyectoMoms/profile" component={templateProfileEnterprise} />
          <Route path="/SCL008-ProyectoMoms/roles" component={templateRoles} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
