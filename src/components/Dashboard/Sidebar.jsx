import React from 'react';

function Sidebar() {
  return (
    <div className="bg-gray-800 w-64 h-full text-white flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
      </div>
      <nav className="flex flex-col p-6">
        <a href="#" className="mb-2 hover:bg-gray-700 p-2 rounded">Overview</a>
        <a href="#" className="mb-2 hover:bg-gray-700 p-2 rounded">Users</a>
        <a href="#" className="mb-2 hover:bg-gray-700 p-2 rounded">Orders</a>
        <a href="#" className="mb-2 hover:bg-gray-700 p-2 rounded">Group Management</a> {/* Lien ajouté */}
        <a href="#" className="mb-2 hover:bg-gray-700 p-2 rounded">Settings</a>
      </nav>
    </div>
  );
}

export default Sidebar;
