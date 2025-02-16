import React, { useEffect, useState } from "react";
import axios from "axios";

// ✅ Fetch users function
export const getUsers = async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/get-users", {
      timeout: 5000, // 5 seconds timeout
    });
    console.log("Fetched Data:", response.data);
    return response.data.users || [];
  } catch (error) {
    console.error("Error in reading the Users", error);
    return []; // Always return an empty array to prevent undefined state
  }
};

const ReadUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ Function to fetch users with loading state
  const fetchUsers = async () => {
    setLoading(true);
    const data = await getUsers();
    if (data.length > 0) {
      setUsers(data);
    }
    setLoading(false);
  };

  // ✅ useEffect should call fetchUsers properly
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-5">Saved Users</h1>

      {/* Load Users Button */}
      <button
        onClick={fetchUsers}
        className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition mb-6"
      >
        {loading ? "Loading..." : "Load Users"}
      </button>

      {/* Loader */}
      {loading && <p className="text-gray-600">Fetching users...</p>}

      {/* User List */}
      <div className="w-full max-w-2xl">
        {users.length > 0 ? (
          <ul className="space-y-4">
            {users.map((user) => (
              <li
                key={user.email}
                className="bg-white p-4 rounded-lg shadow-md border border-gray-300"
              >
                {/* Full Name in Bold */}
                <p className="text-xl font-bold text-gray-800">
                  {user.first_name} {user.last_name}
                </p>

                {/* Other Details */}
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

export default ReadUser;
