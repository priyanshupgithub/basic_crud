import React, { useState } from "react";
import axios from "axios";

const CreateUser = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCreateUserSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/users", {
        first_name,
        last_name,
        age,
        gender,
        phone,
        email,
        password,
      });
      console.log("the resposed data is ", response);
      alert("User created succesfully.");
    } catch (error) {
      console.error("Error Creating the User", error);
    }
  };

  return (
    <div>
      <div>
        <h1>User Create Form</h1>
      </div>
      <div>
        <form onSubmit={handleCreateUserSubmit}>
          <div className="mb-4 text-start form-group">
            <label for="first_name">First Name</label>
            <input
              type="text"
              className="form-control"
              id="first_name"
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter first name"
            />
          </div>
          <div className="mb-4 text-start form-group">
            <label for="last_name">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="last_name"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter last name"
            />
          </div>
          <div className="mb-4 text-start form-group">
            <label for="age">Age</label>
            <input
              type="number"
              className="form-control"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter Age"
            />
          </div>
          <div className="mb-4 text-start form-group">
            <label for="gender">Gender</label>
            <select
              className="form-control form-control-sm"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option>select gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div className="mb-4 text-start form-group">
            <label for="phone">Phone</label>
            <input
              type="number"
              className="form-control"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter Phone"
            />
          </div>

          <div className="mb-4 text-start form-group">
            <label for="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="mb-4 text-start form-group">
            <label for="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
            />
          </div>

          <div className="mb-4 text-start form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
