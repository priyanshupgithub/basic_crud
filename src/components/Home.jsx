import React, { act, useState } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const Navigate = useNavigate();

  return (
    <div>
      <div className="h-screen flex flex-col">
        <h1 className="text-red-800 text-4xl font-bold">
          Welcome to the CRUD Application
        </h1>
        <div className="flex flex-1 flex-col justify-center items-center border border-black m-2 p-2 text-3xl w-full">
          {["Create", "Read", "Update", "Delete"].map((action) => (
            <h1
              className="border border-black rounded-full bg-gray-400 cursor-pointer m-2 p-3 hover:bg-gray-500"
              key={action}
              onClick={() => Navigate(`/${action.toLowerCase()}-user`)}
            >
              {`${action} the user`}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
