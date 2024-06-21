import React from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

  

const Confirmed = () => {
    const navigate = useNavigate();

    function handleClick () {
        navigate("/dashboard");
      }
  return (
    <div className="flex-col h-[100vh]">
      <div className="sm:mb-[40px] mb-[30px]">
        <button className="nor-btn w-[117px]" onClick={handleClick}>
          <RiArrowLeftSLine /> Back
        </button>
      </div>
      <div className="nor-div">
        <div className="flex flex-1 justify-between mb-[15px] sm:mb-[30px]">
          <div className="flex-col">
            <p className="sub-header text-[20px]">
              Order Detail: <span className="sub-typo text-[15px]">#456</span>
            </p>
            <p className="sub-typo text-[#139A39]">Payment: Online</p>
          </div>
          <button className="nor-btn px-6">Confirmed</button>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
          <div className="flex-col lg:col-span-2">
            <div className="nor-div bg-[#fff] flex-col lg:mb-10 mb-5" >
              <div className="grid grid-cols-2 lg:grid-cols-3 mb-[40px] ">
                <div className="">
                  <p className="sub-header">Order Date</p>
                  <p className="sub-typo">May 11, 2022 5:56:24Pm</p>
                </div>
                <div className="">
                  <p className="sub-header">Order Expected</p>
                  <p className="sub-typo">May 11, 2022 6:30:00PM</p>
                </div>
                <div className="lg:grid hidden">
                  <p className="sub-header">Payment Mode</p>
                  <p className="sub-typo">Online</p>
                </div>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3">
                <div className="">
                  <p className="sub-header">Restaurant Name</p>
                  <p className="sub-typo">Pizzzaria</p>
                </div>
                <div className="">
                  <p className="sub-header">Branch Address</p>
                  <p className="sub-typo">
                    Pizzzaria, Leo Londen 27, Mississauga 3445 CA
                  </p>
                </div>
                <div className="lg:hidden grid pt-[30px]">
                  <p className="sub-header">Payment Mode</p>
                  <p className="sub-typo">Online</p>
                </div>
              </div>
            </div>
            <div className="lg:grid hidden">
              <p className="sub-header">Food Items</p>
              <div className="nor-div bg-white flex items-center space-x-10 mt-[10px] sm:mt-5">
                <img src="assets/images/image 23.png" alt="" className="" />
                <div className="items-center">
                  <p className="sub-typo">Burger x5</p>
                  <p className="sub-typo">$12.40</p>
                </div>
              </div>
              <div className="nor-div bg-white flex items-center space-x-10 mt-[10px] sm:mt-5">
                <img src="assets/images/image 23.png" alt="" className="" />
                <div className="items-center">
                  <p className="sub-typo">Burger x5</p>
                  <p className="sub-typo">$12.40</p>
                </div>
              </div>
              <div className="nor-div bg-white flex items-center space-x-10 mt-[10px] sm:mt-5">
                <img src="assets/images/image 23.png" alt="" className="" />
                <div className="items-center">
                  <p className="sub-typo">Burger x5</p>
                  <p className="sub-typo">$12.40</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col flex-1">
            <div className="nor-div bg-white space-y-[30px] mb-5">
              <div className="lg:grid-cols-1 grid grid-cols-2">
                <div className="flex-col">
                  <div className="flex justify-between items-center">
                    <div className="">
                      <p className="sub-header">User Name</p>
                      <p className="sub-typo">Alice</p>
                    </div>
                    <img
                      src="assets/images/elipse1.png"
                      className="lg:w-[40px] lg:h-[40px] hidden lg:flex"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <p className="sub-header">User Mobile</p>
                    <p className="sub-typo">+1 (438) 555 8999</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <img
                    src="assets/images/elipse1.png"
                    className="lg:hidden grid w-[100px] h-[100px]"
                    alt=""
                  />
                </div>
              </div>
              <div className="">
                <p className="sub-header">User Address</p>
                <p className="sub-typo">
                  110 Courtneypark Dr E, Mississauga, ON L5T 2Y3
                </p>
              </div>
            </div>
            <div className="nor-div bg-white space-y-[15px] mb-5">
              <div className="justify-between flex">
                <p className="sub-typo">Order Price</p>
                <p className="sub-typo">$70</p>
              </div>
              <div className="justify-between flex">
                <p className="sub-typo">Discount Amount</p>
                <p className="sub-typo">$70</p>
              </div>
              <div className="justify-between flex">
                <p className="sub-typo">Promo: DRA44</p>
                <p className="sub-typo">-$4.88</p>
              </div>
              <div className="justify-between flex">
                <p className="sub-typo">Delivery Charges</p>
                <p className="sub-typo">$70</p>
              </div>
sub-typolg              <div className="justify-between flex">
                <p className="sub-typo">Tax</p>
                <p className="sub-typo">$70</p>
              </div>
              <div className="justify-between flex">
                <p className="sub-typo">Driver Tip</p>
                <p className="sub-typo">$70</p>
              </div>
              <div className="justify-between flex">
                <p className="sub-typo">Total Price</p>
                <p className="sub-typo">$332</p>
              </div>
            </div>
            <div className="lg:hidden grid mb-5" >
              <p className="sub-header">Food Items</p>
              <div className="nor-div bg-white flex items-center space-x-10 mt-[10px] sm:mt-5">
                <img src="assets/images/image 23.png" alt="" className="" />
                <div className="items-center">
                  <p className="sub-typo">Burger x5</p>
                  <p className="sub-typo">$12.40</p>
                </div>
              </div>
              <div className="nor-div bg-white flex items-center space-x-10 mt-[10px] sm:mt-5">
                <img src="assets/images/image 23.png" alt="" className="" />
                <div className="items-center">
                  <p className="sub-typo">Burger x5</p>
                  <p className="sub-typo">$12.40</p>
                </div>
              </div>
              <div className="nor-div bg-white flex items-center space-x-10 mt-[10px] sm:mt-5">
                <img src="assets/images/image 23.png" alt="" className="" />
                <div className="items-center">
                  <p className="sub-typo">Burger x5</p>
                  <p className="sub-typo">$12.40</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmed;
