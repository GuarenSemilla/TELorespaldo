import React, { useEffect, useState } from 'react';

function UserProfile({ email, onLogout }) {
  const [userName, setUserName] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/getOneUser/${email}`);

        if (!response.ok) {
          const text = await response.text();
          throw new Error(`Error ${response.status}: ${text}`);
        }

        const data = await response.json();
        if (data && data.name) {
          setUserName(data.name);
        } else {
          throw new Error('Invalid user data');
        }
      } catch (error) {
        setError('Error: ' + error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [email]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const user = {
    name: userName,
    imageUrl: 'https://c.tenor.com/r0R0N3dI3kIAAAAd/tenor.gif',
    imageSize: 200,
  };

  return (
    <>
      <h2>{user.name}</h2>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Foto de ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
      <button onClick={onLogout}>Logout</button>
    </>
  );
}

export default UserProfile;
