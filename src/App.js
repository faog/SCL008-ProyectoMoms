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
          <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/about" exact activeClassName="active">About</NavLink></li>
        </ul>
      </header>
      <main>
        <Switch>
          <Route path="/" exact component={templateHome} />
          <Route path="/about" component={templateAbout} />
          <Route path="/formulario" component={templateForm} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
