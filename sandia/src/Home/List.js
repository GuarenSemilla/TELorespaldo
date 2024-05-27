import React, { useEffect, useState } from 'react';

function List() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Realiza la petición al backend
        fetch('http://localhost:3001/api/getAllUsers')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error:', error));
    }, []);

    const listItems = users.map(user => (
        <li key={user.userid}>
            ID: {user.id}, Name: {user.name}, Email: ({user.correo})
        </li>
    ));

    return (
        <div>
            <h1>Lista de Usuarios</h1>
            <ul>{listItems}</ul>
        </div>
    );
}

export default List;
