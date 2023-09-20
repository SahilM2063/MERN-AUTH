/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post("/login", {
        email,
        password,
      });
      if (data.err) {
        toast.error(data.err);
      } else {
        setData({});
        toast.success("Login successfully, Welcome.");
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="font-poppins w-full h-[calc(100vh-100px)] flex justify-center items-center">
      <form
        action="#"
        onSubmit={loginUser}
        className="flex flex-col items-center justify-center min-w-[360px] w-[26%] bg-white-300 p-6 rounded-lg border-[1px] border-black"
      >
        <h1 className="text-3xl font-bold mb-6">Login Form</h1>
        <label className="text-left w-[70%] font-medium mb-1 text-sm">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter email..."
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          className="w-[70%] py-2 px-4 rounded-[10px] border-[1px] outline-none  bg-transparent border-gray-400 placeholder:text-sm text-[14px] mb-4"
        />
        <label className="text-left w-[70%] font-medium mb-1 text-sm">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter password..."
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          className="w-[70%] py-2 px-4 rounded-[10px] border-[1px] outline-none bg-transparent border-gray-400 placeholder:text-sm text-[14px] mb-10"
        />
        <button
          type="submit"
          className="w-[70%] py-2 px-4 rounded-[10px] border-none outline-none bg-slate-950 text-white placeholder:text-sm text-[14px] mb-2"
        >
          Login
        </button>
        <span className="w-full text-center mt-2 text-xs">
          Don&apos;t have an account ?{" "}
          <Link to={"/register"} className="font-semibold hover:underline">Register here</Link>{" "}
        </span>
      </form>
    </div>
  );
};

export default Login;
