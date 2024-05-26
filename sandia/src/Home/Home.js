import React, { useEffect, useState } from 'react';
import './Home.css';

function Home() {
    const [mensaje, setMensaje] = useState('');

    useEffect(() => {
      // Realiza la petición al backend
      fetch('http://localhost:3001/api/saludo')
        .then(response => response.json())
        .then(data => setMensaje(data.mensaje))
        .catch(error => console.error('Error:', error));
    }, []);
  return (
    <div className="home">
      <h1>{mensaje}</h1>
      <p>Bienvenido a la página principal.</p>
    </div>
  );
}

export default Home;