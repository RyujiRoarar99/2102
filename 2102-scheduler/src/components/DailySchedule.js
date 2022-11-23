import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { faCropSimple } from "@fortawesome/free-solid-svg-icons";

const DailySchedule = (props) => {
    const navigate = useNavigate();
    const [scopeQuery, setScopeQuery] = useState([]);
    const [washerQuery, setWasherQuery] = useState([]);
    useEffect(()=> {
        //get all equipment
        Axios.post("http://localhost:3001/GetScopeToday").then((response) => {
        if(response.data.length) {
            setScopeQuery(response.data);
        }
        else {
            setScopeQuery([]);
        }
        });
        //get all equipment
        Axios.post("http://localhost:3001/GetWasherToday").then((response) => {
        if(response.data.length) {
            setWasherQuery(response.data);
        }
        else {
            setWasherQuery([]);
        }
        });
    },[])

    const clickHandler2 = (event) => {
        const equipmentTable =
            event.target.parentNode.parentNode.parentNode.parentNode.id;
        const rowDataString = event.target.parentNode.parentNode.innerText;
        const rowDataArray = rowDataString.split("\t");
        let date = new Date();
        date = date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate();
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
            //get all equipment
            Axios.post("http://localhost:3001/DeleteScopeToday",{date: date,serial_no:rowDataObject.serialNo}).then((response) => {});
            window.location.reload();
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
            Axios.post("http://localhost:3001/DeleteWasherToday",{date: date,serial_no:rowDataObject.aerSerialNo}).then((response) => {});
            window.location.reload();
        }
    }

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
                        <tr id={tuple.serial_no}>
                            <td className="col-1">{index + 1}</td>
                            <td className="col-2">{tuple.model_no}</td>
                            {/* <td className="col-2">{tuple.scopeType}</td> */}
                            <td className="col-3">{tuple.brand}</td>
                            <td className="col-2">{tuple.serial_no}</td>
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
                                    onClick={clickHandler2}
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
                        <tr id={tuple.serial_no}>
                            <td className="col-1">{index + 1}</td>
                            <td>{tuple.model_no}</td>
                            <td>{tuple.serial_no}</td>
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
                                    onClick={clickHandler2}
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
