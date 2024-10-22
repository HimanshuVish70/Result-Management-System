import React from 'react';

const AdminNavbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="/admin">Dashboard</a></li>
        <li><a href="/logout">Logout</a></li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
