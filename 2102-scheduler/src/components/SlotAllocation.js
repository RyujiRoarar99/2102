import React from "react";
import { Link } from "react-router-dom";

import BreadcrumbComponent from "./BreadcrumbComponent";
import Container from "react-bootstrap/Container";

const SlotAllocation = () => {
    const breadcrumbs = ["Home", "Slot Allocation"];
    return (
        <Container>
            <BreadcrumbComponent breadcrumbs={breadcrumbs} />
        </Container>
    );
};

export default SlotAllocation;
