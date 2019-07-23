import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, NavLink,
} from 'react-router-dom';
import templateHome from './templates/templateHome';
import templateAbout from './templates/templateAbout';
import templateForm from './templates/templateForm';
import './App.css';
import logo from './img/1111.png';

function App() {
  return (
    <Router>
      <header className="navbar">
        <NavLink to="/SCL008-ProyectoMoms" exact activeClassName="active"><img src={logo} alt="MomsLogo" /></NavLink>
        {/* <ul>
          <li></li>
          <li><NavLink to="/SCL008-ProyectoMoms/about" exact activeClassName="active">About</NavLink></li>
        </ul> */}
      </header>
      <main>
        <Switch>
          <Route path="/SCL008-ProyectoMoms" exact component={templateHome} />
          <Route path="/SCL008-ProyectoMoms/about" component={templateAbout} />
          <Route path="/SCL008-ProyectoMoms/formulario" component={templateForm} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
