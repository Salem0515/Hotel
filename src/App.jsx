import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home/Home';
import { SigninSignup } from './Components/SigninSignup/SigninSignup';
import Rooms from './Components/Rooms/Rooms';

const Navigation = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/signin-signup">Sign In/Sign Up</Link>
    <Link to="/rooms">Rooms</Link>
  </nav>
);

const App = () => {
  return (
    <div>
      <Router basename="/Hotel">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin-signup" element={<SigninSignup />} />
          <Route path="/rooms" element={<Rooms />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
