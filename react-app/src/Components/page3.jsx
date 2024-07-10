import React from "react";
import Thumb1 from "../assets/Img/wealthy-boss-cat-0cajejj56kyfr377.webp";
import Thumb2 from "../assets/Img/frog2.webp";
import Thumb3 from "../assets/Img/Horse.jpeg";
import Thumb4 from "../assets/Img/monkey.jpg";
import Thumb5 from "../assets/Img/bigimage.svg";
const Page3 = () => {
  return (
    <div className=" pt-20 bg-black text-white w-full flex flex-col items-center gap-10">
      <div>
        <p className="text-[24px]">
          Top Crypto Creators and Projects to Follow
        </p>
        <p className="text-[16px] text-white-opacity-40 flex flex-col items-center">
          Answers to your crypto doubts, straight from the experts
        </p>
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-wrap gap-10">
          <img
            src={Thumb1}
            alt=""
            className="h-[418px] w-[281px] rounded-[24px] object-cover shadow-lg"
          />
          <img
            src={Thumb2}
            alt=""
            className="h-[418px] w-[281px] rounded-[24px] object-cover shadow-lg"
          />
          <img
            src={Thumb3}
            alt=""
            className="h-[418px] w-[281px] rounded-[24px] object-cover"
          />
          <img
            src={Thumb4}
            alt=""
            className="h-[418px] w-[281px] rounded-[24px] object-cover"
          />
        </div>
      </div>

      <div className="pt-20 w-full text-white">
        <div className="w-full flex flex-col items-center gap-10">
          <div>
            <p className="text-[24px] flex flex-col items-center">Crypto Dictionary</p>
            <p className="text-[16px] text-white-opacity-40">
              Your one-stop to catch up on all crypto terms
            </p>
          </div>
          <div className="w-full flex flex-col items-center">
            <div className="flex flex-wrap gap-10">
              <img
                src={Thumb5}
                alt=""
                className="h-[418px] w-[80vw] rounded-[24px] object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
