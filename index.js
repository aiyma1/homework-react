import React from 'react';
import UserList from './UserList';

const App = () => {
  const initialUsers = [
    { id: 1, name: 'Akjal', active: false },
    { id: 2, name: 'Tair', active: false },
    { id: 3, name: 'Nuraida', active: false },
  ];

  return (
    <div>
      <h1>User List</h1>
      <UserList initialUsers={initialUsers} />
    </div>
  );
};

export default App;
