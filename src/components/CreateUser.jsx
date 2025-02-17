import React from "react";
const CreateUser = () => {
  return (
    <div>
      <div>
        <h1>User Create Form</h1>
      </div>
      <div>
        <form>
          <div className="mb-4 text-start form-group">
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              className="form-control"
              id="first_name"
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
              placeholder="Enter last name"
            />
          </div>
          <div className="mb-4 text-start form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              className="form-control"
              id="age"
              placeholder="Enter Age"
            />
          </div>
          <div className="mb-4 text-start form-group">
            <label htmlFor="gender">Gender</label>
            <select className="form-control form-control-sm">
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
              placeholder="Enter Phone"
            />
          </div>

          <div className="mb-4 text-start form-group">
            <label htmlFor="email">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
          </div>
          <div className="mb-4 text-start form-group">
            <label htmlFor="password">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
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
