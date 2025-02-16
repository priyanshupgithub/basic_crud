import React, { useEffect, useState } from "react";
import { getUsers } from "./ReadUser";
import axios from "axios";

const DeleteUser = () => {
  const [users, setUsers] = useState([]);

  // ✅ Fetch users when component loads
  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const handleDeleteUser = async (user) => {
    try {
      // ✅ Use `user.email` directly
      const response = await axios.delete(
        "http://localhost:8000/api/delete-user",
        {
          data: { email: user.email }, // ✅ Send email in request body
        }
      );

      if (response.status === 200) {
        alert("User Deleted successfully!");

        // ✅ Remove user from the UI
        setUsers(users.filter((u) => u.email !== user.email));
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Failed to delete user.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-5">Delete User</h1>

      <div className="w-full max-w-2xl">
        {users.length > 0 ? (
          <ul className="space-y-4">
            {users.map((user) => (
              <li
                key={user.email}
                className="bg-white p-4 rounded-lg shadow-md border border-gray-300"
              >
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
                  className="bg-red-500 text-white px-4 py-2 mt-3 rounded shadow hover:bg-red-600"
                  onClick={() => handleDeleteUser(user)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default DeleteUser;
