import React from "react";
import animated from "../assets/Img/Animated_logo.gif";

import { ArrowRight } from "phosphor-react";
const Page1 = () => {
  return (
    <div className=" w-full bg-[url('https://www.intract.io/assets/intract-academy-background-5547a705.png')] h-[590px]">
      <div className="w-full h-full flex flex-col justify-center items-center gap-6">
        <div className="w-[235px] h-[100px] bg-none mix-blend-screen">
          <img src={animated} alt="" />
        </div>
        <div>
          <span className="text-white-opacity-80 text-[20px]">
            Intract users
          </span>{" "}
          <span className="text-gray-600 text-[20px] font-[700]">
            have together made more than
          </span>
          <span className="text-white-opacity-80 text-[20px] mr-1">
            $100 million
          </span>
          <span className="text-gray-600 text-[20px] font-[700]">
            in web3 <br />
            <div className="flex justify-center items-center gap-2">
              <span>Join them and</span>
              <span className="text-white-opacity-80 text-[20px]">
                learn how to earn crypto!
              </span>
            </div>
            {/* <span className="text-white-opacity-80 text-[20px]">
            learn how to earn crypto!
          </span> */}
          </span>
        </div>
        <div>
          <button className="bg-[#6435e9] w-[212px] h-[38px] text-white flex justify-center items-center gap-2 rounded-[8px]">
            <span>Get Started </span>
            <ArrowRight size={24} />
          </button>
        </div>
     
      </div>
    </div>
  );
};

export default Page1;
