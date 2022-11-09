import React, { useState } from "react";
import Axios from "axios";
import DropdownComponent from "./DropdownComponent";

import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const WasherEquipmentOverview = (props) => {
    const dropdownContents = ["Select Equipment", "Scopes", "Washer"];
    const [washerData, setWasherData] = useState([]);
    Axios.post("http://localhost:3001/EquipmentOverviewWasher").then(
        (response) => {
            if (response.data.length) {
                setWasherData(response.data);
            }
        }
    );

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
                        {washerData.map((tuple, index) => (
                            <tr id={tuple.serialNo}>
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
