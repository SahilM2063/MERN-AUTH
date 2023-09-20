/* eslint-disable no-unused-vars */
import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>Dashboard</h1>
      {!!user && <h4>Hii, {user.name}!</h4>}
    </div>
  );
};

export default Dashboard;
