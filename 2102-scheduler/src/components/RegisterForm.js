import React, { useState } from "react";
import Hospital from "../assets/hospital.jpg";

import { Form, Row, Col, Card, Button, Container } from "react-bootstrap";

const RegisterForm = () => {
  //storing values
  const [values, setValues] = useState({
    id: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });

  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  //validation
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
                <Form.Control
                  required
                  type="id"
                  placeholder="Enter ID"
                  value={values.id}
                  onChange={set("id")}
                />
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
                  value={values.firstName}
                  onChange={set("firstName")}
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
                  value={values.lastName}
                  onChange={set("lastName")}
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
                  value={values.password}
                  onChange={set("password")}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a password
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="formConfirmPassword">
                <Form.Label>Confrim Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Confirm Password"
                  value={values.confirmPassword}
                  onChange={set("confirmPassword")}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide the same password
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row>
            <Button variant="primary" type="submit">
              Register
            </Button>
            </Row>
            <Row>
              <Button
                href="/"
                variant="white"
                type="submit"
                className="justify-content-center"
                
              >
                Back to Login
              </Button>
            </Row>
          </Form>
        </Card>
      </Col>
    </Container>
  );
};

export default RegisterForm;
