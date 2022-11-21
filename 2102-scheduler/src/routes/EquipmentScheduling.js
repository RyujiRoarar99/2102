import React from "react";
import Navbar from "../components/NavBar";
import EquipmentSchedulingPage from "../components/EquipmentScheduling";


const EquipmentScheduling = (props) => {
    return (
        <div>
            <Navbar />
            <EquipmentSchedulingPage test = {[1]}/>
        </div>
    );
};



export default EquipmentScheduling;
