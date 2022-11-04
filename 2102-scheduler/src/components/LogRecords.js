import React, { useState } from "react";
import { Link } from "react-router-dom";

import LogScopeForm from "./LogScopeForm.js";
import LogWasherForm from "./LogWasherForm.js";

import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const LogRecords = () => {
    const [equipmentSelected, setEquipmentSelected] = useState("Scopes");

    return (
        <Container>
            <Breadcrumb className="mt-5">
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Log Records</Breadcrumb.Item>
            </Breadcrumb>

            <LogScopeForm />
        </Container>
    );
};

export default LogRecords;
