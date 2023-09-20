/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = (e) => {
    e.preventDefault();
    axios.get("/");
  };

  return (
    <div>
      <form action="#" onSubmit={loginUser}>
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
        <button type="submit">Login</button>
      </form>
      <span>
        Don&apos;t have an account ? <Link to={"/register"}>Register here</Link>{" "}
      </span>
    </div>
  );
};

export default Login;
