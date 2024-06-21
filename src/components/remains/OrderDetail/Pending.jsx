import React from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Pending = () => {
  const navigate = useNavigate();

  function handleClick() {
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
            <p className="sub-typo text-[#139A39]">Payment: Cash</p>
          </div>
          <button className="nor-btn px-6 bg-[#20A1FF]">Pending</button>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
          <div className="hidden lg:flex flex-col lg:col-span-2">
            <div className="grid lg:mb-10 mb-5">
              <div className="nor-div bg-white flex items-center space-x-10 mt-[10px] sm:mt-5 h-16">
                <img src="assets/images/image 23.png" alt="" className="" />
                <div className="items-center">
                  <p className="sub-typo">Burger x5</p>
                  <p className="sub-typo">$12.40</p>
                </div>
              </div>
              <div className="nor-div bg-white flex items-center space-x-10 mt-[10px] sm:mt-5 h-16">
                <img src="assets/images/image 23.png" alt="" className="" />
                <div className="items-center">
                  <p className="sub-typo">Burger x5</p>
                  <p className="sub-typo">$12.40</p>
                </div>
              </div>
              <div className="nor-div bg-white flex items-center space-x-10 mt-[10px] sm:mt-5 h-16">
                <img src="assets/images/image 23.png" alt="" className="" />
                <div className="items-center">
                  <p className="sub-typo">Burger x5</p>
                  <p className="sub-typo">$12.40</p>
                </div>
              </div>
              <div className="nor-div bg-white flex items-center space-x-10 mt-[10px] sm:mt-5 h-16">
                <img src="assets/images/image 23.png" alt="" className="" />
                <div className="items-center">
                  <p className="sub-typo">Burger x5</p>
                  <p className="sub-typo">$12.40</p>
                </div>
              </div>
            </div>
            <div className="grid">
              <p className="sub-header">Remarks</p>
              <input
                className="nor-div py-[10px] h-20 bg-white flex items-center space-x-10 mt-[10px] sm:mt sub-header mb-10 lg:mb-5"
                placeholder="No onions"
              />
              <p className="sub-typo lg:ml-5 mb-[10px]">Preparation Time</p>
              <div className="flex lg:ml-5 mb-5">
                <div className="bg-white nor-div w-164px px-5 py-[5px] font-inter sm:text-xl text-[18px] not-italic font-medium mr-6">
                  00:20:00
                </div>

                <button className="nor-btn border-[3px] rounded-[35px] border-[#FFB800] bg-white px-4">
                  Add Preparation Time
                </button>
              </div>
              <div className="flex items-center justify-end">
                <button className="mx-4 w-[72px] h-[29px] sm:w-[100px] sm:h-[40px] flex-shrink-0 text-[#000] text-center font-inter text-[15px] sm:text-xl not-italic font-medium border-[3px] rounded-[35px] border-[#FFB800] [box-shadow:0px_2px_5px_2px_rgba(205,_205,_205,_0.70)]">
                  Reject
                </button>
                <button
                  className="mr-2 w-[72px] h-[29px] sm:w-[100px] sm:h-[40px] flex-shrink-0 rounded-[35px] bg-[#FFB800] [box-shadow:0px_2px_5px_2px_rgba(205,_205,_205,_0.70)] text-[#000] text-center font-inter text-[15px] sm:text-xl not-italic font-medium"
                  onClick={handleClick}
                >
                  Confirm
                </button>
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
              sub-typolg{" "}
              <div className="justify-between flex">
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
            
          </div>
          <div className="flex lg:hidden flex-col lg:col-span-2">
            <div className="grid lg:mb-10 mb-5">
              <div className="nor-div bg-white flex items-center space-x-10 mt-[10px] sm:mt-5 h-16">
                <img src="assets/images/image 23.png" alt="" className="" />
                <div className="items-center">
                  <p className="sub-typo">Burger x5</p>
                  <p className="sub-typo">$12.40</p>
                </div>
              </div>
              <div className="nor-div bg-white flex items-center space-x-10 mt-[10px] sm:mt-5 h-16">
                <img src="assets/images/image 23.png" alt="" className="" />
                <div className="items-center">
                  <p className="sub-typo">Burger x5</p>
                  <p className="sub-typo">$12.40</p>
                </div>
              </div>
              <div className="nor-div bg-white flex items-center space-x-10 mt-[10px] sm:mt-5 h-16">
                <img src="assets/images/image 23.png" alt="" className="" />
                <div className="items-center">
                  <p className="sub-typo">Burger x5</p>
                  <p className="sub-typo">$12.40</p>
                </div>
              </div>
              <div className="nor-div bg-white flex items-center space-x-10 mt-[10px] sm:mt-5 h-16">
                <img src="assets/images/image 23.png" alt="" className="" />
                <div className="items-center">
                  <p className="sub-typo">Burger x5</p>
                  <p className="sub-typo">$12.40</p>
                </div>
              </div>
            </div>
            <div className="grid">
              <p className="sub-header">Remarks</p>
              <input
                className="nor-div py-[10px] h-20 bg-white flex items-center space-x-10 mt-[10px] sm:mt sub-header mb-10 lg:mb-5"
                placeholder="No onions"
              />
              <p className="sub-typo lg:ml-5 mb-[10px]">Preparation Time</p>
              <div className="flex lg:ml-5 mb-5">
                <div className="bg-white nor-div w-164px px-5 py-[5px] font-inter sm:text-xl text-[18px] not-italic font-medium mr-6">
                  00:20:00
                </div>

                <button className="nor-btn border-[3px] rounded-[35px] border-[#FFB800] bg-white px-4">
                  Add Preparation Time
                </button>
              </div>
              <div className="flex items-center justify-end">
                <button className="mx-4 w-[72px] h-[29px] sm:w-[100px] sm:h-[40px] flex-shrink-0 text-[#000] text-center font-inter text-[15px] sm:text-xl not-italic font-medium border-[3px] rounded-[35px] border-[#FFB800] [box-shadow:0px_2px_5px_2px_rgba(205,_205,_205,_0.70)]">
                  Reject
                </button>
                <button
                  className="mr-2 w-[72px] h-[29px] sm:w-[100px] sm:h-[40px] flex-shrink-0 rounded-[35px] bg-[#FFB800] [box-shadow:0px_2px_5px_2px_rgba(205,_205,_205,_0.70)] text-[#000] text-center font-inter text-[15px] sm:text-xl not-italic font-medium"
                  onClick={handleClick}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pending;
