import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const LogScopeForm = (props) => {
    const [month, setMonth] = useState("");
    const [date, setDate] = useState("");
    const [brand, setBrand] = useState(props.data.brand);
    const [type, setType] = useState(props.data.scopeType);
    const [modelNo, setModelNo] = useState(props.data.modelNo);
    const [serialNo, setSerialNo] = useState(props.data.serialNo);
    const [washedBy, setWashedBy] = useState("");
    const [collectedBy, setCollectedBy] = useState("");
    const [circulatedBy, setCirculatedBy] = useState("");

    const monthChangeHandler = (event) => {
        setMonth(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    };
    const brandChangeHandler = (event) => {
        setBrand(event.target.value);
    };
    const typeChangeHandler = (event) => {
        setType(event.target.value);
    };
    const modelNoChangeHandler = (event) => {
        setModelNo(event.target.value);
    };
    const serialNoChangeHandler = (event) => {
        setSerialNo(event.target.value);
    };

    const washedByChangeHandler = (event) => {
        setWashedBy(event.target.value);
    };

    const collectedByChangeHandler = (event) => {
        setCollectedBy(event.target.value);
    };

    const circulatedByChangeHandler = (event) => {
        setCirculatedBy(event.target.value);
    };

    const scanHandler = () => {
        alert("Scan Equipment!");
    };

    const resetHandler = () => {
        setMonth("");
        setDate("");
        setBrand("");
        setType("");
        setModelNo("");
        setSerialNo("");
        setWashedBy("");
        setCollectedBy("");
        setCirculatedBy("");
    };

    return (
        <Card body>
            <Form>
                <Form.Label>Collection Period</Form.Label>
                <Row className="mb-3">
                    <Col>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Month of Collection"
                        >
                            <Form.Control
                                type="month"
                                placeholder="month of collection"
                                onChange={monthChangeHandler}
                                value={month}
                            />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Date of Collection"
                        >
                            <Form.Control
                                type="date"
                                placeholder="date of collection"
                                onChange={dateChangeHandler}
                                value={date}
                            />
                        </FloatingLabel>
                    </Col>
                </Row>

                <Form.Label>Scope Details</Form.Label>
                <Row className="mb-3">
                    <Col>
                        <FloatingLabel controlId="floatingInput" label="Brand">
                            <Form.Control
                                type="text"
                                placeholder="brand"
                                onChange={brandChangeHandler}
                                value={brand}
                            />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel controlId="floatingInput" label="Type">
                            <Form.Control
                                type="text"
                                placeholder="type"
                                onChange={typeChangeHandler}
                                value={type}
                            />
                        </FloatingLabel>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col>
                        <FloatingLabel
                            controlId="floatingInputGrid"
                            label="Model No."
                        >
                            <Form.Control
                                type="text"
                                placeholder="model no."
                                onChange={modelNoChangeHandler}
                                value={modelNo}
                            />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel
                            controlId="floatingInputGrid"
                            label="Serial No."
                        >
                            <Form.Control
                                type="text"
                                placeholder="serial no."
                                onChange={serialNoChangeHandler}
                                value={serialNo}
                            />
                        </FloatingLabel>
                    </Col>
                </Row>

                <Form.Label>Personnel Performed</Form.Label>

                <Row className="mb-3">
                    <Col>
                        <FloatingLabel
                            controlId="floatingInputGrid"
                            label="Washed by"
                        >
                            <Form.Control
                                type="text"
                                placeholder="washed by"
                                onChange={washedByChangeHandler}
                                value={washedBy}
                            />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel
                            controlId="floatingInputGrid"
                            label="Collected By"
                        >
                            <Form.Control
                                type="text"
                                placeholder="collected by"
                                onChange={collectedByChangeHandler}
                                value={collectedBy}
                            />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel
                            controlId="floatingInputGrid"
                            label="Circulated by"
                        >
                            <Form.Control
                                type="text"
                                placeholder="ciruclated by"
                                onChange={circulatedByChangeHandler}
                                value={circulatedBy}
                            />
                        </FloatingLabel>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Button
                            className="justify-content-end"
                            variant="primary"
                            type="button"
                            onClick={scanHandler}
                        >
                            Scan Barcode
                        </Button>
                    </Col>

                    <Col>
                        <Button
                            className="float-end"
                            variant="success"
                            type="submit"
                        >
                            Submit
                        </Button>
                        <Button
                            className="float-end me-2"
                            variant="danger"
                            type="button"
                            onClick={resetHandler}
                        >
                            Reset
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Card>
    );
};

export default LogScopeForm;
