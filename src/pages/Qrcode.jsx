import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsUpload } from "react-icons/bs";

const Qrcode = () => {
  const [openTab, setOpenTab] = React.useState(1);
  const [selectedFrame, setSelectedFrame] = useState("option1");

  const SelectFrame = (event) => {
    setSelectedFrame(event.target.value);
  };

  const [selectedColor, setSelectedColor] = useState("option1");

  const SelectColor = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div>
      <div className="header mb-10">QR Code Generator</div>
      <div className="lg:flex grid grid-cols-1 gap-5 lg:mb-10 mb-5">
        <div className="nor-div bg-white flex flex-col items-center md:gap-5 gap-3 max-h-[540px]">
          <img src="assets/images/grcodeforadhoc 11.png" alt="" className="" />
          <select
            value={selectedFrame}
            onChange={SelectFrame}
            className="w-2/3 lg:w-full nor-div sub-header pr-10 py-3 text-left"
          >
            <option value="option1" className="sub-header">
              Frame
            </option>
          </select>
          <select
            value={selectedColor}
            onChange={SelectColor}
            className="w-2/3 lg:w-full nor-div sub-header pr-10 py-3 text-left lg:mb-[120px] mb-10"
          >
            <option value="option1" className="sub-header">
              Color
            </option>
          </select>
        </div>
        <div className="nor-div bg-white flex flex-col flex-1">
          <ul className="grid md:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 gap-4 mb-6">
            <li className="">
              <Link
                className={`tab-div sub-header flex justify-center ${
                  openTab === 1 ? "bg-[#FFB800] " : "bg-[#FFB800]-600"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#url_link"
                role="tablist"
              >
                URL
              </Link>
            </li>
            <li className="">
              <Link
                className={`tab-div sub-header flex justify-center ${
                  openTab === 2 ? "bg-[#FFB800] " : "bg-[#FFB800]-600"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#text_link"
                role="tablist"
              >
                Text
              </Link>
            </li>
            <li className="">
              <Link
                className={`tab-div sub-header flex justify-center ${
                  openTab === 3 ? "bg-[#FFB800] " : "bg-[#FFB800]-600"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#email_link"
                role="tablist"
              >
                E-Mail
              </Link>
            </li>
          </ul>
          <div className="flex-1">
            <div
              className={`h-full flex flex-col justify-between ${
                openTab === 1 ? "block" : "hidden"
              }`}
              id="url_link"
            >
              <div />
              <div className="xl:ml-10 ml-5 lg:mb-0 mb-3">
                <input
                  className="header text-[#4F4F4F]"
                  placeholder="Enter your website"
                />
                <p className="sub-typo text-[#8A8A8A]">
                  Your QR Code will be generated automatically
                </p>
              </div>
              <div className="flex">
                <label for="dropzone-file" class="">
                  <div class="flex items-center">
                    <BsUpload />
                    <p class="text-[#0094FF] mx-2 sub-typo">Upload any file</p>
                  </div>
                  <input id="dropzone-file" type="file" class="hidden" />
                </label>
                <p className="sub-typo">( pdf, jpg, docx, pptx)</p>
              </div>
            </div>

            <div
              className={`h-full flex flex-col justify-between  w-full ${openTab === 2 ? "block" : "hidden"}`}
              id="text_link"
            >
              <div />
              <div className="xl:ml-10 ml-5 lg:mb-0 mb-3">
                <input
                  className="header text-[#4F4F4F]"
                  placeholder="Enter your Text"
                />
                <p className="sub-typo text-[#8A8A8A]">
                  Your QR Code will be generated automatically
                </p>
              </div>
              <div className="flex">
                <label for="dropzone-file" class="">
                  <div class="flex items-center">
                    <BsUpload />
                    <p class="text-[#0094FF] mx-2 sub-typo">Upload any file</p>
                  </div>
                  <input id="dropzone-file" type="file" class="hidden" />
                </label>
                <p className="sub-typo">( pdf, jpg, docx, pptx)</p>
              </div>
            </div>
            <div
              className={`lg:pt-[80px] w-full ${openTab === 3 ? "block" : "hidden"}`}
              id="email_link"
            >
              <p className="header mb-10">E-Mail QR code</p>
              <form action="" className="flex flex-col max-w-[600px]">
                <label htmlFor="" className="sub-header ml-2 mb-3">Email:</label>
                <input type="text" className="tab-div mb-6 sub-typo" placeholder="Your Email"/>
                <label htmlFor="" className="sub-header ml-2 mb-3">Subject:</label>
                <input type="text" className="tab-div mb-6 sub-typo" placeholder="Enter email subject"/>
                <label htmlFor="" className="sub-header ml-2 mb-3">Message:</label>
                <textarea name="" id="" cols="30" rows="10" className="tab-div mb-10 sub-typo" placeholder="Enter your message"></textarea>
                <button className="nor-btn max-w-[300px] flex justify-center">Generate QR Code</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center lg:justify-end gap-5">
        <Link
          to=""
          className="nor-btn px-8 sm:px-16 lg:px-20 h-auto flex-col justify-center"
        >
          <p className="header">Download</p>
          <p className="sub-typo flex justify-center">JPG</p>
        </Link>
        <Link
          to=""
          className="rej-btn px-8 sm:px-16 lg:px-20 h-auto flex-col justify-center"
        >
          <p className="header"> Vector </p>
          <p className="sub-typo flex justify-center">SVG/EPS</p>
        </Link>
      </div>
    </div>
  );
};

export default Qrcode;
