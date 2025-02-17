import React, { useState } from "react";
import axios from "axios";
import validator from "validator";

const CreateUser = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [firstNameError, setFirstNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleCreateUserSubmit = async (e) => {
    setFirstNameError(false);
    setEmailError("");
    setPasswordError(false);
    let hasError = false;

    e.preventDefault();
    const firstName = e.target.elements["first_name"].value;
    const email = e.target.elements["email"].value;
    const password = e.target.elements["password"].value;
    if (!firstName) {
      setFirstNameError(true);
      hasError = true;
    }
    if (!email) {
      setEmailError("Email is rrequired.");
      hasError = true;
    } else if (!validator.isEmail(email)) {
      setEmailError("Please enter a valid email.");
      hasError = true;
    }

    if (!password) {
      setPasswordError(true);
      hasError = true;
    }
    // If validation fails, stop the submission
    if (hasError) return;

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
         // ✅ Reset all input fields after successful submission
    setFirstName("");
    setLastName("");
    setAge("");
    setGender("");
    setPhone("");
    setEmail("");
    setPassword("");
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
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              className="form-control"
              id="first_name"
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter first name"
            />
            {firstNameError && (
              <p className="text-red-500 text-sm">Please enter First Name</p>
            )}
          </div>
          <div className="mb-4 text-start form-group">
            <label htmlFor="last_name">Last Name</label>
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
            <label htmlFor="age">Age</label>
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
            <label htmlFor="gender">Gender</label>
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
            <label htmlFor="phone">Phone</label>
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
            <label htmlFor="email">Email address</label>
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
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
          </div>
          <div className="mb-4 text-start form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
            />
            {passwordError && (
              <p className="text-red-500 text-sm">Please enter Password</p>
            )}
          </div>

          <div className="mb-4 text-start form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
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
