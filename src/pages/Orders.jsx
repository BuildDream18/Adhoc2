import React, { useState } from "react";
import { Link } from "react-router-dom";
import Ordersm from "../components/Ordersm";
import { BsSearch } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Orders = () => {
  const [openTab, setOpenTab] = React.useState(1);
  const [sDate, setsDate] = useState(new Date());

  const [selectedValue, setSelectedValue] = useState("option1");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <div className="">
        <ul
          className="flex list-none pt-3 mb-10 flex-row space-x-2"
          role="tablist"
        >
          <li className="-mb-px mr-2 last:mr-0 text-center ">
            <Link
              className={`text-center font-inter text-[20px] md:text-[25px] md:px-5 px-3 py-2 font-extrabold shadow-lg rounded-[10px] block ${
                openTab === 1 ? "text-[#FFB800] " : "text-[#FFB800]-600"
              }`}
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
              Pending
            </Link>
          </li>
          <li className="-mb-px mr-2 last:mr-0 text-center">
            <Link
              className={`text-center font-inter text-[20px] md:text-[25px] md:px-5 px-3 py-2 font-extrabold shadow-lg rounded-[10px] block ${
                openTab === 2 ? "text-[#FFB800] " : "text-[#FFB800]-600"
              }`}
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
              }}
              data-toggle="tab"
              href="#link2"
              role="tablist"
            >
              Active
            </Link>
          </li>
          <li className="-mb-px mr-2 last:mr-0 text-center">
            <Link
              className={`text-center font-inter text-[20px] md:text-[25px] md:px-5 px-3 py-2 font-extrabold shadow-lg rounded-[10px] block ${
                openTab === 3 ? "text-[#FFB800] " : "text-[#FFB800]-600"
              }`}
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(3);
              }}
              data-toggle="tab"
              href="#link3"
              role="tablist"
            >
              History
            </Link>
          </li>
        </ul>
        <div className="flex justify-between mb-5 items-center">
          <div className="nor-btn bg-white px-4 w-[224px] sm:w-auto">
            <BsSearch className="mr-4" />
            <input
              type="text"
              placeholder="Search"
              className="focus:outline-white text-[15px] "
            />
          </div>
          <div className="">
            <button className="mx-4 sm:px-6 px-2 py-2 flex items-center flex-shrink-0 text-[#000] text-center font-inter text-[15px] sm:text-xl not-italic font-medium border-[3px] rounded-[35px] border-[#FFB800] [box-shadow:0px_2px_5px_2px_rgba(205,_205,_205,_0.70)]">
              <img src="assets/images/refresh 1.png" alt="" className="mr-2 sm:w-[20px] w-[15px] h-[15px] sm:h-[20px]" />
              Refresh
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 mb-5">
          <div className="span-col-1">
            <p className="sub-header mb-5">Date</p>
            <DatePicker
              selected=""
              onChange={(date) => setsDate(date)}
              selectsStart
              startDate={sDate}
              className="nor-div bg-white w-5/6"
            />
          </div>
          <div className="span-col-1">
            <p className="sub-header mb-5">Payment Type</p>
            <div className="nor-div bg-white sub-typo w-2/3">
            <select value={selectedValue} onChange={handleChange} className="w-full">
              <option value="option1" className="sub-typo">Option 1</option>
            </select>
            </div>

          </div>
        </div>
        <div className="flex items-center justify-center">
          <div
            className={`w-full ${openTab === 1 ? "block" : "hidden"}`}
            id="link1"
          >
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-[20px] mb-6">
              <Ordersm />
              <Ordersm />
              <Ordersm />
              <Ordersm />
            </div>
            <div className="flex justify-center items-center">
              <button className="w-[243px] h-[50px] rounded-[35px] flex-shrink-0 bg-bg_button shadow-bs_custom text-black text-center text-[15px] md:text-[20px] font-inter font-medium leading-normal">
                Show More
              </button>
            </div>
          </div>
          <div
            className={`${openTab === 2 ? "block" : "hidden"}`}
            id="link2"
          ></div>
          <div
            className={`${openTab === 3 ? "block" : "hidden"}`}
            id="link3"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
