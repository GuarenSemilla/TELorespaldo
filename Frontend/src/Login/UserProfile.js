import React, { useEffect, useState } from 'react';

function UserProfile({ email, onLogout }) {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        console.log("Fetching user profile for email:", email);
        const response = await fetch(`/api/userDB/${email}`);
        if (!response.ok) {
          const text = await response.text();
          throw new Error(`Error ${response.status}: ${text}`);
        }

        const data = await response.json();
        setUserProfile(data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    if (email) {
      fetchUserProfile();
    }
  }, [email]); // Se debe ejecutar useEffect cuando el email cambie

  return (
    <div>
      {userProfile ? (
        <div>
          <h1>Bienvenido, {userProfile.nombre}</h1> {/* Corregido: userProfile.nombre en lugar de userProfile.name */}
          <p>Email: {userProfile.correo}</p> {/* Corregido: userProfile.correo en lugar de userProfile.email */}
          <button onClick={onLogout}>Logout</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default UserProfile;
