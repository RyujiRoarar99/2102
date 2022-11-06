import React from "react";
import { Link } from "react-router-dom";

import BreadcrumbComponent from "./BreadcrumbComponent";
import Container from "react-bootstrap/Container";

const EquipmentScheduling = () => {
    const breadcrumbs = ["Home", "Equipment Scheduling"];
    return (
        <Container>
            <BreadcrumbComponent breadcrumbs={breadcrumbs} />
        </Container>
    );
};

export default EquipmentScheduling;
