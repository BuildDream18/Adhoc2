import React from "react";
import { useLocation, Link } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const page = location.pathname;

  return (
    <div className="hidden md:flex flex-col w-[200px] lg:w-[263px] flex-shrink-0 bg-[#FFF3D3] py-12 px-8 lg:px-12 [box-shadow:0px_2px_5px_2px_rgba(205,_205,_205,_0.70)]">
      <ul className="pb-4 space-y-2 text-sm">
        <li className="rounded-sm py-2">
          <Link
            to="/dashboard"
            className="flex items-center p-2 space-x-3 rounded-md "
          >
            <img src="assets/images/dashboard 1.png" alt="" />
            <span
              className={`text-center font-inter text-xl not-italic font-medium ${
                page === "/dashboard" ? "text-[#FFB800]" : "text-black"
              }`}
            >
              Dashboard
            </span>
          </Link>
        </li>
        <li className="rounded-sm active py-2">
          <Link
            to="/menu"
            className="flex items-center p-2 space-x-3 rounded-md"
          >
            <img src="assets/images/list 1.png" alt="" />
            <span
              className={`text-center font-inter text-xl not-italic font-medium ${
                page === "/menu" ? "text-[#FFB800]" : "text-black"
              }`}
            >
              Menu
            </span>
          </Link>
        </li>
        <li className="rounded-sm active py-2">
          <Link
            to="/restaurants"
            className="flex items-center p-2 space-x-3 rounded-md"
          >
            <img src="assets/images/restaurant 1.png" alt="" />
            <span
              className={`text-center font-inter text-xl not-italic font-medium ${
                page === "/restaurants" ? "text-[#FFB800]" : "text-black"
              }`}
            >
              Restaurants
            </span>
          </Link>
        </li>
        <li className="rounded-sm active py-2">
          <Link
            to="/drivers"
            className="flex items-center p-2 space-x-3 rounded-md"
          >
            <img src="assets/images/truck-side 1.png" alt="" />
            <span
              className={`text-center font-inter text-xl not-italic font-medium ${
                page === "/drivers" ? "text-[#FFB800]" : "text-black"
              }`}
            >
              Drivers
            </span>
          </Link>
        </li>
        <li className="rounded-sm active py-2">
          <Link
            to="/orders"
            className="flex items-center p-2 space-x-3 rounded-md"
          >
            <img src="assets/images/orders 1.png" alt="" />
            <span
              className={`text-center font-inter text-xl not-italic font-medium ${
                page === "/orders" ? "text-[#FFB800]" : "text-black"
              }`}
            >
              Orders
            </span>
          </Link>
        </li>
        <li className="rounded-sm active py-2">
          <Link
            to="/banners"
            className="flex items-center p-2 space-x-3 rounded-md"
          >
            <img src="assets/images/ad 1.png" alt="" />
            <span
              className={`text-center font-inter text-xl not-italic font-medium ${
                page === "/banners" ? "text-[#FFB800]" : "text-black"
              }`}
            >
              Banners
            </span>
          </Link>
        </li>
        <li className="rounded-sm active py-2">
          <Link
            to="/users"
            className="flex items-center p-2 space-x-3 rounded-md"
          >
            <img src="assets/images/users 1.png" alt="" />
            <span
              className={`text-center font-inter text-xl not-italic font-medium ${
                page === "/users" ? "text-[#FFB800]" : "text-black"
              }`}
            >
              Users
            </span>
          </Link>
        </li>
        <li className="rounded-sm active py-2">
          <Link
            to="/qrcode"
            className="flex items-center p-2 space-x-3 rounded-md"
          >
            <img src="assets/images/qrcode 1.png" alt="" />
            <span
              className={`text-center font-inter text-xl not-italic font-medium ${
                page === "/qrcode" ? "text-[#FFB800]" : "text-black"
              }`}
            >
              Generate QR
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
