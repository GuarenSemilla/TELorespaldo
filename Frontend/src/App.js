import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import Home from './Home/Home';
import List from './Home/List';
import Header from './Home/headers';
import Registro from './Añadir/UserRegistro';
import EventLogin from './Login/EventLogin';
import UserProfile from './Login/UserProfile';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Lógica para manejar el inicio de sesión (puede ser una llamada a tu backend)
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Lógica para manejar el cierre de sesión
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className='App'>
        <Header titulo="TELorespaldo" isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <Container>
          <Row>
            <Col><Link to="/">Home</Link></Col>
            <Col><Link to="/list">List</Link></Col>
            {!isLoggedIn && <Col><Link to="/registro">Registro</Link></Col>}
            {!isLoggedIn && <Col><Link to="/login">Login</Link></Col>}
          </Row>
        </Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          {!isLoggedIn && <Route path="/registro" element={<Registro />} />}
          {!isLoggedIn && <Route path="/login" element={<EventLogin handleLogin={handleLogin} />} />}
          {isLoggedIn && <Route path="/perfil" element={<UserProfile />} />}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
