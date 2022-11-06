import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

const DailySchedule = (props) => {
    const navigate = useNavigate();

    const scopeQuery = [
        {
            id: 1,
            modelNo: "ModelNo1",
            scopeType: "ScopeType1",
            brand: "Brand1",
            serialNo: "SerialNo1",
        },
        {
            id: 2,
            modelNo: "ModelNo2",
            scopeType: "ScopeType2",
            brand: "Brand2",
            serialNo: "SerialNo2",
        },
    ];

    const washerQuery = [
        {
            id: 1,
            modelNo: "AERModelNo1",
            serialNo: "AERSerialNo2",
        },
        {
            id: 2,
            modelNo: "AERModelNo2",
            serialNo: "AERSerialNo2",
        },
    ];

    const clickHandler = (event) => {
        const rowDataString = event.target.parentNode.parentNode.innerText;
        const rowDataArray = rowDataString.split("\t");
        const rowDataObject = {
            id: rowDataArray[0],
            modelNo: rowDataArray[1],
            scopeType: rowDataArray[2],
            brand: rowDataArray[3],
            serialNo: rowDataArray[4],
        };
        navigate("/LogRecords", { state: { data: rowDataObject } });

        // alert(`You have selected scope id:${rowDataArray[0]}!`);
        // console.log(rowDataArray);
        // console.log(event);
    };
    return (
        <Container className="mt-5">
            <h1>Today's Sampling Schedule</h1>
            <h2>Scopes</h2>
            <Table className="mt-2" responsive bordered size="md" striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th className="w-auto">Model Number</th>
                        <th>Scope Type</th>
                        <th>Brand</th>
                        <th>Serial Number</th>
                        <th className="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {scopeQuery.map((tuple, index) => (
                        <tr id={tuple.serialNo}>
                            <td>{index + 1}</td>
                            <td>{tuple.modelNo}</td>
                            <td>{tuple.scopeType}</td>
                            <td>{tuple.brand}</td>
                            <td>{tuple.serialNo}</td>
                            <td className="text-center">
                                <Button
                                    variant="success"
                                    as="input"
                                    type="button"
                                    value="Log"
                                    onClick={clickHandler}
                                    size="sm"
                                    className="me-3"
                                />
                                <Button
                                    variant="danger"
                                    as="input"
                                    type="button"
                                    value="Cancel"
                                    onClick={clickHandler}
                                    size="sm"
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <h2>Washer</h2>
            <Table className="mt-2" responsive bordered size="md" striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Model Number</th>
                        <th>Serial Number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {washerQuery.map((tuple, index) => (
                        <tr id={tuple.serialNo}>
                            <td>{index + 1}</td>
                            <td>{tuple.modelNo}</td>
                            <td>{tuple.serialNo}</td>
                            <td className="text-center">
                                <Button
                                    variant="success"
                                    as="input"
                                    type="button"
                                    value="Log"
                                    onClick={clickHandler}
                                    size="sm"
                                    className="me-3"
                                />
                                <Button
                                    variant="danger"
                                    as="input"
                                    type="button"
                                    value="Cancel"
                                    onClick={clickHandler}
                                    size="sm"
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default DailySchedule;
