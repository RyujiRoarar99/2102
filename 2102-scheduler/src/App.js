import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/NavBar.css";


import Home from "./routes/Home";
import SlotAllocation from "./routes/SlotAllocation";
import EquipmentScheduling from "./routes/EquipmentScheduling";
import EquipmentOverview from "./routes/EquipmentOverview";
import LogRecords from "./routes/LogRecords";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/SlotAllocation" element={<SlotAllocation />} />
                <Route
                    path="/EquipmentScheduling"
                    element={<EquipmentScheduling />}
                />
                <Route
                    path="/EquipmentOverview"
                    element={<EquipmentOverview />}
                />
                <Route path="/LogRecords" element={<LogRecords />} />
            </Routes>
        </>
    );
}

export default App;
