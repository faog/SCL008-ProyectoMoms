/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class ComponentVisualTextArea extends Component {
  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Label>{this.props.message}</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
      </Form>
    );
  }
}

export default ComponentVisualTextArea;
