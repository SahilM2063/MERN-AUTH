/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-[100%] h-[60px] flex justify-start items-center px-4 bg-slate-800 text-white gap-8">
      <Link to={"/"}>Home</Link>
      <Link to={"/login"}>Login</Link>
      <Link to={"/register"}>Register</Link>
    </div>
  );
};

export default Navbar;
