import React, { useState } from "react";
import Hospital from "../assets/hospital.jpg";


import { Form, Row, Col, Card, Button, Container } from "react-bootstrap";

const RegisterForm = () => {

  //"Validation" pretty sure there's validation libraries can works better
  //Need to work on event when everything is valid
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container className="d-flex justify-content-center">
      <Col className="col-sm-5">
        <Row className="d-flex justify-content-between">
          <Container className="d-flex justify-content-center">
            <img src={Hospital} alt="" />
          </Container>
        </Row>

        <Card body>
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            className="rounded p-4 p-sm-3"
          >
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="formID">
                <Form.Label>ID No.</Form.Label>
                <Form.Control required type="id" placeholder="Enter ID" />
                <Form.Control.Feedback type="invalid">
                  Please provide valid ID
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  required
                  type="firstname"
                  placeholder="Enter First Name"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide your first name
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  required
                  type="lastname"
                  placeholder="Enter Last Name"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide your last name
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Enter Password"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a password
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="formConfirmPassword">
                <Form.Label>Confrim Password</Form.Label>
                <Form.Control
                  required
                  type="confirmpassword"
                  placeholder="Confirm Password"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide the same password
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Button variant="primary" type="submit">
              Register
            </Button>

            <Button href="/" variant="white" type="submit">
              Back to Login
            </Button>
          </Form>
        </Card>
      </Col>
    </Container>
  );
};

export default RegisterForm;
