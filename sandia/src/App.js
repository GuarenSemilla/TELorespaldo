import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Form, Row, Col, Button, Container } from 'react-bootstrap'
import Home from './Home/Home';
import About from './Home/About';
import Contact from './Home/Contact';
import EventLogin from './Login/EventLogin';
import UserProfile from './Login/UserProfile';
import List from './Home/List';
import Header from './Home/headers';
import './App.css'

function App() {
  return (
    <Router>
      <div className='App'>
        <Header titulo="TELorespaldo"/>
        <Container>
          <Row>
            <Col><Link to="/">Home</Link></Col>
            <Col><Link to="/about">About</Link></Col>
            <Col><Link to="/contact">Contact</Link></Col>
            <Col><Link to="/login">Login</Link></Col>
            <Col><Link to="/list">List</Link></Col>
          </Row>
        </Container>
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