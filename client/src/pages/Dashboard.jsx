/* eslint-disable no-unused-vars */
import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="font-poppins w-full h-[calc(100vh-100px)] flex justify-center items-center flex-col gap-4">
      <h1 className="text-5xl font-semibold ">Dashboard</h1>
      {!!user && <h4 className="text-2xl font-medium ">Hii, {user.name}!</h4>}
    </div>
  );
};

export default Dashboard;
