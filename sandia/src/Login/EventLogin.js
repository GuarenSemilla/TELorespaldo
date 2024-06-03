import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserProfile from './UserProfile';
import Login from './Login';

function EventLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const handleLoginSuccess = (data) => {
    console.log("Login successful with data:", data); // Debugging log
    setIsLoggedIn(true);
    setUserData(data);
    navigate('/profile'); // Redirige a UserProfile
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData(null);
    navigate('/login'); // Redirige a Login si cierra sesión
  };

  return (
    <div>
      {isLoggedIn && userData ? (
        <UserProfile email={userData.email} onLogout={handleLogout} />
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default EventLogin;
