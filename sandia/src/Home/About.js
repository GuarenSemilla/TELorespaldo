import { Form, Row, Col, Button, Container } from 'react-bootstrap'
import React from 'react';

function About() {
  return (
    <Container>
    <Row>
      <Col>1 of 2</Col>
      <Col>2 of 2</Col>
    </Row>
    <Row>
      <Col>1 of 3</Col>
      <Col>2 of 3</Col>
      <Col>3 of 3</Col>
    </Row>
  </Container>
  );
}

export default About;