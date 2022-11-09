import React, { useState } from "react";
import { Link } from "react-router-dom";

import ScopesEquipmentOverview from "./ScopesEquipmentOverview";
import WasherEquipmentOverview from "./WasherEquipmentOverview";
import BreadcrumbComponent from "./BreadcrumbComponent";
import Container from "react-bootstrap/Container";

const EquipmentOverview = (props) => {
    const breadcrumbs = ["Home", "Equipment Overview"];
    const [equipmentSelected, setEquipmentSelected] = useState("Scopes");

    const selectEquipment = (equipment) => {
        setEquipmentSelected(equipment);
    };

    return (
        <Container>
            <BreadcrumbComponent breadcrumbs={breadcrumbs} />

            {equipmentSelected === "Scopes" && (
                <ScopesEquipmentOverview selectEquipment={selectEquipment} />
            )}

            {equipmentSelected === "Washer" && (
                <WasherEquipmentOverview selectEquipment={selectEquipment} />
            )}
        </Container>
    );
};

export default EquipmentOverview;
