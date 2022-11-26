import React, { useState } from "react";
import Axios from "axios";
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
    const [fluidDate, setFluidDate] = useState("");
    const [fluidResult, setFluidResult] = useState("");
    const [analysis, setAnalysis] = useState("");
    const [actionTaken, setActionTaken] = useState("");

    let today = new Date().toISOString().slice(0, 10);

    // const monthChangeHandler = (event) => {
    //     setMonth(event.target.value);
    // };

    // const dateChangeHandler = (event) => {
    //     setDate(event.target.value);
    // };

    const modelNoChangeHandler = (event) => {
        setModelNo(event.target.value);
    };
    const serialNoChangeHandler = (event) => {
        setSerialNo(event.target.value);
    };

    const collectedByChangeHandler = (event) => {
        setCollectedBy(event.target.value);
    };

    const fluidDateChangeHandler = (event) => {
        setFluidDate(event.target.value);
    };

    const fluidResultChangeHandler = (event) => {
        setFluidResult(event.target.value);
    };

    const analysisChangeHandler = (event) => {
        setAnalysis(event.target.value);
    };

    const actionTakenChangeHandler = (event) => {
        setActionTaken(event.target.value);
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
        setFluidDate("");
        setFluidResult("");
        setAnalysis("");
        setActionTaken("");
    };

    const submitHandler = () => {
        //send data
        Axios.post("http://localhost:3001/LogWasher", {
            serial_no: serialNo,
            date_of_collection: date,
            collectedBy: collectedBy,
            circulatedBy: circulatedBy,
            fluidResult: fluidResult,
            analysis: analysis,
            actionTaken: actionTaken,
            date2: fluidDate,
        }).then((response) => {});
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
                                value={today}
                                disabled
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
                        <Form.Label>Collected By</Form.Label>
                        <Form.Select
                            value={collectedBy}
                            onChange={(e) => setCollectedBy(e.target.value)}
                        >
                            <option>Select Name</option>
                            <option value="Tan Mei Mei">Tan Mei Mei</option>
                            <option value="Chong Foo Meng">
                                Chong Foo Meng
                            </option>
                            <option value="Mandy Teo">Mandy Teo</option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Label>Circulated By</Form.Label>
                        <Form.Select
                            value={circulatedBy}
                            onChange={(e) => setCirculatedBy(e.target.value)}
                        >
                            <option>Select Name</option>
                            <option value="Tan Mei Mei">Tan Mei Mei</option>
                            <option value="Chong Foo Meng">
                                Chong Foo Meng
                            </option>
                            <option value="Mandy Teo">Mandy Teo</option>
                        </Form.Select>
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
                                onChange={fluidDateChangeHandler} // CHANGE
                                value={fluidDate}
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
                                onChange={fluidResultChangeHandler}
                                value={fluidResult}
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
                                onChange={analysisChangeHandler}
                                value={analysis}
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
                                onChange={actionTakenChangeHandler}
                                value={actionTaken}
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
                            onClick={submitHandler}
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
