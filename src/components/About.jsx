import { FiFacebook } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
import { SlSocialYoutube } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";
import girl from "../../public/girlimg.jpg";

import { IoStar } from "react-icons/io5";
import { MdOutlineHomeWork } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";
import womenhealth from "../assets/woman-health.svg";
import skincare from "../assets/skin-care.svg";
import immunity from "../assets/immunity.svg";
import hair from "../assets/hair.svg";

export default function About() {
  return (
    <div className="flex w-full max-w-[1220px] mt-12 gap-8">
      <div className="  ">
        <div className="flex flex-col mb-10 ">
          <div className="w-[628px] h-[410px] border border-[#DCDCDC] rounded-[18px]">
            <div className="h-16 bg-gradient-to-b from-[#FBFCFB] to-[#F4F7EC] w-[625px] border-l rounded-t-[15px] rounded-r-[18px] flex justify-between px-14 items-center">
              <h4 className="text-2xl text-[#313131] font-medium font-nunito">
                A Little About me
              </h4>
              <button className="bg-white rounded-[10px] border border-[#3A643B] text-[#585858]  text-2xl py-[5px] px-[21px] font-semibold items-center font-poppins  w-[113px][]">
                Follow +
              </button>
            </div>
            <div className="mt-8  px-10">
              {" "}
              <p className="text-[#33354880] text-base font-semibold pb-2 font-poppins  ">
                {" "}
                Hello I a am Dr. Bruce Willis a Gynaecologist of Sanjivni
                Hospital Surat.love to work with all my hospital staff and
                seniour doctors. Completed my graduation in Gynaelogist Medicine
                from the
              </p>
              <div className="w-[540px] h-[27px] items-center flex mt-3">
                <div className="  items-center gap-2 justify-center  flex ">
                  {" "}
                  <hr class="w-[437px]      border-[0.5px] border-[#797979] "></hr>
                  <span className="underline text-[16px]  text-black  font-medium font-poppins ">
                    Read More
                  </span>
                </div>
              </div>
            </div>
            <div className="max-w-[512px] h-[40px] flex justify-between items-center mt-10  gap-[10px] pl-8 font-nunito ">
              <button className="text-[#000000] text-[20px] leading-5 font-medium">
                Language Spoken
              </button>
              <button className="max-w-[105px] max-h-[40px] rounded-[16px] px-4 py-2 bg-[#2E37A40A] flex items-center justify-center text-[#505050] font-medium text-xl">
                English
              </button>
              <button className="max-w-[83px] max-h-[40px] rounded-[16px] px-4 py-2  bg-[#2E37A40A] flex items-center justify-center text-[#505050] font-medium text-xl">
                Hindi
              </button>
              <button className="max-w-[99px] max-h-[40px] rounded-[16px]  px-4 py-2 bg-[#2E37A40A] flex items-center justify-center text-[#505050] font-medium text-xl">
                Telegu
              </button>
            </div>
            <div className="w-[240px] h-10 gap-[15px] pl-10 mt-8 flex">
              <button className="w-10 h-10 rounded-full bg-[#F7F7FC] border-[0.3px] border-[#8E8E8E] items-center justify-center flex text-[#3A643B]">
                <FiFacebook size={25} />
              </button>
              <button className="w-10 h-10 rounded-full bg-[#F7F7FC] border-[0.3px] border-[#8E8E8E] items-center justify-center flex text-[#3A643B]">
                <IoLogoInstagram size={25} />
              </button>
              <button className="w-10 h-10 rounded-full bg-[#F7F7FC] border-[0.3px] border-[#8E8E8E] items-center justify-center flex text-[#3A643B]">
                <SlSocialYoutube size={25} />
              </button>
              <button className="w-10 h-10 rounded-full bg-[#F7F7FC] border-[0.3px] border-[#8E8E8E] items-center justify-center flex text-[#3A643B]">
                <CiTwitter size={25} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 w-[628px] h-[251px] border border-[#DCDCDC] rounded-[18px]">
          <div className="h-16 bg-gradient-to-b from-[#FBFCFB] to-[#F4F7EC] w-[625px] border-l rounded-t-[15px] rounded-r-[18px] flex justify-between px-14 items-center">
            <h2 className="text-2xl text-[#313131] font-medium font-nunito">
              I Specialize In
            </h2>
          </div>
          <div className="max-w-lg mt-10 pl-8  gap-[14px] flex items-center font-nunito">
            <div className="flex flex-col gap-2 items-center ">
              <div className=" w-[100px] h-[96px] bg-[#FFFCF2] border border-[#EAEAEA] rounded-[9px] flex items-center justify-center">
                <img src={womenhealth} alt="" />
              </div>
              <p className="text-base font-medium leading-[19.5px]">
                Women's Health
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <div className=" w-[100px] h-[96px] bg-[#FFFCF2] border border-[#EAEAEA] rounded-[9px] flex items-center justify-center">
                <img src={skincare} alt="" />
              </div>
              <p className="text-base font-medium leading-[19.5px]">
                Skin Care
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <div className=" w-[100px] h-[96px] bg-[#FFFCF2] border border-[#EAEAEA] rounded-[9px] flex items-center justify-center">
                <img src={immunity} alt="" />
              </div>
              <p className="text-base font-medium leading-[19.5px]">Immunity</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <div className=" w-[100px] h-[96px] bg-[#FFFCF2] border border-[#EAEAEA] rounded-[9px] flex items-center justify-center">
                <img src={hair} alt="" />
              </div>
              <p className="text-base font-medium leading-[19.5px]">
                Hair Care
              </p>
            </div>
          </div>
          <div className="w-[628px] h-[222px] border border-[#DCDCDC] rounded-[18px] mt-12">
            <div className="h-16 bg-gradient-to-b from-[#FBFCFB] to-[#F4F7EC] w-[625px] border-l rounded-t-[15px] rounded-r-[18px] flex justify-between px-14 items-center">
              <h1 className="  text-2xl text-[#313131] font-medium font-nunito">
                {" "}
                The Concerns I Treat{" "}
              </h1>
            </div>
            <div className=" mt-8 flex flex-col gap-4 font-nunito ">
              <div className="flex gap-2 px-6 justify-between">
                <button className="w-[154px] h-[43px] rounded-[19px] px-1 py-2 bg-[#F7F7FC] text-[#3A643B] font-medium text-base flex items-center justify-center">
                  Skin Treatment
                </button>
                <button className="w-[113px] h-[42px] rounded-[19px] px-1 py-2 bg-[#F7F7FC] text-[#3A643B] font-medium text-base flex items-center justify-center">
                  Pregnancy
                </button>
                <button className="w-[135px] h-[42px] rounded-[19px] px-1 py-2 bg-[#F7F7FC] text-[#3A643B] font-medium text-base flex items-center justify-center">
                  Period Doubts
                </button>
                <button className="w-[135px] h-[42px] rounded-[19px] px-1 py-2 bg-[#F7F7FC] text-[#3A643B] font-medium text-base flex items-center justify-center">
                  Endometriosis
                </button>
              </div>
              <div className="flex gap-2 px-6 ">
                <button className="w-[135px] h-[42px] rounded-[19px] px-1 py-2 bg-[#F7F7FC] text-[#3A643B] font-medium text-base flex items-center justify-center">
                  Pelvic Pain
                </button>
                <button className="w-[135px] h-[42px] rounded-[19px] px-1 py-2 bg-[#F7F7FC] text-[#3A643B] font-medium text-base flex items-center justify-center">
                  Ovarian Cysts
                </button>
                <button className="w-[119px] h-[42px] rounded-[19px] px-1 py-2 bg-white text-[#3A643B] font-medium text-base flex items-center justify-center border border-[#E0DFDF]">
                  + 5 More
                </button>
              </div>
            </div>
            <div className="w-[628px] h-[331px] border border-[#DCDCDC] rounded-[18px] mt-12">
              <div className="h-16 bg-gradient-to-b from-[#FBFCFB] to-[#F4F7EC] w-[625px] border-l rounded-t-[15px] rounded-r-[18px] flex justify-between px-14 items-center">
                <h1 className="text-2xl text-[#313131] font-medium font-nunito">
                  My Work Experince
                </h1>
              </div>
              <div className="px-  font-poppins">
                <p className="text-[#3A643B] text-lg font-semibold mt-8  pl-8 ">
                  I HAVE BEEN IN PRACTICE FOR: 7+ YEARS
                </p>
                <hr class="w-[421.5px]    ml-6 mt-6 border border-[#D4D4D4] "></hr>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex ml-8 mt-6 items-center">
                  <div className="h-[48px] w-[48px] bg-[#F7F7FC] mr-4  flex items-center justify-center rounded-[6px]">
                    <MdOutlineHomeWork className="text-[#2E37A4]" size={25} />
                  </div>
                  <div className=" flex">
                    <div className="flex flex-col">
                      <h1 className="text-base font-medium">
                        Midtown Medical Clinic
                      </h1>
                      <p className="text-[#33354880] font-medium">
                        Senior Doctor
                      </p>
                    </div>
                    <p className=" text-[#333548B5] ml-24 text-base font-normal">
                      2016-Present
                    </p>
                  </div>
                </div>
                <div className="flex ml-8  items-center ">
                  <div className="h-[48px] w-[48px] bg-[#F7F7FC] mr-4 rounded-[6px] justify-center items-center flex">
                    <MdOutlineHomeWork size={25} className="text-[#2E37A4]" />
                  </div>
                  <div className=" flex">
                    <div className="flex flex-col">
                      <h1 className="text-base font-medium">
                        Midtown Medical Clinic
                      </h1>
                      <p className="text-[#33354880] font-medium">
                        Senior Doctor
                      </p>
                    </div>
                    <p className=" text-[#333548B5] ml-24 text-base font-normal">
                      2010-2015
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 w-[628px] h-[524px] border border-[#DCDCDC] rounded-[18px]">
              <div className="h-16 bg-gradient-to-b from-[#FBFCFB] to-[#F4F7EC] w-[625px] border-l rounded-t-[15px] rounded-r-[18px] flex justify-between px-14 items-center">
                <h1 className="text-2xl text-[#313131] font-medium font-nunito">
                  Featured Reviews(112)
                </h1>
              </div>
              <div className="px-[35px] pt-[13px] pb-[22px] flex flex-col gap-6  font-nunito">
                <div className="flex w-[545px] h-[187px] rounded-[17px]  bg-[#FAFAFA] mt-4  flex-col ">
                  <div className=" flex  items-center px-8 mt-4">
                    <div
                      className=" rounded-[40px] mr-4 "
                      style={{
                        backgroundImage: `url(${girl})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: "54px",
                        height: "56px",
                      }}
                    ></div>
                    <div className="flex flex-col">
                      <p className="text-black text-xl font-semibold">
                        Alicent Hightower
                      </p>
                      <p className="text-[#939393] font-medium text-base">
                        Consulted for Skin Care
                      </p>
                    </div>
                    <div className="ml-28 text-[#979797] text-base">
                      20 January 2023{" "}
                    </div>
                  </div>

                  <div className="flex gap-2 px-8  mt-4 text-[#F79624]">
                    <IoStar size={15} />
                    <IoStar size={15} />
                    <IoStar size={15} />
                    <IoStar size={15} />
                    <IoStar size={15} />
                  </div>
                  <div className="max-w-lg pl-8 pr-2 mt-2 text-base text-black">
                    Might be bit early to confirm but yes I can see noticable
                    diffrence in my hairfall.will write again after using it for
                    longer period
                  </div>
                </div>

                <div className="flex w-[545px] h-[187px] rounded-[17px]  bg-[#FAFAFA]   flex-col ">
                  <div className=" flex  items-center px-8 mt-4">
                    <div
                      className=" rounded-[40px] mr-4 "
                      style={{
                        backgroundImage: `url(${girl})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: "54px",
                        height: "56px",
                      }}
                    ></div>
                    <div className="flex flex-col">
                      <p className="text-black text-xl font-semibold">
                        Alicent Hightower
                      </p>
                      <p className="text-[#939393] font-medium text-base">
                        Consulted for Pregnancy
                      </p>
                    </div>
                    <div className="ml-28 text-[#979797] text-base">
                      20 January 2023{" "}
                    </div>
                  </div>

                  <div className="flex gap-2 px-8  mt-4 text-[#F79624]">
                    <IoStar size={15} />
                    <IoStar size={15} />
                    <IoStar size={15} />
                    <IoStar size={15} />
                    <IoStar size={15} />
                  </div>
                  <div className="max-w-lg pl-8 pr-2 mt-2 text-base text-black">
                    Might be bit early to confirm but yes I can see noticable
                    diffrence in my hairfall.will write again after using it for
                    longer period
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-[#E8E8E8] rounded-[29px] w-[584px] h-[1087px]  ">
        <div className="w-[543px] h-[59px] border rounded-[15px] border-[#E2E2E2] mx-4 mt-8 flex justify-between items-center px-8">
          <p className="text-xl font-semibold text-[#000000] font-nunito">
            Appointment Fee
          </p>
          <p className="text-[#3A643B] text-xl font-semibold font-inter">
            ₹699.00
          </p>
        </div>
        <div className=" flex my-10 items-center gap-5 justify-center">
          <p className="font-bold text-xl leading-[28px] font-nunito">
            Select Your Mode of Session
          </p>
          <hr class="w-[232px]    font-bold border border-[#D4D4D4] "></hr>
        </div>
        <div className=" mx-4 gap-[22px] flex ">
          <button className="w-[158px] h-[78px] border rounded-[10px] border-[#E5E5E5] flex flex-col items-center justify-center">
            <p className="text-[#1F1F1F] text-[16px] font-medium">In-Clinic</p>
            <p className="text-[#606060] text-[16px] font-nunito">45 Mins</p>
          </button>
          <button className="w-[172px] h-[78px] border rounded-[10px] border-[#3A643B85] flex flex-col items-center justify-center bg-[#F2FBF2]">
            <p className="text-[#3A643B] text-[16px] font-semibold gap-2 items-center flex">
              Video
              <FaCheckCircle size={18} className="text-[#3A643B]" />{" "}
            </p>
            <p className="text-[#606060] text-[16px] font-nunito">45 Mins</p>
          </button>
          <button className="w-[166px] h-[78px] border rounded-[10px] border-[#E5E5E5] flex flex-col items-center justify-center">
            <p className="text-[#1F1F1F] text-[16px] font-medium">Chat</p>
            <p className="text-[#606060] text-[16px] font-nunito">10 Mins</p>
          </button>
        </div>

        <div className="w-[530px] h-[552.61px] mt-8 mx-7 flex-col flex  ">
          <div className=" flex mt-6 items-center  justify-center px-1">
            <p className="font-bold text-xl leading-[28px] mr-8 font-nunito">
              Pick time Slot
            </p>
            <hr class="w-[291px]    font-bold border border-[#D4D4D4] "></hr>
            <button className="w-[44px] h-[43px] border-[0.5px] border-[#8A8A8A] rounded-full flex items-center justify-center ml-2">
              <FiCalendar size={20} />
            </button>
          </div>
          <div className="w-[530px] h-[123px] border border-[#E1E1E1] rounded-[21px]  py-8 mt-5 px-8  items-center  justify-center flex gap-[18px]">
            <div>
              <button className="w-[20px] h-[20px] border-2 border-[#808080] rounded-full flex items-center justify-center">
                <MdKeyboardArrowLeft size={20} className="text-[#808080]" />
              </button>
            </div>
            <div className="w-[389px] h-[80px] flex gap-[10px] ">
              <button className="w-[123px] h-[80px] border rounded-[10px] border-[#3A643B85] flex flex-col items-center justify-center bg-[#F2FBF2]">
                <p className="text-[#3A643B] text-[16px] font-semibold gap-2 font-inter ">
                  Mon, 10 Oct
                </p>
                <p className="text-[#606060] text-[16px] font-nunito">
                  10 Slots
                </p>
              </button>
              <button className="w-[123px] h-[80px] border rounded-[10px] border-[#E5E5E5] flex flex-col items-center justify-center">
                <p className="text-[#1F1F1F] text-[16px] font-inter">
                  {" "}
                  Tue, 11 Oct
                </p>
                <p className="font-bold text-[16px] text-[#D5512E] font-nunito">
                  02 Slots
                </p>
              </button>
              <button className="w-[123px] h-[80px] border rounded-[10px] border-[#E5E5E5] flex flex-col items-center justify-center">
                <p className="text-[#1F1F1F] text-[16px] font-inter">
                  {" "}
                  Wed, 12 Oct
                </p>
                <p className="font-bold text-[16px] text-[#F1B93A] font-nunito">
                  05 Slots
                </p>
              </button>
            </div>
            <div>
              <button className="w-[20px] h-[20px] border-2 border-[#808080] rounded-full flex items-center justify-center">
                <MdChevronRight size={20} className="text-[#808080]" />
              </button>
            </div>
          </div>

          <div className="w-[508px] h-[181.04px] mt-8 mx-2 ">
            <div className="text-lg font-bold px-4 mb-[13px] font-nunito">
              Morning
            </div>
            <div className="flex gap-[13px] flex-col font-inter">
              <div className="gap-[8px] flex ">
                <button className="w-[106px] h-[67px] rounded-[22px] border border-[#EBEBEB] text-[15px] text-[#131313]">
                  09:00 AM
                </button>
                <button className="w-[105px] h-[67px] rounded-[22px] border border-[#EBEBEB] text-[15px] text-[#131313]">
                  09:30 AM
                </button>
                <button className="w-[106px] h-[67px] rounded-[22px] border border-[#EBEBEB] text-[15px] text-[#131313]">
                  10:00 AM
                </button>
                <button className="w-[105px] h-[67px] rounded-[22px] border border-[#EBEBEB] text-[15px] text-[#131313]">
                  10:15 AM
                </button>
              </div>
              <div className="flex gap-2">
                <button className="w-[106px] h-[67px] rounded-[22px] border border-[#EBEBEB] text-[15px] text-[#131313]">
                  10:45 AM
                </button>
                <button className="w-[92px] h-[67.04px] rounded-[22px] border border-[#EBEBEB] text-[14px]  bg-[#3A643B] text-white">
                  11:00 AM
                </button>
              </div>
            </div>
          </div>
          <div className="w-[508px] h-[181.04px] mt-8 mx-2 ">
            <div className="text-lg font-bold px-4 mb-[13px] font-nunito">
              Evening
            </div>
            <div className="flex gap-[13px] flex-col font-inter">
              <div className="gap-[8px] flex">
                <button className="w-[104px] h-[67px] rounded-[22px] border border-[#EBEBEB] text-[15px] text-[#131313]">
                  04:00 PM
                </button>
                <button className="w-[104px] h-[67px] rounded-[22px] border border-[#EBEBEB] text-[15px] text-[#131313]">
                  04:15 PM
                </button>
                <button className="w-[104px] h-[67px] rounded-[22px] border border-[#EBEBEB] text-[15px] text-[#131313]">
                  04:30 PM
                </button>
                <button className="w-[103px] h-[67px] rounded-[22px] border border-[#EBEBEB] text-[15px] text-[#131313]">
                  04:45 PM
                </button>
              </div>
              <div className="flex gap-2">
                <button className="w-[104px] h-[67px] rounded-[22px] border border-[#EBEBEB] text-[15px] text-[#131313]">
                  05:15 PM
                </button>
              </div>
            </div>
          </div>
          <div className="my-10 flex items-center justify-center">
            <button className="w-[476.37px] h-[59.73px] text-[#FFFFFF] text-xl font-medium items-center justify-center bg-[#3A643B] rounded-[8px] font-inter">
              Make an Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
