import React, { useState } from 'react';
import { Row, Col, FloatingLabel, Form, Button, Alert } from 'react-bootstrap';

function UserRegistro() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ((nombre === "")||(correo==="")||(clave==="")) {
      setError('Todos los campos son obligatorios');
      setSuccess(false);
      return;
    }

    try {
      const response = await fetch('/api/userDB', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "nombre": nombre, "correo": correo, "clave": clave}),
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Error ${response.status}: ${text}`);
      }
      const result = await response.json();
      console.log("Response from server:", result);
      setSuccess(true);
      setError(''); //setSuccess(false);
    } catch (error) {
      setSuccess(false);
      try {
        const errorJson = JSON.parse(error.message.split(': ')[1]);
        const errorMessage = Object.values(errorJson)
          .flat()
          .join(' ');
        setError(errorMessage);
      } catch (e) {
        setError(error.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {success && (
        <Alert variant="success">
          <Alert.Heading>¡Usuario registrado exitosamente!</Alert.Heading>
        </Alert>
      )}
      {error && (
        <Alert variant="danger">
          <Alert.Heading>{error}</Alert.Heading>
        </Alert>
      )}
      <Row className="g-2">
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Nombre de usuario">
            <Form.Control
              type="text"
              placeholder="Nombre de usuario"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Correo">
            <Form.Control
              type="email"
              placeholder="Nombre de usuario"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Contraseña">
            <Form.Control
              type="password"
              placeholder="Nombre de usuario"
              value={clave}
              onChange={(e) => setClave(e.target.value)}
            />
          </FloatingLabel>
        </Col>
      </Row>
      <Button type="submit" disabled={nombre === '' }>Enviar</Button>
    </form>
  );
}

export default UserRegistro;
