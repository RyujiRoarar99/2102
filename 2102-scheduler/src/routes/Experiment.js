import React from "react";
import Navbar from "../components/NavBar";
import EquipmentSchedulingPage from "../components/EquipmentScheduling";
import EquipmentOverviewPage from "../components/EquipmentOverview";

const Experiment = () => {
    return (
        <div>
            <Navbar />
            <EquipmentOverviewPage />
            <EquipmentSchedulingPage test = {[]} />
        </div>
    );
}

export default Experiment;