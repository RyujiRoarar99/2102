import React, { useState } from "react";
import { Link } from "react-router-dom";

import LogScopeForm from "./LogScopeForm";
import LogWasherForm from "./LogWasherForm";
import DropdownComponent from "./DropdownComponent";
import BreadcrumbComponent from "./BreadcrumbComponent";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const LogRecords = () => {
    const [equipmentSelected, setEquipmentSelected] = useState("Scopes");

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
                        <Col>
                            <DropdownComponent
                                className="float-end"
                                onSelectOption={onSelectOptionHandler}
                                dropdownContents={dropdownContents}
                            />
                        </Col>
                    </Row>

                    <LogScopeForm />
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
                    <LogWasherForm />
                </div>
            )}
        </Container>
    );
};

export default LogRecords;
