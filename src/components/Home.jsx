import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const Navigate = useNavigate();
  const handleCreate = () => {
    Navigate("/create-user");
  };
  const handleRead = () => {
    Navigate("/read-user");
  };
  const handleUpdate = () => {
    Navigate("/update-user");
  };
  const handleDelete = () => {
    Navigate("/delete-user");
  };
  return (
    <div>
      <div className="h-screen flex flex-col">
        <h1 className="text-red-800 text-4xl font-bold">
          Welcome to the CRUD Application
        </h1>
        <div className="flex flex-1 flex-col justify-center items-center border border-black m-2 p-2 text-3xl w-full">
          <h1
            className="border border-black rounded-full bg-gray-400 cursor-pointer m-2 p-3 hover:bg-gray-500"
            onClick={handleCreate}
          >
            Create the User
          </h1>
          <h1
            className="border border-black rounded-full bg-gray-400 cursor-pointer m-2 p-3 hover:bg-gray-500"
            onClick={handleRead}
          >
            Read the User
          </h1>
          <h1
            className="border border-black rounded-full bg-gray-400 cursor-pointer m-2 p-3 hover:bg-gray-500"
            onClick={handleUpdate}
          >
            Update the User
          </h1>
          <h1
            className="border border-black rounded-full bg-gray-400 cursor-pointer m-2 p-3 hover:bg-gray-500"
            onClick={handleDelete}
          >
            Delete the User
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
