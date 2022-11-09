import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/NavBar.css";

import Home from "./routes/Home";
import SlotAllocation from "./routes/SlotAllocation";
import EquipmentScheduling from "./routes/EquipmentScheduling";
import EquipmentOverview from "./routes/EquipmentOverview";
import LogRecords from "./routes/LogRecords";
import LogInPage from "./routes/LogInPage";
import RegisterPage from "./routes/RegisterPage";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<LogInPage />} />
                <Route path="/RegisterPage" element={<RegisterPage />} />
                <Route path="/Home" element={<Home />} />
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
