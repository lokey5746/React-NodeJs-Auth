import React from "react";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <div>
        <Header />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
