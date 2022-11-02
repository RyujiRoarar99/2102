import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from './routes/Home'
import SlotAllocation from './routes/SlotAllocation'
import EquipmentScheduling from './routes/EquipmentScheduling'
import OverallView from './routes/OverallView'
import LogRecords from './routes/LogRecords'
import LogInPage from './routes/LogInPage'
import RegisterPage from './routes/RegisterPage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<RegisterPage />} />
        <Route path='/Home' element={< Home/>} />
        <Route path='/SlotAllocation' element={< SlotAllocation/>} />
        <Route path='/EquipmentScheduling' element={< EquipmentScheduling/>} />
        <Route path='/OverallView' element={< OverallView/>} />
        <Route path='/LogRecords' element={< LogRecords/>} />
      </Routes>
    </>
  );
}

export default App;