import React, { useEffect, useState } from 'react';

function UserProfile() {
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    // Realiza la petición al backend
    fetch('http://localhost:3001/api/getOneUser/123')
      .then(response => response.json())
      .then(data => setMensaje(data.name))
      .catch(error => console.error('Error:', error));
  }, []);
    const user = {
        name: mensaje,
        imageUrl: 'https://c.tenor.com/r0R0N3dI3kIAAAAd/tenor.gif',
        imageSize: 200,
      };
    return (
      <>
        <h1>{user.name}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Foto de ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
      </>
    );
  }
  export default UserProfile;