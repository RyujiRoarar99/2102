import React from "react";
import { Link } from "react-router-dom";

import BreadcrumbComponent from "./BreadcrumbComponent";
import Container from "react-bootstrap/Container";

const EquipmentOverview = (props) => {
    const breadcrumbs = ["Home", "Equipment Overview"];
    return (
        <Container>
            <BreadcrumbComponent breadcrumbs={breadcrumbs} />
        </Container>
    );
};

export default EquipmentOverview;
