import React from "react";
import Header from "./Components/Header";
import Page1 from "./Components/page1";
import Page2 from "./Components/Page2";
import Page3 from "./Components/page3";

const App = () => {
  return (
    <div>
      <Header />
      <Page1 />
      {/* <div className="flex flex-col items-center sticky">
        <div className="w-[307px] h-[37px] rounded border-[1px] border-white-opacity-7 flex">
          <div className="h-full w-1/2 rounded-[1000px] bg-white-opacity-15 mix-blend-screen flex justify-center items-center text-[#FFFFFF]">
            Essentials
          </div>
          <div className="h-full w-1/2 rounded-[1000px] bg-white-opacity-0 mix-blend-screen flex justify-center items-center text-[#FFFFFF]">
            Alpha hub
          </div>
        </div>
      </div> */}
      <Page2 />

      <div className="w-full h-0 border-[1px] border-gray-900"></div>

      <Page3 />
    </div>
  );
};

export default App;
