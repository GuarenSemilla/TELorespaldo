import React, { useEffect, useState } from 'react';

function UserProfile({ email, onLogout }) {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        console.log("Fetching user profile for email:", email);
        const response = await fetch(`http://localhost:3001/api/getUser/${email}`);
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
  }, [email]);

  return (
    <div>
      {userProfile ? (
        <div>
          <h1>Welcome, {userProfile.name}</h1>
          <p>Email: {userProfile.email}</p>
          <button onClick={onLogout}>Logout</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default UserProfile;
