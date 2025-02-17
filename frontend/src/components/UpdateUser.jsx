import React, { useEffect, useState } from "react";
import { getUsers } from "./ReadUser";
import axios from "axios";

const UpdateUser = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({
    email: "",
    first_name: "",
    last_name: "",
    age: "",
    gender: "",
    phone: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsers();
      setUsers(data);
    };
    fetchData();
  }, []);

  // ✅ Open modal with user details
  const handleOpenModal = (user) => {
    setSelectedUser(user);
    setUpdatedUser({
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      age: user.age,
      gender: user.gender,
      phone: user.phone,
    });
    setIsModalOpen(true);
  };

  // ✅ Handle form input change
  const handleChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  // ✅ Handle update request
  const handleUpdateUser = async () => {
    try {
      const response = await axios.put(
        "http://localhost:8000/api/update-user",
        {
          email: selectedUser.email, // Identify user by email (assuming it's unique)
          ...updatedUser,
        }
      );

      if (response.status === 200) {
        alert("User updated successfully!");
        setUsers(
          users.map((user) =>
            user.email === selectedUser.email ? updatedUser : user
          )
        );
        setIsModalOpen(false);
      }
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Failed to update user.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-5">Update User</h1>

      <div className="border border-black p-4 w-full max-w-2xl rounded-lg shadow-md">
        {users.length > 0 ? (
          <ul className="space-y-2">
            {users.map((user) => (
              <li key={user.email} className="bg-gray-100 p-4 rounded">
                <p className="text-xl font-bold text-gray-800">
                  {user.first_name} {user.last_name}
                </p>
                <div className="mt-2 text-gray-700">
                  <p>
                    <span className="font-semibold">Age:</span> {user.age}
                  </p>
                  <p>
                    <span className="font-semibold">Gender:</span> {user.gender}
                  </p>
                  <p>
                    <span className="font-semibold">Phone:</span> {user.phone}
                  </p>
                  <p>
                    <span className="font-semibold">Email:</span> {user.email}
                  </p>
                </div>
                <button
                  className="bg-blue-500 text-white px-4 py-2 mt-3 rounded shadow hover:bg-blue-600"
                  onClick={() => handleOpenModal(user)}
                >
                  Update
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No users found.</p>
        )}
      </div>

      {/* ✅ Update User Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Update User</h2>
            <label className="block mb-2">First Name</label>
            <input
              type="text"
              name="first_name"
              value={updatedUser.first_name}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-3"
            />

            <label className="block mb-2">Last Name</label>
            <input
              type="text"
              name="last_name"
              value={updatedUser.last_name}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-3"
            />

            <label className="block mb-2">Age</label>
            <input
              type="number"
              name="age"
              value={updatedUser.age}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-3"
            />

            <label className="block mb-2">Gender</label>
            <select
              name="gender"
              value={updatedUser.gender}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-3"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <label className="block mb-2">Phone</label>
            <input
              type="text"
              name="phone"
              value={updatedUser.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-3"
            />

            <div className="flex justify-end space-x-3">
              <button
                className="bg-gray-400 px-4 py-2 rounded hover:bg-gray-500"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                onClick={handleUpdateUser}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateUser;
