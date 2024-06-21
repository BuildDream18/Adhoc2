import React from "react";

const MenuRemain = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-5 md:mb-10">
        <p className="sub-header px-5 flex text-center">Your menu is configured by somebody else. Please get in contact with third party support. Thank you!</p>
        <button className="sm:px-6 px-2 py-2 flex items-center flex-shrink-0 text-[#000] text-center font-inter text-[15px] sm:text-xl not-italic font-medium border-[3px] rounded-[35px] border-[#FFB800] [box-shadow:0px_2px_5px_2px_rgba(205,_205,_205,_0.70)]">
          Sync & Verify
          <img
            src="assets/images/refresh 1.png"
            alt=""
            className="ml-2 sm:w-[20px] w-[15px] h-[15px] sm:h-[20px]"
          />
        </button>
      </div>
      <div className="flex justify-center">
        <img src="assets/images/image 32.png" alt="" />
      </div>
    </div>
  );
};

export default MenuRemain;
