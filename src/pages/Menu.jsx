import React from "react";
import { GoPencil } from "react-icons/go";
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();

  function AddCategory () {
    navigate("/addcategory");
  }
  return (
    <div>
      <div className="flex justify-between items-center mb-5 md:mb-10">
        <p className="header">Menu</p>
        <button className="sm:px-6 px-2 py-2 flex items-center flex-shrink-0 text-[#000] text-center font-inter text-[15px] sm:text-xl not-italic font-medium border-[3px] rounded-[35px] border-[#FFB800] [box-shadow:0px_2px_5px_2px_rgba(205,_205,_205,_0.70)]">
          Sync & Verify
          <img
            src="assets/images/refresh 1.png"
            alt=""
            className="ml-2 sm:w-[20px] w-[15px] h-[15px] sm:h-[20px]"
          />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-0 py-0 mb-5 lg:mb-10">
        <div className="span-col-1 nor-div bg-white px-0 py-0">
          <div className="flex items-center sm:px-5 sm:py-[25px] px-[10px] py-[15px] bg-[#FFB800] [box-shadow:0px_2px_5px_2px_rgba(205,_205,_205,_0.70)] rounded-t-[10px] justify-between">
            <p className="header">Categories</p>
            <button className="bg-white px-3 header rounded-full" onClick={AddCategory}>+</button>
          </div>
          <div className="overflow-auto h-[50vh] custom-scrollbar">
            <div className="flex justify-between sm:px-[20px] px-[15px] sm:py-[20px] py-[15px]">
              <p className="sub-header">Canadian</p>
              <GoPencil />
            </div>
            <div className="flex justify-between sm:px-[20px] px-[15px] sm:py-[20px] py-[15px]">
              <p className="sub-header">North Indian</p>
              <GoPencil />
            </div>
            <div className="flex justify-between sm:px-[20px] px-[15px] sm:py-[20px] py-[15px]">
              <p className="sub-header">Pizza</p>
              <GoPencil />
            </div>
            <div className="flex justify-between sm:px-[20px] px-[15px] sm:py-[20px] py-[15px]">
              <p className="sub-header">Sushi</p>
              <GoPencil />
            </div>
            <div className="flex justify-between sm:px-[20px] px-[15px] sm:py-[20px] py-[15px]">
              <p className="sub-header">Asian</p>
              <GoPencil />
            </div>
            <div className="flex justify-between sm:px-[20px] px-[15px] sm:py-[20px] py-[15px]">
              <p className="sub-header">Canadian</p>
              <GoPencil />
            </div>
            <div className="flex justify-between sm:px-[20px] px-[15px] sm:py-[20px] py-[15px]">
              <p className="sub-header">North Indian</p>
              <GoPencil />
            </div>
            <div className="flex justify-between sm:px-[20px] px-[15px] sm:py-[20px] py-[15px]">
              <p className="sub-header">Pizza</p>
              <GoPencil />
            </div>
            <div className="flex justify-between sm:px-[20px] px-[15px] sm:py-[20px] py-[15px]">
              <p className="sub-header">Sushi</p>
              <GoPencil />
            </div>
            <div className="flex justify-between sm:px-[20px] px-[15px] sm:py-[20px] py-[15px]">
              <p className="sub-header">Asian</p>
              <GoPencil />
            </div>
          </div>
        </div>
        <div className="span-col-1 nor-div bg-white px-0 py-0">
          <div className="flex items-center sm:px-5 sm:py-[25px] px-[10px] py-[15px] bg-[#FFB800] [box-shadow:0px_2px_5px_2px_rgba(205,_205,_205,_0.70)] rounded-t-[10px] justify-between">
            <p className="header">Asian</p>
            <button className="bg-white px-3 header rounded-full">+</button>
          </div>
          <div className="overflow-auto h-[50vh] custom-scrollbar">
            <div className="flex justify-between sm:px-[20px] px-[15px] sm:py-[20px] py-[15px]">
              <p className="sub-header">Sushi Rolls</p>
              <GoPencil />
            </div>
            <div className="flex justify-between sm:px-[20px] px-[15px] sm:py-[20px] py-[15px]">
              <p className="sub-header">Poke Bowls</p>
              <GoPencil />
            </div>
            <div className="flex justify-between sm:px-[20px] px-[15px] sm:py-[20px] py-[15px]">
              <p className="sub-header">Sushi Rolls</p>
              <GoPencil />
            </div>
            <div className="flex justify-between sm:px-[20px] px-[15px] sm:py-[20px] py-[15px]">
              <p className="sub-header">Poke Bowls</p>
              <GoPencil />
            </div>
          </div>
        </div>
      </div>
      <button className="nor-btn px-6 py-3">Create Sub-Category</button>
    </div>
  );
};

export default Menu;
