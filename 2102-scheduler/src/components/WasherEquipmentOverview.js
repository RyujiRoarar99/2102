import React, { useState, useEffect } from "react";
import Axios from "axios";
import DropdownComponent from "./DropdownComponent";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import moment from "moment";

const WasherEquipmentOverview = (props) => {
    const dropdownContents = ["Select Equipment", "Scopes", "Washer"];
    const [selectedWasher, setSelectedWasher] = useState([]);
    const [WasherSamples, setWasherSamples] = useState([]);
    const [selectedSample, setSelectedSample] = useState([]);
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    //get value from Serial No filter
    const [filteredSerialNo, setFilteredSerialNo] = useState("");
    //get scope data from database
    const [washerData, setWasherData] = useState([]);

    useEffect(() => {
        Axios.post("http://localhost:3001/EquipmentOverviewWasher", {
            filteredSerialNo: filteredSerialNo,
        }).then((response) => {
            if (response.data.length) {
                setWasherData(response.data);
            } else {
                setWasherData([]);
            }
        });
    }, [filteredSerialNo]);
    const handleClose = () => setShow(false);
    const handleShow = (event) => {
        const rowDataArray =
            event.target.parentNode.parentNode.innerText.split("\t");
        const washerSerialNo = rowDataArray[3];
        const washerModelNo = rowDataArray[2];
        const washer = [washerSerialNo, washerModelNo];
        setSelectedWasher(washer);

        Axios.post("http://localhost:3001/EquipmentOverviewWasherLogs", {
            SerialNo: washerSerialNo,
        }).then((response) => {
            if (response.data.length) {
                setWasherSamples(response.data);
                setShow(true);
            } else {
                setWasherSamples([]);
                setShow(true);
            }
        });
    };

    const handleClose2 = () => setShow2(false);
    const handleShow2 = (event) => {
        const rowDataArray =
            event.target.parentNode.parentNode.innerText.split("\t");

        const date = rowDataArray[2];
        const collectedBy = rowDataArray[3];
        const circulatedBy = rowDataArray[4];
        const date_of_result = rowDataArray[6];
        const fluidResult = rowDataArray[7];
        const analysis = rowDataArray[8];
        const actionTaken = rowDataArray[9];
        const sampleInformation = [date, collectedBy, circulatedBy];
        setSelectedSample(sampleInformation);

        setShow2(true);
    };

    return (
        <div>
            <Modal
                show={show}
                onHide={handleClose}
                size="lg"
                dialogClassName="my-modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title>{`${selectedWasher[0]} [${selectedWasher[1]}]`}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table
                        className="mt-2"
                        id="Washers"
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
                                <th>Collected By</th>
                                <th>Circulated By</th>
                                <th>Logged By</th>
                                <th>Date of Result</th>
                                <th>Fluid Result</th>
                                <th>Analysis</th>
                                <th>Action Taken</th>
                            </tr>
                        </thead>
                        <tbody>
                            {WasherSamples.map((tuple, index) => (
                                <tr>
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
                                    <td className="">
                                        {moment(tuple.date_of_collection)
                                            .utc()
                                            .format("D MMM YYYY")}
                                    </td>{" "}
                                    {/* date of collection */}
                                    <td className="">
                                        {tuple.collected_by}
                                    </td>{" "}
                                    {/* collected by */}
                                    <td className="">
                                        {tuple.circulated_by}
                                    </td>{" "}
                                    {/* circulated by */}
                                    <td className="">
                                        {tuple.circulated_by}
                                    </td>{" "}
                                    {/* logged_by */}
                                    <td className="">
                                        {tuple.date_of_result}
                                    </td>{" "}
                                    {/* date of result */}
                                    <td className="">
                                        {tuple.fluid_result}
                                    </td>{" "}
                                    {/* fluid result */}
                                    <td className="">{tuple.analysis}</td>{" "}
                                    {/* analysis */}
                                    <td className="">
                                        {tuple.action_taken}
                                    </td>{" "}
                                    {/* action taken */}
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
                                    label="Date of Collection"
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="date of collection"
                                        disabled
                                        value={"23-11-2022"}
                                    />
                                </FloatingLabel>
                            </Col>
                        </Row>

                        <Form.Label>Washer Details</Form.Label>
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
                                        value={selectedWasher[1]}
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
                                        value={selectedWasher[0]}
                                    />
                                </FloatingLabel>
                            </Col>
                        </Row>

                        <Form.Label>Personnel Performed</Form.Label>

                        <Row className="mb-3">
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
                                        value={null}
                                    />
                                </FloatingLabel>
                            </Col>
                            <Col>
                                <FloatingLabel
                                    controlId="floatingInputGrid"
                                    label="Fluid Result"
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="fluid result"
                                        onChange={null}
                                        value={null}
                                    />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <FloatingLabel
                                    controlId="floatingInputGrid"
                                    label="Analysis"
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="analysis"
                                        onChange={null}
                                        value={null}
                                    />
                                </FloatingLabel>
                            </Col>
                            <Col>
                                <FloatingLabel
                                    controlId="floatingInputGrid"
                                    label="Action Taken"
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="action taken"
                                        onChange={null}
                                        value={null}
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
                <Col lg={8}>
                    <h2>Washers</h2>
                </Col>
                <Col lg={2}>
                    <FloatingLabel
                        controlId="floatingSerialNo"
                        label="Serial No."
                    >
                        <Form.Control
                            type="text"
                            placeholder="serial no"
                            onChange={(e) =>
                                setFilteredSerialNo(e.target.value)
                            }
                        />
                    </FloatingLabel>
                </Col>
                <Col lg={2}>
                    <DropdownComponent
                        onSelectOption={props.selectEquipment}
                        dropdownContents={dropdownContents}
                    />
                </Col>
                <Table
                    className="mt-3"
                    id="Washers"
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
                            <th>Serial Number</th>
                            <th>Status</th>
                            <th>Remarks</th>
                            <th>Sampling Frequency</th>
                            <th>Last Sampled Date</th>
                            <th>Next Sampled Deadline</th>
                        </tr>
                    </thead>
                    <tbody>
                        {washerData.map((tuple, index) => (
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
                                <td className="">{tuple.model_no}</td>
                                <td className="">{tuple.serial_no}</td>
                                <td className="">{tuple.status}</td>
                                <td className="">{tuple.remarks}</td>
                                <td className="">{tuple.sampling_frequency}</td>
                                <td className="">{tuple.last_sampling_date}</td>
                                <td className="">
                                    {tuple.next_required_sampling}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Row>
        </div>
    );
};

export default WasherEquipmentOverview;
