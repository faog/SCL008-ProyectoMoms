/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Form, Col } from 'react-bootstrap';

class ComponentVisualSelect extends Component {
  render() {
    const optionvalues = this.props.options;
    return (
      <Form.Group>
        <Col>
          <Form.Label>{this.props.message}</Form.Label>
        </Col>
        <Col>
          <Form.Control as="select">
            <option>Selecciona...</option>
            {optionvalues.map(optionvalue => (
              <option key={optionvalue}>{optionvalue}</option>
            ))}
          </Form.Control>
        </Col>
      </Form.Group>
    );
  }
}

export default ComponentVisualSelect;
