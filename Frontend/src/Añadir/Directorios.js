import React, { useState, useEffect } from 'react';
import { Row, Col, FloatingLabel, Form, Button, Alert } from 'react-bootstrap';

function DirectorioRegistro() {
  const [rutaArchivo, setRutaArchivo] = useState("");
  const [sigla, setSigla] = useState("");
  const [tipoDocumento, setTipoDocumento] = useState("");
  const [correo, setCorreo] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [asignaturas, setAsignaturas] = useState([]);

  useEffect(() => {
    fetch('/api/asignatura')
      .then(response => response.json())
      .then(data => setAsignaturas(data))
      .catch(error => console.error('Error:', error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rutaArchivo === "" || sigla === "" || tipoDocumento === "" || correo === "") {
      setError('Todos los campos son obligatorios');
      setSuccess(false);
      return;
    }

    try {
      const response = await fetch('/api/directorio', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "ruta_del_archivo": rutaArchivo,
          "sigla": sigla,
          "tipo_de_documento": tipoDocumento,
          "correo": correo
        }),
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Error ${response.status}: ${text}`);
      }

      const result = await response.json();
      console.log("Response from server:", result);
      setSuccess(true);
      setError('');
      // Limpiar los campos después del registro exitoso
      setRutaArchivo("");
      setSigla("");
      setTipoDocumento("");
      setCorreo("");
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

  const asignaturaOptions = asignaturas.map(asignatura => (
    <option key={asignatura._id} value={asignatura.sigla}>{asignatura.nombre} ({asignatura.sigla})</option>
  ));

  return (
    <form onSubmit={handleSubmit}>
      {success && (
        <Alert variant="success">
          <Alert.Heading>¡Directorio registrado exitosamente!</Alert.Heading>
        </Alert>
      )}
      {error && (
        <Alert variant="danger">
          <Alert.Heading>{error}</Alert.Heading>
        </Alert>
      )}
      <Row className="g-2">
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Ruta del archivo">
            <Form.Control
              type="text"
              placeholder="Ruta del archivo"
              value={rutaArchivo}
              onChange={(e) => setRutaArchivo(e.target.value)}
            />
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingSelectGrid" label="Sigla">
            <Form.Select
              value={sigla}
              onChange={(e) => setSigla(e.target.value)}
            >
              <option value="">Seleccione una sigla</option>
              {asignaturaOptions}
            </Form.Select>
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Tipo de documento">
            <Form.Control
              type="text"
              placeholder="Tipo de documento"
              value={tipoDocumento}
              onChange={(e) => setTipoDocumento(e.target.value)}
            />
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Correo">
            <Form.Control
              type="email"
              placeholder="Correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </FloatingLabel>
        </Col>
      </Row>
      <Button type="submit" disabled={rutaArchivo === '' || sigla === '' || tipoDocumento === '' || correo === ""}>Enviar</Button>
    </form>
  );
}

export default DirectorioRegistro;
