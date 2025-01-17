import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home'
import { SigninSignup } from './Components/SigninSignup/SigninSignup'
import Rooms from './Components/Rooms/Rooms'

const App = () => {
  return (
    <div>
      <Router >
        <Routes>
          <Route basename="/Bondi_Hotel" path="/" element={<Home />} />
          <Route basename="/Bondi_Hotel" path="/signin-signup" element={<SigninSignup />} />
          <Route basename="/Bondi_Hotel" path="/rooms" element={<Rooms />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
