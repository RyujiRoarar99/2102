import React, { useState } from "react";

import DropdownComponent from "./DropdownComponent";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ScopesEquipmentOverview = (props) => {
    const dropdownContents = ["Select Equipment", "Scopes", "Washer"];
    const [selectedScope, setSelectedScope] = useState([]);
    const [scopeSamples, setScopeSamples] = useState([]);
    const [selectedSample, setSelectedSample] = useState([]);
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (event) => {
        const rowDataArray =
            event.target.parentNode.parentNode.innerText.split("\t");
        const scopeSerialNo = rowDataArray[5];
        const scopeModelNo = rowDataArray[2];
        const scope = [scopeSerialNo, scopeModelNo];
        setSelectedScope(scope);

        const checkSample = (sample) => {
            return sample.serialNo === scopeSerialNo;
        };
        setScopeSamples(scopeSamplingInformation.filter(checkSample));
        // console.log(scopeSamples);

        setShow(true);
    };

    const handleClose2 = () => setShow2(false);
    const handleShow2 = (event) => {
        const rowDataArray =
            event.target.parentNode.parentNode.innerText.split("\t");

        const date = rowDataArray[2];
        const washedBy = rowDataArray[3];
        const collectedBy = rowDataArray[4];
        const circulatedBy = rowDataArray[5];
        const sampleInformation = [date, washedBy, collectedBy, circulatedBy];
        setSelectedSample(sampleInformation);

        setShow2(true);
    };

    const scopeQuery = [
        {
            id: 1,
            modelNo: "ModelNo1",
            scopeType: "ScopeType1",
            brand: "Brand1",
            serialNo: "SerialNo1",
            status: "Available",
            remarks: "",
            samplingFrequency: 6,
            lastSampledDate: "",
            nextSampleDeadline: "",
            loggedBy: "",
        },
        {
            id: 2,
            modelNo: "ModelNo2",
            scopeType: "ScopeType2",
            brand: "Brand2",
            serialNo: "SerialNo2",
            status: "Available",
            remarks: "",
            samplingFrequency: 6,
            lastSampledDate: "",
            nextSampleDeadline: "",
        },
    ];

    const scopeSamplingInformation = [
        {
            serialNo: "SerialNo1",
            modelNo: "ModelNo1",
            date: "12-12-2022",
            washedBy: "A",
            collectedBy: "B",
            circulatedBy: "C",
            loggedBy: "A",
        },
        {
            serialNo: "SerialNo1",
            modelNo: "ModelNo1",
            date: "2-2-2022",
            washedBy: "X",
            collectedBy: "Y",
            circulatedBy: "Z",
            loggedBy: "X",
        },
    ];

    return (
        <div>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{`${selectedScope[0]} [${selectedScope[1]}]`}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table
                        className="mt-2"
                        id="Scopes"
                        responsive
                        bordered
                        size="md"
                        striped
                    >
                        <thead>
                            <tr>
                                <th className="text-center">Actions</th>
                                <th>#</th>
                                <th className="w-auto">Date</th>
                                <th>Washed By</th>
                                <th>Collected By</th>
                                <th>Circulated By</th>
                                <th>Logged By</th>
                            </tr>
                        </thead>
                        <tbody>
                            {scopeSamples.map((tuple, index) => (
                                <tr id={tuple.serialNo}>
                                    <td className="text-center">
                                        <Button
                                            variant="success"
                                            as="input"
                                            type="button"
                                            value="Edit"
                                            onClick={handleShow2}
                                            size="sm"
                                            className=""
                                        />
                                    </td>
                                    <td className="col-1">{index + 1}</td>
                                    <td className="">{tuple.date}</td>
                                    <td className="">{tuple.washedBy}</td>
                                    <td className="">{tuple.collectedBy}</td>
                                    <td className="">{tuple.circulatedBy}</td>
                                    <td className="">{tuple.loggedBy}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Modal.Body>
            </Modal>

            <Modal show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                                        disabled
                                        value={null}
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
                                        disabled
                                        value={null}
                                    />
                                </FloatingLabel>
                            </Col>
                        </Row>

                        <Form.Label>Scope Details</Form.Label>
                        <Row className="mb-3">
                            <Col>
                                <FloatingLabel
                                    controlId="floatingInputGrid"
                                    label="Model No."
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="model no."
                                        onChange={null}
                                        value={selectedScope[1]}
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
                                        onChange={null}
                                        value={selectedScope[0]}
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
                                        onChange={null}
                                        value={selectedSample[1]}
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
                                        onChange={null}
                                        value={selectedSample[2]}
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
                                        onChange={null}
                                        value={selectedSample[3]}
                                    />
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose2}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose2}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            <Row>
                <Col>
                    <h2>Scopes</h2>
                </Col>
                <Col>
                    <DropdownComponent
                        onSelectOption={props.selectEquipment}
                        dropdownContents={dropdownContents}
                    />
                </Col>
                <Table
                    className="mt-3"
                    id="Scopes"
                    responsive
                    bordered
                    size="md"
                    striped
                >
                    <thead>
                        <tr>
                            <th className="text-center">Actions</th>
                            <th>#</th>
                            <th>Model Number</th>
                            <th>Scope Type</th>
                            <th>Brand</th>
                            <th>Serial Number</th>
                            <th>Status</th>
                            <th>Remarks</th>
                            <th>Sampling Frequency</th>
                            <th>Last Sampled Date</th>
                            <th>Next Sampled Deadline</th>
                        </tr>
                    </thead>
                    <tbody>
                        {scopeQuery.map((tuple, index) => (
                            <tr id={tuple.serialNo}>
                                <td className="text-center">
                                    <Button
                                        variant="primary"
                                        as="input"
                                        type="button"
                                        value="View Past Records"
                                        onClick={handleShow}
                                        size="sm"
                                    />
                                </td>
                                <td className="">{index + 1}</td>
                                <td className="">{tuple.modelNo}</td>
                                <td className="">{tuple.scopeType}</td>
                                <td className="">{tuple.brand}</td>
                                <td className="">{tuple.serialNo}</td>
                                <td className="">{tuple.status}</td>
                                <td className="">{tuple.remarks}</td>
                                <td className="">{tuple.samplingFrequency}</td>
                                <td className="">{tuple.lastSampledDate}</td>
                                <td className="">{tuple.nextSampleDeadline}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Row>
        </div>
    );
};

export default ScopesEquipmentOverview;
