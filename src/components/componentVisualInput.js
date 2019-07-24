/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Form, Col } from 'react-bootstrap';

class ComponentVisualInput extends Component {
  render() {
    return (
      <Form.Group>
        <Col>
          <Form.Label className={this.props.className}>{this.props.message}</Form.Label>
        </Col>
        <Col>
          <Form.Control className={this.props.className} placeholder={this.props.placeholder} value={this.props.text} />
        </Col>
      </Form.Group>
    );
  }
}

export default ComponentVisualInput;
