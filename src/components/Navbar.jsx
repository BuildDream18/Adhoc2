import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center sm:w-auto h-[80px] w-[100vw] flex-shrink-0 bg-[#FFB800]">
      <div className=" w-[99px] sm:w-[133px] h-[32px] sm:h-[44px] sm:mr-16 mr-8 flex-shrink-0 ">
        <Link to="/">
          <img
            src="assets/images/adhoc_text.png"
            alt="adhoc_text"
            className="sm:ml-[61px] ml-4"
          />
        </Link>
      </div>
      <div className="flex ml-8 sm:ml-16 items-center px-2">
        <Link to="/" className="flex items-center">
          <img
            src="assets/images/globe1.png"
            alt=""
            className="sm:w-[20px] sm:h-[20px] w-[15px] h-[15px] flex-shrink-0 sm:mr-[10px] mr-[5px]"
          />
          <p className="text-[#000] text-center font-inter sm:text-xl text-[15px] not-italic font-medium">
            View Website
          </p>
        </Link>
      </div>
      <div className="absolute flex sm:hidden items-center right-0 mr-[20px]">
        <img
          src="assets/images/group230.png"
          alt=""
          className="w-[40px] h-[20px] flex-shrink-0 "
          onClick={() => setIsOpen(!isOpen)}
        />
        {isOpen && (
          <div className="absolute top-[60px] flex-col sm:mr-[60px] px-[10px] py-[8px] w-[160px] flex-shrink-0 gap-[15px] rounded-[25px] right-0 bg-[#FFF] [box-shadow:0px_2px_5px_2px_rgba(79,_79,_79,_0.30)]">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center"
            >
              <img
                src="assets/images/elipse1.png"
                alt=""
                className="w-[34px] h-[34px] flex-shrink-0 rounded-[34px] mr-[10px]"
              />
              <p className="text-[#000] text-center font-inter text-[15px] not-italic font-medium mr-[10px]">
                Your name
              </p>
            </button>
            <div className="flex items-center mt-2">
              <img
                src="assets/images/sign-out-alt3.png"
                alt=""
                className="w-[20px] h-[20px] flex-shrink-0 mx-[10px]"
              />
              <p className="text-[#000] text-center font-inter text-[15px] not-italic font-medium ml-[10px]">
                Log out
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="absolute hidden sm:flex top-[15px] flex-col mr-[15px] md:mr-[60px] px-[10px] py-[8px] w-[160px] flex-shrink-0 gap-[15px] rounded-[25px] right-0 bg-[#FFF] [box-shadow:0px_2px_5px_2px_rgba(79,_79,_79,_0.30)]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center"
        >
          <img
            src="assets/images/elipse1.png"
            alt=""
            className="w-[34px] h-[34px] flex-shrink-0 rounded-[34px] mr-[10px]"
          />
          <p className="text-[#000] text-center font-inter text-[15px] not-italic font-medium mr-[10px]">
            Your name
          </p>
          {isOpen ? (
            <img
              src="assets/images/vector31.png"
              className="w-[10px] h-[4px] flex-shrink-0 stroke-[2px] stroke-[#000]"
            />
          ) : (
            <img
              src="assets/images/vector30.png"
              className="w-[4px] h-[10px] flex-shrink-0 stroke-[2px] stroke-[#000]"
            />
          )}
        </button>
        {isOpen && (
          <div className="flex items-center">
            <img
              src="assets/images/sign-out-alt3.png"
              alt=""
              className="w-[20px] h-[20px] flex-shrink-0 mx-[10px]"
            />
            <p className="text-[#000] text-center font-inter text-[15px] not-italic font-medium ml-[10px]">
              Log out
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
