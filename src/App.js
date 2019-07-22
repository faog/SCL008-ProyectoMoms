import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, NavLink,
} from 'react-router-dom';
import templateHome from './templates/templateHome';
import templateAbout from './templates/templateAbout';
import templateForm from './templates/templateForm';
import './App.css';

function App() {
  return (
    <Router>
      <header>
        <ul>
          <li><NavLink to="/SCL008-ProyectoMoms/" exact activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/SCL008-ProyectoMoms/about" exact activeClassName="active">About</NavLink></li>
        </ul>
      </header>
      <main>
        <Switch>
          <Route path="/SCL008-ProyectoMoms/" exact component={templateHome} />
          <Route path="/SCL008-ProyectoMoms/about" component={templateAbout} />
          <Route path="/SCL008-ProyectoMoms/formulario" component={templateForm} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
