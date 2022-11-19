import React from "react";
import Navbar from "../components/NavBar";
import EquipmentSchedulingPage from "../components/EquipmentScheduling";
import EquipmentOverviewPage from "../components/EquipmentOverview";

const Experiment = () => {
    return (
        <div>
            <Navbar />
            <EquipmentSchedulingPage />
            <EquipmentOverviewPage />
        </div>
    );
}

export default Experiment;