import React, { useRef } from "react";
import { Link } from "react-router-dom";

const AddCategory = () => {
  return (
    <div>
      <div className="flex justify-between mb-5">
        <p className="header">Add New Category</p>
        <Link
          to="/menuremain"
          className="flex items-center sub-header text-[#FFB800]"
        >
          <img src="assets/images/Vector 32.png" alt="" className="mr-2" />
          Category List
        </Link>
      </div>
      <div className="nor-div md:px-10">
        <form action="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="span-col-1 flex flex-col items-center">
              <div className="md:mb-5 mb-3">
                <p className="header">Name</p>
                <input className="nor-div bg-white sub-header py-3" />
              </div>
              <div>
                <p className="header">Description</p>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="nor-div bg-white"
                ></textarea>
              </div>
            </div>
            <div className="span-col-1 flex flex-col items-center gap-3">
              <p className="header">Presentation Image</p>
              <p className="sub-typo">Aspect Ratio: 4:3</p>
              <label
                for="dropzone-file"
                class="flex flex-col justify-center h-[260px] w-[320px] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    class="w-8 h-8 mb-8 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400 sub-typo">
                    <span class="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400 sub-typo">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
              </label>
              <button className="nor-btn sub-header mt-5 px-14 ">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
