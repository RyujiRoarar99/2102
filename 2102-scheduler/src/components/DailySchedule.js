import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const DailySchedule = (props) => {
    const navigate = useNavigate();
    const sqlQuery = [
        {
            id: 1,
            modelNo: "ModelNo",
            scopeType: "ScopeType",
            brand: "Brand",
            serialNo: "SerialNo",
        },
        {
            id: 2,
            modelNo: "ModelNo",
            scopeType: "ScopeType",
            brand: "Brand",
            serialNo: "SerialNo",
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
            <h2>Today's Sampling Schedule</h2>
            <Table className="mt-2" responsive bordered>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Model Number</th>
                        <th>Scope Type</th>
                        <th>Brand</th>
                        <th>Serial Number</th>
                    </tr>
                </thead>
                <tbody>
                    {sqlQuery.map((tuple) => (
                        <tr id={tuple.id}>
                            <td>{tuple.id}</td>
                            <td>{tuple.modelNo}</td>
                            <td>{tuple.scopeType}</td>
                            <td>{tuple.brand}</td>
                            <td>{tuple.serialNo}</td>
                            <td>
                                <Button
                                    as="input"
                                    type="button"
                                    value="Log"
                                    onClick={clickHandler}
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
