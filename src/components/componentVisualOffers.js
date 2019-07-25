/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import ComponentVisualButton from './componentVisualButton';
import './css/componentVisualOffers.css';

class ComponentVisualOffers extends Component {
  render() {
    return (
     <div className ="containerOffers">
         <ComponentVisualButton
                name="Ver postulantes"
                className="btn_show"
                />
     </div>
    );
  }
}
export default ComponentVisualOffers;