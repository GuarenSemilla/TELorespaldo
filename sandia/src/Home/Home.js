import React, { useEffect, useState } from 'react';
import './Home.css';
function MyButton() {
  return (
    <button>Soy un botón</button>
  );
}
function Home() {
    const [mensaje, setMensaje] = useState('');

    useEffect(() => {
      // Realiza la petición al backend
      fetch('http://localhost:3001/api/getOneUser/La rosalia')
        .then(response => response.json())
        .then(data => setMensaje(data.name))
        .catch(error => console.error('Error:', error));
    }, []);
  return (
    <div className="home">
      <h1>{mensaje}</h1>
      <p>Bienvenido a la página principal.</p>
      <MyButton />
    </div>
  );
}

export default Home;