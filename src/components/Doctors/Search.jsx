import { MdLocationOn } from "react-icons/md";
import { IoChevronDown } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";

export default function Search({
  title = "Find Expert Doctors For An In-Clinic Session Here",
}) {
  return (
    <div className="bg-[#EAF2EA] flex relative justify-center">
      <div className="absolute right-[115px] top-0">
        <div className="bg-[#CFEBCF80] w-[184px] h-[92px] rounded-b-full"></div>
      </div>
      <div className="absolute left-[115px] top-0">
        <div className="bg-[#CFEBCF80] w-[184px] h-[92px] rounded-b-full"></div>
      </div>

      <div className="flex items-center justify-center max-w-4xl text-5xl my-14 flex-col">
        <h1 className="font-bold text-4xl">{title}</h1>
        <div className="mt-8 gap-2 flex">
          <div className="w-[200px] h-[54px] rounded-[8px] border bg-white items-center flex px-3 justify-between py-1">
            <MdLocationOn size={25} />
            <p className="text-[#767676] text-base leading-6">
              Select Location
            </p>
            <IoChevronDown size={25} />
          </div>

          <div className="w-[474.92px] h-[54px] rounded-[8px] border bg-white flex items-center px-4">
            <input
              type="text"
              placeholder="eg. Doctors, Specialization, Clinic name"
              className="w-[420px] h-[54px] border-y bg-white placeholder:text-base flex justify-center items-center text-base placeholder:font-inter"
            />
            <FaArrowRight size={25} />
          </div>
        </div>
      </div>

      <div className="absolute left-[234px] top-[113px]">
        <div className="bg-[#CFEBCF80] w-[184px] h-[108px] rounded-t-full"></div>
      </div>
      <div className="absolute right-[234px] top-[113px]">
        <div className="bg-[#CFEBCF80] w-[184px] h-[108px] rounded-t-full"></div>
      </div>
    </div>
  );
}
