import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import LogScopeForm from "./LogScopeForm";
import LogWasherForm from "./LogWasherForm";
import DropdownComponent from "./DropdownComponent";
import BreadcrumbComponent from "./BreadcrumbComponent";

import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const LogRecords = () => {
    const { state } = useLocation();
    let stateEquipment = "Scopes";
    try {
        stateEquipment = state.equipment;
    } catch (err) {}

    // console.log(stateEquipment);

    const [equipmentSelected, setEquipmentSelected] = useState(stateEquipment);

    let data = {
        id: "",
        modelNo: "",
        scopeType: "",
        brand: "",
        serialNo: "",
        aerSerialNo: "",
        aerModelNo: "",
    };
    try {
        ({ data } = state);
    } catch (err) {}

    const breadcrumbs = ["Home", "Log Records"];
    const dropdownContents = ["Select Equipment", "Scopes", "Washer"];
    const onSelectOptionHandler = (equipment) => {
        setEquipmentSelected(equipment);
    };

    return (
        <Container>
            <BreadcrumbComponent breadcrumbs={breadcrumbs} />

            {equipmentSelected === "Scopes" && (
                <div>
                    <Row className="mb-3">
                        <Col>
                            <h2>Scope Logger</h2>
                        </Col>
                        <Col className="float-end">
                            <DropdownComponent
                                onSelectOption={onSelectOptionHandler}
                                dropdownContents={dropdownContents}
                            />
                        </Col>
                    </Row>

                    <LogScopeForm data={data} />
                </div>
            )}

            {equipmentSelected === "Washer" && (
                <div>
                    <Row className="mb-3">
                        <Col>
                            <h2>Washer Logger</h2>
                        </Col>
                        <Col>
                            <DropdownComponent
                                className="float-end"
                                onSelectOption={onSelectOptionHandler}
                                dropdownContents={dropdownContents}
                            />
                        </Col>
                    </Row>
                    <LogWasherForm data={data} />
                </div>
            )}
        </Container>
    );
};

export default LogRecords;
