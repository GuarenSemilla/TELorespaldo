import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home/Home';
import About from './Home/About';
import Contact from './Home/Contact';
import EventLogin from './Login/EventLogin';
import UserProfile from './Login/UserProfile';
import List from './Home/List';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/list">List</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<EventLogin />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;