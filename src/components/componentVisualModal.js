import React from 'react';
import './css/componentVisualModal.css';

const componentVisualModal = (props) => {
  if (!props.onOpen) {
    return null;
  }
  return (
    <div className="modal">
      <div className="text-container">
        <span className="confirmation">{props.confirmation}</span>
        <h2 className="message">{props.message}</h2>
        <hr className="line" />
        <p className="text">{props.text}</p>
        <button className="close-btn" onClick={props.onClose}><FontAwesomeIcon className="cross" icon={faTimes}/>Entendido</button>
      </div>
    </div>
  );
};


export default componentVisualModal;