import React, { useState } from "react";
import Axios from "axios";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const LogScopeForm = (props) => {
    // const [month, setMonth] = useState("");
    const [date, setDate] = useState("");
    const [date2, setDate2] = useState("");
    const [brand, setBrand] = useState(props.data.brand);
    const [type, setType] = useState(props.data.scopeType);
    const [modelNo, setModelNo] = useState(props.data.modelNo);
    const [serialNo, setSerialNo] = useState(props.data.serialNo);
    const [washedBy, setWashedBy] = useState("");
    const [collectedBy, setCollectedBy] = useState("");
    const [circulatedBy, setCirculatedBy] = useState("");
    const [fluidResult, setFluidResult] = useState("");
    const [analysis, setAnalysis] = useState("");
    const [actionTaken, setActionTaken] = useState("");

    // const monthChangeHandler = (event) => {
    //     setMonth(event.target.value);
    // };
    function submit() {
        //send data
        Axios.post("http://localhost:3001/LogScope",
        {serial_no:serialNo,date_of_collection:date,washedby:washedBy,collectedBy:collectedBy,circulatedBy:circulatedBy,fluidResult:fluidResult,analysis:analysis,actionTaken:actionTaken,date2: date2}).then((response) => {
        });
    }
    const dateChangeHandler2 = (event) => {
        setDate2(event.target.value);
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

    const fluidResultChangeHandler = (event) => {
        setFluidResult(event.target.value);
    };

    const analysisChangeHandler = (event) => {
        setAnalysis(event.target.value);
    };

    const actionTakenChangeHandler = (event) => {
        setActionTaken(event.target.value);
    };

    const scanHandler = () => {
        alert("Scan Equipment!");
    };

    const resetHandler = () => {
        // setMonth("");
        setDate("");
        setBrand("");
        setType("");
        setModelNo("");
        setSerialNo("");
        setWashedBy("");
        setCollectedBy("");
        setCirculatedBy("");
        setFluidResult("");
        setAnalysis("");
        setActionTaken("");
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
                                required
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
                                required
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
                                required
                            />
                        </FloatingLabel>
                    </Col>
                </Row>

                <Row className="mb-4">
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
                                required
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
                                required
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
                                required
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
                                required
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
                                required
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
                                onChange={dateChangeHandler2} // CHANGE
                                value={date2}
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
                                placeholder="fluid result"
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
                            onClick={submit}
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
