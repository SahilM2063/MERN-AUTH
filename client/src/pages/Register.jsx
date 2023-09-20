/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";



const Register = () => {

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const registerUser = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form action="#" onSubmit={registerUser}>
        <label>Name</label>
        <input
          type="text"
          name="username"
          placeholder="Enter name..."
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter email..."
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter password..."
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button type="submit">Register</button>
      </form>
      <span>
        Already have an account ? <Link to={"/login"}>Login here</Link>{" "}
      </span>
    </div>
  );
};

export default Register;
