import React from "react";
import { IoStar } from "react-icons/io5";
import { GrFormAttachment } from "react-icons/gr";
import { SlGraduation } from "react-icons/sl";
import { BiMessageDetail } from "react-icons/bi";
import { Link } from "react-router-dom";
import girl2 from "../../assets/girl2.png";

export default function Card() {
  return (
    <div className="relative w-full h-full bg-[#FFF7E2] border border-[#E3E3E3] shadow-md shadow-[#00000012] rounded-[30px] font-nunito">
      <div className="px-[36px] py-[29px] flex flex-col items-center justify-center relative">
        <div
          className="rounded-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${girl2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "149px",
            height: "150px",
          }}
        >
          <div className=" mt-[126px] w-full flex items-center justify-center pl-4">
            <div className="w-[70px] h-[28px] bg-[#0B0B0B] bg-opacity-75 rounded-[17px] flex items-center justify-center gap-2">
              <p className="text-white font-bold">4.5</p>
              <IoStar size={15} className="text-[#EFDA3B]" />
            </div>
          </div>
        </div>

        <div className="">
          <h1 className="text-[#2E2F2E] text-[32px] font-bold mt-3">
            Dr. Prerna Narang{" "}
          </h1>
        </div>
        <div className="  flex flex-col gap-[16px]  pl-6">
          <div className=" flex-col flex  gap-2  ">
            <div className="flex gap-2 items-center">
              <GrFormAttachment size={25} className="text-[#3A643B]" />
              <p className="text-[16px] text-[#646665]">
                Male-Female infertility
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <SlGraduation size={20} className="text-[#3A643B]" />
              <p className="text-[16px] text-[#646665]">
                7 Years of Experience
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <BiMessageDetail size={20} className="text-[#3A643B]" />
              <p className="text-[16px] text-[#646665]">
                Speakes: English,Hindi,Marathi
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-3 mt-4">
          <button className="w-[136px] h-[57px] rounded-[10px] border border-[#3A643B63] flex flex-col items-center justify-center">
            <p className="text-[#3C3C3C] text-[14px] font-semibold">
              Video Consultation
            </p>
            <p className="text-[14px] text-[#3A643B] font-semibold">₹800</p>
          </button>
          <button className="w-[136px] h-[57px] rounded-[10px] border border-[#3A643B63] flex flex-col items-center justify-center">
            <p className="text-[#3C3C3C] text-[14px] font-semibold">
              Chat Consultation
            </p>
            <p className="text-[14px] text-[#3A643B] font-semibold">Free</p>
          </button>
        </div>
        <div className="flex flex-col gap-[9px] mt-8">
          <Link
            className="w-[284px] h-[42px] border border-[#3A643B] bg-white text-[16px] font-semibold items-center justify-center flex text-[#3A643B] rounded-[8px]"
            to={"/book"}
          >
            View Profile
          </Link>
          <Link
            className="w-[287px] h-[53px]  bg-[#3A643B] text-[16px] font-semibold items-center justify-center flex text-white rounded-[8px]"
            to={"/book"}
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
