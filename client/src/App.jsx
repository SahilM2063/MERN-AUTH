/* eslint-disable no-unused-vars */
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "../context/UserContext";
import Dashboard from "./pages/Dashboard";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Navbar />
      <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
