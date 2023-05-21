import React, { useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);

  const handleClick = (selectedUser) => {
    const updatedUsers = users.map(user => {
      if (user.id === selectedUser.id) {
        return { ...user, active: true };
      }
      return { ...user, active: false };
    });
    setUsers(updatedUsers);
  };

  const renderUser = (user) => {
    return (
      <li
        key={user.id}
        onClick={() => handleClick(user)}
        style={{ fontWeight: user.active ? 'bold' : 'normal' }}
      >
        {user.name}
      </li>
    );
  };

  return (
    <ul>
      {users.map(user => renderUser(user))}
    </ul>
  );
};

export default UserList;
