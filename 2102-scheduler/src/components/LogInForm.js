import React, { useState } from "react";

import Hospital from "../assets/hospital.jpg";


import { Form, Row, Col, Card, Button, Container } from "react-bootstrap";

const LogInForm = () => {
  return (
    <Container className="d-flex justify-content-center">
      <Col className="col-sm-3">
        <Row className="d-flex justify-content-between">
          <Container className="d-flex justify-content-center">
            <img src={Hospital} alt="" />
          </Container>
        </Row>

        <Card body>
          <Form className="rounded p-4 p-sm-3">
            <Row className="mb-3">
              <Form.Group controlId="formID">
                <Form.Label>ID No.</Form.Label>
                <Form.Control type="id" placeholder="Enter ID" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" />
              </Form.Group>
            </Row>

            <Button href="/Home" variant="primary" type="submit">
              Log In
            </Button>
            <Button href="/RegisterPage" variant="white" type="submit">
              Register Account
            </Button>
          </Form>
        </Card>
      </Col>
    </Container>
  );
};

export default LogInForm;
