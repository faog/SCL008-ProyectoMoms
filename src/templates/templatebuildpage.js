import React, { Component } from 'react';
import build from '../img/working.png';
import './css/templatebuildpage.css';


class templatebuildpage extends Component {
  render() {
    return (
        <React.Fragment>
        <article className="buildPage">
        <img src={build} className="buildImg" alt="buildImg" />
        </article>
      </React.Fragment>
    );
  }
}

export default templatebuildpage;