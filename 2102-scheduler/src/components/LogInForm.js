import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import Axios from 'axios';
import Hospital from "../assets/hospital.jpg";


import { Form, Row, Col, Card, Button, Container } from "react-bootstrap";

const LogInForm = () => {
  const navigate = useNavigate();
  //states for getting user and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //checks whether user has successfully logged in
  const [loginStatus, setLoginStatus] = useState("");

  //login event
  const login = event => {
    event.preventDefault();

    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if(response.data.length) {
        navigate('/Home');
      }
      else {
        setLoginStatus("Invalid Username/Password!"); //Jeriel change message accordingly
      }
    });
  };

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
                <Form.Control type="id" placeholder="Enter ID" 
                  onChange={(e)=> {
                    setUsername(e.target.value);
                  }}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password"
                  onChange={(e)=> {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Group>
            </Row>
            <h1>{loginStatus}</h1>        
            <Button variant="primary" type="submit" onClick={login}>
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
