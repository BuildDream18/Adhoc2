<div className="grid lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 gap-4">
            <button className="nor-div bg-white sub-header">URL</button>
            <button className="nor-div bg-white sub-header">Text</button>
            <button className="nor-div bg-white sub-header">E-Mail</button>
            <button className="nor-div bg-white sub-header">SMS</button>
            <button className="nor-div bg-white sub-header">Wi-Fi</button>
            <button className="nor-div bg-white sub-header">Twitter</button>
          </div>;


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
            ></div>
            <div
              className={`${openTab === 2 ? "block" : "hidden"}`}
              id="link2"
            ></div>
          </div>
        </div>