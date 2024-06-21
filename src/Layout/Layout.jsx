import Navbar from "../components/Navbar";
import React from "react";
import Sidebar from "../components/Sidebar";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();
  return location.pathname !== "/signin" ? (
    <div className="flex flex-col h-[100vh] w-[100vw] overflow-hidden">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="px-[20px] lg:pr-[60px] flex-1 overflow-auto py-[20px] sm:py-[40px] h-[calc(100vh_-_80px)]">
          {children} 
        </div>
      </div>
    </div>
  ) : (
    <>{children}</>
  );
};

export default Layout;
