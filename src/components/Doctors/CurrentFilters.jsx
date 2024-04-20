import { RxCross2 } from "react-icons/rx";

export default function CurrentFilter() {
  return (
    <div className="flex justify-center w-full">
      <div className="h-[45px] px-4 max-w-[1220px]  flex gap-[16px] justify-end w-full">
        <button className="w-[139px] rounded-[31px] bg-[#EAF2EA] gap-[10px] flex items-center h-[45px] justify-center">
          <p className="text-base">Hair Care</p>
          <RxCross2 size={20} className="text-[#838383]" />
        </button>
        <button className="w-[126px] rounded-[31px] bg-[#EAF2EA] gap-[10px] flex items-center h-[45px] justify-center">
          <p className="text-base">Female</p>
          <RxCross2 size={20} className="text-[#838383]" />
        </button>
        <button className="w-[153.81px] rounded-[31px] bg-[#EAF2EA] gap-[10px] flex items-center h-[45px] justify-center">
          <p className="text-base">Rs.0-Rs.500</p>
          <RxCross2 size={20} className="text-[#838383]" />
        </button>
        <button className="w-[104px] rounded-[31px] bg-[#EAF2EA] gap-[10px] flex items-center h-[45px] justify-center">
          <p className="text-base">Hindi</p>
          <RxCross2 size={20} className="text-[#838383]" />
        </button>
      </div>
    </div>
  );
}
