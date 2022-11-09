import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const LogWasherForm = (props) => {
    // const [month, setMonth] = useState("");
    const [date, setDate] = useState("");
    const [modelNo, setModelNo] = useState(props.data.aerModelNo);
    const [serialNo, setSerialNo] = useState(props.data.aerSerialNo);
    const [collectedBy, setCollectedBy] = useState("");
    const [circulatedBy, setCirculatedBy] = useState("");

    // const monthChangeHandler = (event) => {
    //     setMonth(event.target.value);
    // };

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    };

    const modelNoChangeHandler = (event) => {
        setModelNo(event.target.value);
    };
    const serialNoChangeHandler = (event) => {
        setSerialNo(event.target.value);
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
        // setMonth("");
        setDate("");
        setModelNo("");
        setSerialNo("");
        setCollectedBy("");
        setCirculatedBy("");
    };

    return (
        <Card body>
            <Form>
                <Form.Label>Collection Period</Form.Label>
                <Row className="mb-4">
                    {/* <Col>
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
                    </Col> */}
                    <Col xs={12} lg={6}>
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

                <Form.Label>Washer Details</Form.Label>
                <Row className="mb-3">
                    <Col>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="AER Model No."
                        >
                            <Form.Control
                                type="text"
                                placeholder="brand"
                                onChange={modelNoChangeHandler}
                                value={modelNo}
                            />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="AER Serial No."
                        >
                            <Form.Control
                                type="text"
                                placeholder="type"
                                onChange={serialNoChangeHandler}
                                value={serialNo}
                            />
                        </FloatingLabel>
                    </Col>
                </Row>

                <Form.Label>Personnel Performed</Form.Label>

                <Row className="mb-4">
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

                <Form.Label>Fluid Results</Form.Label>
                <Row className="mb-3">
                    <Col>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Date of Result"
                        >
                            <Form.Control
                                type="date"
                                placeholder="date of result"
                                onChange={dateChangeHandler} // CHANGE
                                value={date}
                            />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Fluid Result"
                        >
                            <Form.Control
                                type="text"
                                placeholder="type"
                                onChange={circulatedByChangeHandler}
                                value={circulatedBy}
                            />
                        </FloatingLabel>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Analysis"
                        >
                            <Form.Control
                                type="text"
                                placeholder="analysis"
                                onChange={circulatedByChangeHandler}
                                value={circulatedBy}
                            />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Action Taken"
                        >
                            <Form.Control
                                type="text"
                                placeholder="action taken"
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

export default LogWasherForm;
