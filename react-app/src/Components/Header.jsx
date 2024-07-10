import React from "react";
import interact from "../assets/Img/intract_logo.svg";
import icon from "../assets/Img/icon.svg";
import { MagnifyingGlass } from "phosphor-react";

const Header = () => {
  return (
    <div className="w-full bg-black h-[64px] text-white flex flex-row justify-evenly items-center">
      <div className="ml-[5vw]">
        <img
          src={interact}
          alt=""
          className="w-[97px] h-[42.5px]"
        />
      </div>

      <div className="flex items-center gap-8 font-[Outfit] font-[400] text-[#ffffffb3] text-[16px] cursor-pointer hover:underline-offset-8 ">
        <p className="h-full hover:underline">Compass</p>
        <p>Explore</p>
        <p>
          Academy
          <button className="bg-button rounded-lg w-[40px] h-[20px] place-content-center ml-2 text-white text-[12px]">
            New
          </button>
        </p>
        <p>NFTs</p>
        <p>For Projects</p>
      </div>
      <div className="flex items-center w-[25vw] border-[1px] px-[10px] py-[16px] bg-white-opacity-7 h-[42.5px] rounded-[1000px] border-white-opacity-5 gap-[0.5rem]">
        <MagnifyingGlass size={24} className=" text-white-opacity-7" />
        <input
          type="text"
          style={{
            background: "none",
            fontSize: "14px",
          }}
          placeholder="Search for ecosystems, trending quests etc,."
        />
      </div>
      <div className="flex items-center text-black gap-4">
        <img
          src={icon}
          alt=""
          className="h-[42,5px] w-[42.5px] border-[#fa8922] rounded-full bg-icon-colour"
        />
        <button className="w-[92px] h-[32px] bg-white rounded-[4px]">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Header;
