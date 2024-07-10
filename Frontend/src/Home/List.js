import React, { useEffect, useState } from 'react';

function List() {
  const [directorios, setDirectorios] = useState([]);
  const [asignaturas, setAsignaturas] = useState([]);
  const [selectedSigla, setSelectedSigla] = useState('');

  useEffect(() => {
    // Realiza la petición para obtener los directorios
    fetch('/api/directorio')
      .then(response => response.json())
      .then(data => setDirectorios(data))
      .catch(error => console.error('Error:', error));

    // Realiza la petición para obtener las asignaturas
    fetch('/api/asignatura')
      .then(response => response.json())
      .then(data => setAsignaturas(data))
      .catch(error => console.error('Error:', error));
  }, []);

  const handleSiglaChange = (e) => {
    setSelectedSigla(e.target.value);
  };

  const filteredDirectorios = selectedSigla
    ? directorios.filter(directorio => directorio.sigla === selectedSigla)
    : directorios;

  const directoriosItems = filteredDirectorios.map(directorio => (
    <li key={directorio._id}>
      <a href={directorio.ruta_del_archivo}>{directorio.ruta_del_archivo}</a>, 
      Sigla: {directorio.sigla}, 
      Tipo de Documento: {directorio.tipo_de_documento}, 
      Autor: {directorio.correo}
    </li>
  ));

  const asignaturasOptions = asignaturas.map(asignatura => (
    <option key={asignatura._id} value={asignatura.sigla}>{asignatura.nombre} ({asignatura.sigla})</option>
  ));

  return (
    <div>
      <h1>Lista de Directorios</h1>
      <select onChange={handleSiglaChange} value={selectedSigla}>
        <option value="">Todas las categoría</option>
        {asignaturasOptions}
      </select>
      <ul>{directoriosItems}</ul>
    </div>
  );
}

export default List;
