import React, { useState } from "react";
import Chart from "chart.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Ordersm from "../components/Ordersm";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [openTab, setOpenTab] = React.useState(1);

  React.useEffect(() => {
    let config = {
      type: "bar",
      data: {
        labels: ["May05", "May06", "May07", "May08", "May09", "May10", "May11"],
        datasets: [
          {
            fill: false,
            backgroundColor: "#FFB800",
            borderColor: "#FFB800",
            data: [150, 39, 12, 126, 91, 12, 32],
            barThickness: 50,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Orders Chart",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: false,
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: "",
              },
              gridLines: {
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(33, 37, 41, 0.3)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              display: false,
              scaleLabel: {
                display: false,
                labelString: "Value",
              },
              gridLines: {
                borderDash: [2],
                drawBorder: false,
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.2)",
                zeroLineColor: "rgba(33, 37, 41, 0.15)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    let ctx_revenue = document.getElementById("bar-revenue").getContext("2d");
    let ctx_orders = document.getElementById("bar-orders").getContext("2d");
    window.myBar = new Chart(ctx_revenue, config);
    window.myBar = new Chart(ctx_orders, config);
  }, []);

  return (
    <div className="flex-1">
      <div className="grid lg:grid-cols-3 grid-cols-2 xl:mr-[80px] mr-0">
        <div className=" sm:w-auto h-[100px] mr-[10px] mb-[10px] sm:mr-[20px] sm:mb-[20px] flex-shrink-0 rounded-[10px] bg-[#FFF] [box-shadow:0px_2px_5px_2px_rgba(205,_205,_205,_0.70)]">
          <p className="text-[#000] font-inter md:text-xl text-[18px] md:text-left text-center not-italic font-medium mx-[10px] sm:mx-[20px] mt-[20px] mb-1 sm:mb-2">
            Pending Orders
          </p>
          <p className="text-[#FFB800] sm:text-[#000] font-inter md:text-[25px] text-xl md:text-left text-center not-italic font-[25px] mx-[10px] sm:mx-[20px]  mb-[20px]">
            248
          </p>
        </div>
        <div className=" sm:w-auto h-[100px] mr-[10px] mb-[10px] sm:mr-[20px] sm:mb-[20px] flex-shrink-0 rounded-[10px] bg-[#FFF] [box-shadow:0px_2px_5px_2px_rgba(205,_205,_205,_0.70)]">
          <p className="text-[#000] font-inter md:text-xl text-[18px] md:text-left text-center not-italic font-medium mx-[10px] sm:mx-[20px]  mt-[20px] mb-1 sm:mb-2">
            Active Orders
          </p>
          <p className="text-[#FFB800] sm:text-[#000] font-inter md:text-[25px] text-xl md:text-left text-center not-italic font-[25px] mx-[10px] sm:mx-[20px]  mb-[20px]">
            146
          </p>
        </div>
        <div className=" sm:w-auto  h-[100px] mr-[10px] mb-[10px] sm:mr-[20px] sm:mb-[20px] flex-shrink-0 rounded-[10px] bg-[#FFF] [box-shadow:0px_2px_5px_2px_rgba(205,_205,_205,_0.70)]">
          <p className="text-[#000] font-inter md:text-xl text-[18px] md:text-left text-center not-italic font-medium mx-[10px] sm:mx-[20px]  mt-[20px] mb-1 sm:mb-2">
            Delivering Orders
          </p>
          <p className="text-[#FFB800] sm:text-[#000] font-inter md:text-[25px] text-xl md:text-left text-center not-italic font-[25px] mx-[10px] sm:mx-[20px]  mb-[20px]">
            487
          </p>
        </div>
        <div className=" sm:w-auto  h-[100px] mr-[10px] mb-[10px] sm:mr-[20px] sm:mb-[20px] flex-shrink-0 rounded-[10px] bg-[#FFF] [box-shadow:0px_2px_5px_2px_rgba(205,_205,_205,_0.70)]">
          <p className="text-[#000] font-inter md:text-xl text-[18px] md:text-left text-center not-italic font-medium mx-[10px] sm:mx-[20px]  mt-[20px] mb-1 sm:mb-2">
            Restaurants
          </p>
          <p className="text-[#FFB800] sm:text-[#000] font-inter md:text-[25px] md:text-left text-center text-xl not-italic font-[25px] mx-[10px] sm:mx-[20px]  mb-[20px]">
            60
          </p>
        </div>
        <div className=" sm:w-auto h-[100px] mr-[10px] mb-[10px] sm:mr-[20px] sm:mb-[20px] flex-shrink-0 rounded-[10px] bg-[#FFF] [box-shadow:0px_2px_5px_2px_rgba(205,_205,_205,_0.70)]">
          <p className="text-[#000] font-inter md:text-xl text-[18px] md:text-left text-center not-italic font-medium mx-[10px] sm:mx-[20px]  mt-[20px] mb-1 sm:mb-2">
            Categories
          </p>
          <p className="text-[#FFB800] sm:text-[#000] font-inter md:text-[25px] text-xl md:text-left text-center not-italic font-[25px] mx-[10px] sm:mx-[20px]  mb-[20px]">
            0
          </p>
        </div>
        <div className=" sm:w-auto h-[100px] mr-[10px] mb-[10px] sm:mr-[20px] sm:mb-[20px] flex-shrink-0 rounded-[10px] bg-[#FFF] [box-shadow:0px_2px_5px_2px_rgba(205,_205,_205,_0.70)]">
          <p className="text-[#000] font-inter md:text-xl text-[18px] md:text-left text-center not-italic font-medium mx-[10px] sm:mx-[20px]  mt-[20px] mb-1 sm:mb-2">
            <span className="xl:hidden">Cancelled Orders</span>
            <span className="hidden xl:inline">Customer Cancelled Orders</span>
          </p>
          <p className="text-[#FFB800] sm:text-[#000] font-inter md:text-[25px] text-xl md:text-left text-center not-italic font-[25px] mx-[10px] sm:mx-[20px]  mb-[20px]">
            77
          </p>
        </div>
        <div className=" sm:w-auto h-[100px] mr-[10px] mb-[10px] sm:mr-[20px] sm:mb-[20px] flex-shrink-0 rounded-[10px] bg-[#FFF] [box-shadow:0px_2px_5px_2px_rgba(205,_205,_205,_0.70)]">
          <p className="text-[#000] font-inter md:text-xl text-[18px] not-italic md:text-left text-center font-medium mx-[10px] sm:mx-[20px]  mt-[20px] mb-1 sm:mb-2">
            Food Items
          </p>
          <p className="text-[#FFB800] sm:text-[#000] font-inter md:text-[25px] text-xl md:text-left text-center not-italic font-[25px] mx-[10px] sm:mx-[20px]  mb-[20px]">
            678
          </p>
        </div>
        <div className=" sm:w-auto h-[100px] mr-[10px] mb-[10px] sm:mr-[20px] sm:mb-[20px] flex-shrink-0 rounded-[10px] bg-[#FFF] [box-shadow:0px_2px_5px_2px_rgba(205,_205,_205,_0.70)]">
          <p className="text-[#000] font-inter md:text-xl text-[18px] not-italic md:text-left text-center font-medium mx-[10px] sm:mx-[20px]  mt-[20px] mb-1 sm:mb-2">
            Promotions
          </p>
          <p className="text-[#FFB800] sm:text-[#000] font-inter md:text-[25px] text-xl md:text-left text-center not-italic font-[25px] mx-[10px] sm:mx-[20px]  mb-[20px]">
            12
          </p>
        </div>
      </div>
      <div className="flex-1 py-[20px] flex items-center justify-center lg:justify-start">
        <div className="flex flex-row items-center w-[240px] sm:w-[315px] h-[50px] flex-shrink-0 rounded-tl-[10px] rounded-br-none rounded-tr-none rounded-bl-[10px] bg-[#FFF] [box-shadow:0px_2px_5px_2px_rgba(205,_205,_205,_0.70)]">
          <div className="flex w-full">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              className="ml-2 py-2 px-4 sm:px-8 w-[115px] sm:w-[140px] items-center outline-none"
            />
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              className="py-2 px-2 sm:px-8 w-[115px] sm:w-[140px] items-center outline-none"
            />
          </div>
          <button className="flex items-center py-2 px-4 w-[140px] sm:w-[150px] h-[50px] flex-shrink-0 rounded-tl-none rounded-br-[10px] rounded-tr-[10px] rounded-bl-none bg-[#FFB800] [box-shadow:0px_2px_5px_2px_rgba(205,_205,_205,_0.70)] text-[#000] text-center font-inter text-[20px]] not-italic font-medium">
            Filter By Date
          </button>
        </div>
        <div className="flex w-full place-content-end px-[20px]">
          <button className="hidden lg:flex justify-center items-center w-[66px] h-[50px] flex-shrink-0 rounded-[20px] border-[#FFB800] border-[3px]">
            <img src="assets/images/refresh 1.png" alt="" />
          </button>
        </div>
      </div>
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-[20px] mr-[20px]">
        <div>
          <div className="mb-[20px] flex-shrink-0 rounded-[10px] bg-[#FFF] [box-shadow:0px_2px_5px_2px_rgba(205,_205,_205,_0.70)]">
            <div className="rounded-t mb-0 px-[20px] py-3 bg-transparent">
              <h6 className="text-[#000] font-inter text-xl not-italic font-medium">
                Revenue
              </h6>
            </div>
            <div className="p-4 flex-auto">
              {/* Chart */}
              <div className="relative h-250-px">
                <canvas id="bar-revenue"></canvas>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-[20px ]w-auto flex-shrink-0 rounded-[10px] bg-[#FFF] [box-shadow:0px_2px_5px_2px_rgba(205,_205,_205,_0.70)]">
            <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
              <h6 className="text-[#000] font-inter text-xl not-italic font-medium">
                Orders
              </h6>
            </div>
            <div className="p-4 flex-auto">
              {/* Chart */}
              <div className="relative h-250-px">
                <canvas id="bar-orders"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 py-[40px] mr-[20px] mb-6">
        <ul
          className="flex mb-0 list-none pt-3 pb-4 flex-row space-x-2"
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
        </ul>
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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
