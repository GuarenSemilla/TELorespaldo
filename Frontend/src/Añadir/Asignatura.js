import React, { useState } from 'react';
import { Row, Col, FloatingLabel, Form, Button, Alert } from 'react-bootstrap';

function AsignaturaRegistro() {
  const [nombre, setNombre] = useState("");
  const [codigo, setCodigo] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (nombre === "" || codigo === "") {
      setError('Todos los campos son obligatorios');
      setSuccess(false);
      return;
    }

    try {
      const response = await fetch('/api/asignatura', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "nombre": nombre, "codigo": codigo }),
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Error ${response.status}: ${text}`);
      }
      const result = await response.json();
      console.log("Response from server:", result);
      setSuccess(true);
      setError('');
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
          <Alert.Heading>¡Asignatura registrada exitosamente!</Alert.Heading>
        </Alert>
      )}
      {error && (
        <Alert variant="danger">
          <Alert.Heading>{error}</Alert.Heading>
        </Alert>
      )}
      <Row className="g-2">
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Nombre de la asignatura">
            <Form.Control
              type="text"
              placeholder="Nombre de la asignatura"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Código de la asignatura">
            <Form.Control
              type="text"
              placeholder="Código de la asignatura"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
            />
          </FloatingLabel>
        </Col>
      </Row>
      <Button type="submit" disabled={nombre === '' || codigo === ''}>Enviar</Button>
    </form>
  );
}

export default AsignaturaRegistro;
