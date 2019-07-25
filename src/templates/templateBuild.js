import React, { Component } from 'react';
import build from '../img/working.png';
import './css/templateBuild.css';

class templateBuild extends Component {
  render() {
    return (
      <React.Fragment>
        <article className="buildPage">
          <h5><a href="/">Volver</a></h5>
          <img src={build} className="buildImg" alt="buildImg" />
        </article>
      </React.Fragment>
    );
  }
}

export default templateBuild;
