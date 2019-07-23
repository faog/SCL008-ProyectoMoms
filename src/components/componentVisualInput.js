/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class ComponentVisualInput extends Component {
  render() {
    return (
      <Form.Group>
        <Form.Label>{this.props.message}</Form.Label>
        <Form.Control value={this.props.text} />
      </Form.Group>
    );
  }
}

export default ComponentVisualInput;
