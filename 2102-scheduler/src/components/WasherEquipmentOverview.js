import React, { useState } from "react";

import DropdownComponent from "./DropdownComponent";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const WasherEquipmentOverview = (props) => {
    const dropdownContents = ["Select Equipment", "Scopes", "Washer"];

    const washerQuery = [
        {
            id: 1,
            modelNo: "AERModelNo1",
            serialNo: "AERSerialNo1",
            status: "Available",
            remarks: "",
            samplingFrequency: 6,
            lastSampledDate: "",
            nextSampleDeadline: "",
        },
        {
            id: 2,
            modelNo: "AERModelNo2",
            serialNo: "AERSerialNo2",
            status: "Available",
            remarks: "",
            samplingFrequency: 6,
            lastSampledDate: "",
            nextSampleDeadline: "",
        },
    ];

    return (
        <div>
            <Row>
                <Col>
                    <h2>Washer</h2>
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
                            <th>#</th>
                            <th className="w-auto">Model Number</th>
                            <th>Serial Number</th>
                            <th>Status</th>
                            <th>Remarks</th>
                            <th>Sampling Frequency</th>
                            <th>Last Sampled Date</th>
                            <th>Next Sampled Deadline</th>
                        </tr>
                    </thead>
                    <tbody>
                        {washerQuery.map((tuple, index) => (
                            <tr id={tuple.serialNo}>
                                <td className="">{index + 1}</td>
                                <td className="">{tuple.modelNo}</td>
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

export default WasherEquipmentOverview;
