import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserProfile from './UserProfile';

function Login(onLoginSuccess ) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/userlogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "correo": email, "clave":password }),
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Error ${response.status}: ${text}`);
      }
      const userData = { email };//Se asume que el backend devuelve los datos del usuario en 'data.user'
      //onLoginSuccess(userData);
    } catch (error) {
      setError('Error de red: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}

export default Login;