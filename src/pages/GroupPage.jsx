import  { useState, useEffect } from 'react';
import axios from 'axios';

function GroupPage() {
  const [groups, setGroups] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [message, setMessage] = useState('');

  // Fetch existing groups from API on component mount
  useEffect(() => {
    fetchGroups();
  }, []);

  const fetchGroups = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/groups');
      setGroups(response.data.groups);
    } catch (error) {
      console.error('Error fetching groups:', error);
    }
  };

  // Handle group creation
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/groups', {
        name,
        description,
        created_by: createdBy
      });
      setMessage('Group created successfully!');
      fetchGroups(); // Refresh group list
      setName('');
      setDescription('');
      setCreatedBy('');
    } catch (error) {
      setMessage('Failed to create group. Please try again.');
      console.error('Error creating group:', error);
    }
  };

  // Handle group deletion
  const handleDelete = async (groupId) => {
    try {
      await axios.delete(`http://localhost:8000/api/groups/${groupId}`);
      setMessage('Group deleted successfully!');
      fetchGroups(); // Refresh group list
    } catch (error) {
      setMessage('Failed to delete group. Please try again.');
      console.error('Error deleting group:', error);
    }
  };

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Manage Groups</h1>

      {/* Form to create a new group */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Create a New Group</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Group Name</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Created By (User ID)</label>
            <input
              type="number"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={createdBy}
              onChange={(e) => setCreatedBy(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Create Group
          </button>
        </form>
        {message && <p className="mt-4 text-green-500">{message}</p>}
      </div>

      {/* Display list of groups */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Existing Groups</h2>
        <ul>
          {groups.map((group) => (
            <li key={group.id} className="flex justify-between items-center mb-4">
              <div>
                <p className="text-lg font-medium">{group.name}</p>
                <p className="text-sm text-gray-600">{group.description}</p>
              </div>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
                onClick={() => handleDelete(group.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default GroupPage;
