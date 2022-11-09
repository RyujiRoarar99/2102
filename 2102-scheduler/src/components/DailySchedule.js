import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { faCropSimple } from "@fortawesome/free-solid-svg-icons";

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
        const equipmentTable =
            event.target.parentNode.parentNode.parentNode.parentNode.id;
        const rowDataString = event.target.parentNode.parentNode.innerText;
        const rowDataArray = rowDataString.split("\t");
        let rowDataObject;

        if (rowDataString.match(/\t/g).length === 4) {
            rowDataObject = {
                id: rowDataArray[0],
                modelNo: rowDataArray[1],
                // scopeType: rowDataArray[2],
                brand: rowDataArray[2],
                serialNo: rowDataArray[3],
                aerModelNo: "",
                aerSerialNo: "",
            };
        } else {
            rowDataObject = {
                id: rowDataArray[0],
                modelNo: "",
                serialNo: "",
                // scopeType: "",
                brand: "",
                aerModelNo: rowDataArray[1],
                aerSerialNo: rowDataArray[2],
            };
        }

        navigate("/LogRecords", {
            state: { data: rowDataObject, equipment: equipmentTable },
        });

        // alert(`You have selected scope id:${rowDataArray[0]}!`);
        // console.log(rowDataArray);
    };
    return (
        <Container className="mt-5">
            <h1 className="text-center">Today's Sampling Schedule</h1>
            <h2>Scopes</h2>
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
                        <th>#</th>
                        <th className="w-auto">Model Number</th>
                        {/* <th>Scope Type</th> */}
                        <th>Brand</th>
                        <th>Serial Number</th>
                        <th className="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {scopeQuery.map((tuple, index) => (
                        <tr id={tuple.serialNo}>
                            <td className="col-1">{index + 1}</td>
                            <td className="col-2">{tuple.modelNo}</td>
                            {/* <td className="col-2">{tuple.scopeType}</td> */}
                            <td className="col-3">{tuple.brand}</td>
                            <td className="col-2">{tuple.serialNo}</td>
                            <td className="text-center col-2">
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
            <Table
                className="mt-2"
                id="Washer"
                responsive
                bordered
                size="md"
                striped
            >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Model Number</th>
                        <th>Serial Number</th>
                        <th className="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {washerQuery.map((tuple, index) => (
                        <tr id={tuple.serialNo}>
                            <td className="col-1">{index + 1}</td>
                            <td>{tuple.modelNo}</td>
                            <td>{tuple.serialNo}</td>
                            <td className="text-center col-2">
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
