import React from "react";
import { useNavigate } from 'react-router-dom';

function Ordersm() {
  const navigate = useNavigate();

  function handleClick () {
    navigate("/confirmed");
  }
  return (
    <>
      <div className="flex-shrink-0 rounded-[10px] bg-[#FFF] [box-shadow:0px_2px_5px_2px_rgba(205,_205,_205,_0.70)] px-[15px] sm:px-[20px] py-[15px] sm:py-[20px] sm:w-auto">
        <div class="flex mb-[20px]">
          <p className="flex-1 text-[#000] text font-inter text-[18px] sm:text-xl not-italic font-medium">
            Order <span className=" text-[13px] sm:text-[15px]">ID-255</span>
          </p>
          <p className=" text-[#000] text font-inter text-[13px] sm:text-xl not-italic font-medium">
            Order Date: <span className=" text-[15px]">May 11, 2022. 17:45</span>
          </p>
        </div>
        <div className="flex flex-rows-2">
          <div className="flex flex-1 justify-start items-center w-full">
            <img
              src="assets/images/image 23.png"
              alt=""
              className="flex sm:w-[80px] w-[66px] h-[66px] sm:h-[80px] flex-shrink-0 mr-4"
            />
            <p className="text-[#000] text-center font-inter text-[15px] sm:text-xl not-italic font-medium">
              Burger x2...
            </p>
            <p className="text-[#FFB800] text-center font-inter sm:text-xl text-[18px] not-italic font-medium">
              more
            </p>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-[#000] text-right font-inter text-[10px] sm:text-[15px]  not-italic font-medium">
              Payment: Online
            </p>
            <p className="text-[#F90000] text-right font-inter text-[10px] sm:text-[15px] not-italic font-medium">
              Remarks!!!
            </p>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#B7B7B7] mt-4"></div>
        <div className="flex flex-rows-2 mt-2 w-full">
            <div className="flex-col flex-1">
                <p className="text-[#000] font-inter text-[10px] sm:text-[15px] not-italic font-medium py-2">Order Price: $218.00</p>
                <p className="text-[#000] font-inter text-[10px] sm:text-[15px] not-italic font-medium py-2">Contact User: +1 (438) 555 8999</p>
            </div>
            <div className="flex items-center justify-end">
                <button className="mx-4 w-[72px] h-[29px] sm:w-[100px] sm:h-[40px] flex-shrink-0 text-[#000] text-center font-inter text-[15px] sm:text-xl not-italic font-medium border-[3px] rounded-[35px] border-[#FFB800] [box-shadow:0px_2px_5px_2px_rgba(205,_205,_205,_0.70)]" >Reject</button>
                <button className="mr-2 w-[72px] h-[29px] sm:w-[100px] sm:h-[40px] flex-shrink-0 rounded-[35px] bg-[#FFB800] [box-shadow:0px_2px_5px_2px_rgba(205,_205,_205,_0.70)] text-[#000] text-center font-inter text-[15px] sm:text-xl not-italic font-medium" onClick={handleClick}>Confirm</button>
            </div>
            
        </div>
      </div>
    </>
  );
}

export default Ordersm;
