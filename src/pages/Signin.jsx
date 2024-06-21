import React from "react";

function Signin() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col gap-[30px] items-center justify-center w-[388px] md:w-[538px] h-[573px] bg-bg_admin rounded-[10px] flex-shrink-0">
        <div>
          <img
            src="assets/images/adhoc_text.png"
            alt="adhoc_text"
            className="w-[233px] h-[78px] flex-shrink-0"
          />
        </div>
        <div className="text-[#FFB800] w-[306px] text-center font-inter text-[20px] md:text-[25px] not-italic font-medium">
          Welcome, Please Sign In
        </div>
        <form action="">
          <div className="mb-4">
            <p
              className="text-[#000] text-left font-inter text-[15px] md:text-[20px] not-italic font-medium"
              htmlFor="username"
            >
              Username
            </p>
            <input
              className="w-[234px] h-[40px] flex-shrink-0 rounded-[20px] bg-white shadow-bs_custom"
              id="username"
              type="text"
              placeholder=""
            />
          </div>
          <div className="mb-[10px]">
            <p
              className="text-[#000] text-left font-inter text-[15px] md:text-[20px] not-italic font-medium"
              htmlFor="password"
            >
              Password
            </p>
            <input
              className="w-[234px] h-[40px] flex-shrink-0 rounded-[20px] bg-white shadow-bs_custom"
              id="password"
              type="password"
              placeholder=""
            />
          </div>
          <a
            className="inline-block align-baseline font-bold text-[12px] md:text-[15px] text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </form>
        <button className="w-[234px] h-[50px] rounded-[35px] flex-shrink-0 bg-bg_button shadow-bs_custom text-black text-center text-[15px] md:text-[20px] font-inter font-medium leading-normal">
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Signin;
