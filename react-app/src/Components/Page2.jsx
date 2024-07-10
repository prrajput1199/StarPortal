import { CaretDown, Check } from "phosphor-react";
import React, { useState } from "react";
import img from "../assets/Img/img1.png";
import coin from "../assets/Img/coin.svg";
import cat from "../assets/Img/cat.png";
import cat2 from "../assets/Img/cat2.png";
import img2 from "../assets/Img/img2.png";
import img3 from "../assets/Img/img2.jpg";
import meme1 from "../assets/Img/meme1.jpg";
import meme2 from "../assets/Img/meme2.jpg";
import meme5 from "../assets/Img/meme5.jpg";
import meme6 from "../assets/Img/meme5.jpg";
import Airdrop from "../assets/Img/Airdrops.png";

const Page2 = () => {
  const [toggle1, settoggle1] = useState(false);
  const [toggle2, settoggle2] = useState(false);
  const crypto = [
    {
      id: "1",
      img: img2,
      description: "#1 .But what is Crypto....",
      Tasks: 11,
    },
    {
      id: "2",
      img: img3,
      description: "#2 .Setting Up your Own....",
      Tasks: 8,
    },
    {
      id: "3",
      img: meme1,
      description: "#3 What the heck is this....",
      Tasks: 8,
    },
    {
      id: "4",
      img: meme2,
      description: "#4 Swapping and bridging....",
      Tasks: 10,
    },
    {
      id: "5",
      img: meme5,
      description: "#5 .NFT's and why they're....",
      Tasks: 6,
    },
    {
      id: "6",
      img: meme6,
      description: "#6 .Doing quest and ....",
      Tasks: 8,
    },
  ];

  const Airdrops = [
    {
      id: "1",
      img: img2,
      description: "#1 .What are airdrops and....",
      Tasks: 7,
    },
    {
      id: "2",
      img: img3,
      description: "#2 Types of airdrops.....",
      Tasks: 10,
    },
    {
      id: "3",
      img: meme1,
      description: "#3 How to earn huge $$$....",
      Tasks: 11,
    },
    {
      id: "4",
      img: meme2,
      description: "#4 Things to keep in mind....",
      Tasks: 7,
    },
  ];

  return (
    <div className="w-full  bg-black pl-[13vw] pb-14">
   

      <div
        className="w-[520px] h-[228px]  border-[1px] border-black rounded-[24px] bg-[#151515] hover:bg-white-opacity-12 cursor-pointer"
        onClick={() => settoggle1(!toggle1)}
      >
        <div className="text-white">
          <CaretDown size={32} onClick={() => settoggle1(!toggle1)} />
        </div>
        <div className="flex justify-center items-center gap-3">
          <div className="w-[160px] h-[180px] bg-[#151515] rounded-[16px] p-[8px] border-white-opacity-20 border-[1px]">
            <img
              src={img}
              alt=""
              className="w-[142px] h-[162px] object-cover"
            />
          </div>
          <div className="w-[243px] h-[143px] flex flex-col justify-center items-center gap-4">
            <p className="text-white text-[24px] font-[400] font-[Outfit]">
              Basics of Crypto
            </p>
            <p className="text-[#FFFFFF66]">
              The safest and easiest place to start your crypto journey!
            </p>
            <div className="w-full h-[1px] border-[1px] border-dotted border-slate-700"></div>
            {/* <hr className="w-full h-[1px] bg-slate-700" /> */}
            <div className="w-[104px] h-[32px] rounded-[1000px] border-[2px] bg-[#252525] border-white-opacity-5 flex justify-center items-center gap-2">
              <img src={coin} alt="" className="h-[16px] w-[18px]" />
              <span className="text-white">1490 XPs</span>
            </div>
          </div>
        </div>
      </div>
      {toggle1 && (
        <div className="absolute w-[520px] h-[350px] pt-3 border-[1px] border-black rounded-[24px] bg-[#151515] flex flex-col items-center gap-3 overflow-y-scroll">
          {crypto.map((el) => {
            return (
              <>
                <div className="w-[480px] h-[110px] border-[1px] border-black rounded-[24px] bg-white-opacity-5 flex justify-center items-center gap-3">
                  <div className="bg-[#151515] rounded-[16px] p-[8px] border-white-opacity-20 border-[1px]">
                    <img
                      src={el.img}
                      alt=""
                      className="w-[100px] h-[60px] rounded-[16px]"
                    />
                  </div>
                  <div className="w-[243px] h-[143px] flex flex-col justify-center items-center gap-2">
                    <p className="text-white text-[20px] font-[400] font-[Outfit]">
                      {el.description}***
                    </p>
                    <hr className="w-full h-[1px] bg-slate-700" />
                    <div className=" border-white-opacity-5 flex justify-center items-center gap-2">
                      <span className="text-[16px] font-[Outfit] text-[#FFFFFF99]">
                        {el.Tasks} Tasks
                      </span>
                      <div className="w-[150px] h-[18px] bg-[#FFFFFF12] rounded-[100px] border-[1px] border-[#000]"></div>
                      <div>
                        <Check
                          size={16}
                          className="text-white border-[1px] border-white-opacity-40 rounded-full text-center bg-[#151515] text-white-opacity-40"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      )}
      <div className="w-[264px] h-[380px] ml-auto mr-32">
        <div className="w-full h-full flex flex-col items-center gap-2">
          <Check
            size={48}
            className="text-white border-[1px] border-white-opacity-40 rounded-full text-center bg-[#151515] text-white-opacity-40"
          />

          <div className="h-[177px] w-[157px] p-[8px] my-1">
            <img
              src={cat}
              alt=""
              className="h-[165px] w-[147px] rounded-[20px]"
            />
          </div>
          <div>
            <p className="text-[#FFFFFF66] font-[400] text-[20px]">
              Intract Certified: Learner NFT
            </p>
            <p className="text-[#FFFFFF33] font-[400] text-[16px]">
              Your crypto black-belt certificate
            </p>
          </div>
          <div className="">
            <button className="w-[160px] h-[41px] rounded-[8px] bg-[#151515] text-white-opacity-40">
              Claim
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-10">
        <div
          className="w-[520px] h-[228px] border-[1px] border-black rounded-[24px] bg-[#151515]"
          onClick={() => settoggle2(!toggle2)}
        >
          <div className="text-white">
            <CaretDown size={32} onClick={() => settoggle2(!toggle2)} />
          </div>
          <div className="flex justify-center items-center gap-6">
            <div className="w-[160px] h-[180px] bg-[#151515] rounded-[16px] p-[8px] border-white-opacity-20 border-[1px]">
              <img
                src={Airdrop}
                alt=""
                className="w-[142px] h-[162px] object-cover"
              />
            </div>
            <div className="w-[243px] h-[143px] flex flex-col justify-center items-center gap-4">
              <p className="text-white text-[24px] font-[400] font-[Outfit]">
                Introduction to Airdrops
              </p>
              <p className="text-[#FFFFFF66]">
                Your best bet to make it big in crypto!
              </p>
              <hr className="w-full h-[1px] bg-slate-700" />
              <div className="w-[104px] h-[32px] rounded-[1000px] border-[2px] bg-[#252525] border-white-opacity-5 flex justify-center items-center gap-2">
                <img src={coin} alt="" className="h-[16px] w-[18px]" />
                <span className="text-white">1490 XPs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {toggle2 && (
        <div className="relative w-[520px] h-[350px] pt-3 border-[1px] border-black rounded-[24px] bg-[#151515] flex flex-col items-center gap-3 overflow-y-scroll">
          {Airdrops.map((el) => {
            return (
              <>
                <div className="w-[480px] h-[97.5px] border-[1px] border-black rounded-[24px] bg-white-opacity-5 flex justify-center items-center gap-3">
                  <div className="bg-[#151515] rounded-[16px] p-[8px] border-white-opacity-20 border-[1px]">
                    <img
                      src={el.img}
                      alt=""
                      className="w-[100px] h-[60px] rounded-[16px]"
                    />
                  </div>
                  <div className="w-[243px] h-[143px] flex flex-col justify-center items-center gap-4">
                    <p className="text-white text-[20px] font-[400] font-[Outfit]">
                      {el.description}***
                    </p>
                    <hr className="w-full h-[1px] bg-slate-700" />
                    <div className=" border-white-opacity-5 flex justify-center items-center gap-2">
                      <span className="text-[16px] font-[Outfit] text-[#FFFFFF99]">
                        {el.Tasks} Tasks
                      </span>
                      <div className="w-[150px] h-[18px] bg-[#FFFFFF12] rounded-[100px] border-[1px] border-[#000]"></div>
                      <div>
                        <Check
                          size={16}
                          className="text-white border-[1px] border-white-opacity-40 rounded-full text-center bg-[#151515] text-white-opacity-40"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      )}
      <div className="w-[264px]  h-[380px] mt-10">
        <div className="w-full h-full flex flex-col items-center gap-2">
          <Check
            size={48}
            className="text-white border-[1px] border-white-opacity-40 rounded-full text-center bg-[#151515] text-white-opacity-40"
          />

          <div className="h-[177px] w-[157px] p-[8px] my-1">
            <img
              src={cat2}
              alt=""
              className="h-[165px] w-[147px] rounded-[20px]"
            />
          </div>
          <div>
            <p className="text-[#FFFFFF66] font-[400] text-[20px]">
              Intract Certified: Learner NFT
            </p>
            <p className="text-[#FFFFFF33] font-[400] text-[16px] my-2">
              Your proof of <br />
              airdrop expertise
            </p>
          </div>
          <button className="w-[160px] h-[41px] rounded-[8px] bg-[#151515] text-white-opacity-40">
            Claim
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page2;
