/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Form, Col } from 'react-bootstrap';

class ComponentVisualTextArea extends Component {
  render() {
    return (
      <Form.Group>
        <Col>
          <Form.Label>{this.props.message}</Form.Label>
        </Col>
        <Col>
          <Form.Control as="textarea" placeholder={this.props.placeholder} rows="3" />
        </Col>
      </Form.Group>
    );
  }
}

export default ComponentVisualTextArea;
