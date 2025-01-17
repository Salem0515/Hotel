import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home'
import { SigninSignup } from './Components/SigninSignup/SigninSignup'
import Rooms from './Components/Rooms/Rooms'

const App = () => {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin-signup" element={<SigninSignup />} />
        <Route path="/rooms" element={<Rooms />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
