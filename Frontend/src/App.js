import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { Row, Col, Button, Container } from 'react-bootstrap';
import Home from './Home/Home';
import List from './Home/List';
import Header from './Home/headers';
import Registro from './Añadir/UserRegistro';
import Directorio from './Añadir/Directorios';
import Login from './Login/Login';
import UserProfile from './Login/UserProfile';

import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const handleLogin = (email) => {
    setIsLoggedIn(true);
    setUserEmail(email); // Establecer el email del usuario al hacer login
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail('');
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
            {isLoggedIn && <Col><Link to="/perfil">Perfil</Link></Col>}
            {isLoggedIn && <Col><Link to="/añadir">Subir archivo</Link></Col>}
            {isLoggedIn && <Col><Button onClick={handleLogout}>Logout</Button></Col>}
          </Row>
        </Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          {!isLoggedIn && <Route path="/registro" element={<Registro />} />}
          {!isLoggedIn && <Route path="/login" element={<Login handleLogin={handleLogin} />} />}
          {isLoggedIn && <Route path="/perfil" element={<UserProfile email={userEmail} onLogout={handleLogout} />} />} {/* Pasar userEmail como prop a UserProfile */}
          {isLoggedIn && <Route path="/añadir" element={<Directorio />} />}
          {/* Redirigir a la página de inicio si no está logeado y se intenta acceder a una ruta privada */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
