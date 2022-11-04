import React, { useState } from "react";
import { Link } from "react-router-dom";

import LogScopeForm from "./LogScopeForm";
import LogWasherForm from "./LogWasherForm";
import DropdownField from "./DropdownField";

import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const LogRecords = () => {
    const [equipmentSelected, setEquipmentSelected] = useState("Scopes");

    const onSelectOptionHandler = (equipment) => {
        setEquipmentSelected(equipment);
    };

    return (
        <Container>
            <Breadcrumb className="mt-5">
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Log Records</Breadcrumb.Item>
            </Breadcrumb>

            {equipmentSelected === "Scopes" && (
                <div>
                    <Row className="mb-3">
                        <Col>
                            <h2>Scope Logger</h2>
                        </Col>
                        <Col>
                            <DropdownField
                                className="float-end"
                                onSelectOption={onSelectOptionHandler}
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
                            <DropdownField
                                className="float-end"
                                onSelectOption={onSelectOptionHandler}
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
