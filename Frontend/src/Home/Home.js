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
      fetch('http://localhost:3001/api/getOneUser/semillin@gmail.com')
        .then(response => response.json())
        .then(data => setMensaje(data.name))
        .catch(error => console.error('Error:', error));
    }, []);
  return (
    <div className="home">
      <h2>Bienvenido a TELorespaldo</h2>
    </div>
  );
}

export default Home;