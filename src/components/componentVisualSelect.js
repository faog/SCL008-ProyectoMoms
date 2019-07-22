/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class ComponentVisualSelect extends Component {
  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Label>{this.props.message}</Form.Label>
          <Form.Control as="select">
            <option>Seleccione una opción</option>
            <option>1</option>
          </Form.Control>
        </Form.Group>
      </Form>
    );
  }
}

export default ComponentVisualSelect;
