import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold mb-6 text-blue-600">Welcome to the Dashboard</h1>
        <p className="text-lg text-gray-700 mb-4">
          Manage your groups, users, and settings efficiently with our easy-to-use interface.
        </p>

        <div className="mt-8 space-y-4">
          <Link
            to="/groups"
            className="block px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
          >
            Manage Groups
          </Link>
          <Link
            to="/users"
            className="block px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600"
          >
            Manage Users
          </Link>
          <Link
            to="/settings"
            className="block px-6 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600"
          >
            Application Settings
          </Link>
        </div>

        <div className="mt-10">
          <p className="text-gray-500">
            Need help? Check out our <Link to="/help" className="text-blue-500 hover:underline">Help Center</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
