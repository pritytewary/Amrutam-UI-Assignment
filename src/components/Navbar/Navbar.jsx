import image from "../../../public/image.png";

export default function Navbar() {
  return (
    <div className="">
      <div className="bg-[#FFF7E2] h-[94px] items-center flex px-28 w-full  justify-between">
        <div className="w-[669px] flex items-center gap-20">
          <img src={image} alt="" className="h-[49px] w-[259px]" />
          <div className="flex  gap-10 text-xl text-[#474747]">
            <a href="">Home</a>
            <a href="">Find Doctors</a>
            <a href="">About Us</a>
          </div>
        </div>

        <div className="gap-4 flex">
          <button className=" border border-[#3A643B] px-5 py-2 rounded-xl text-[#3A643B] text-xl items-center flex font-medium">
            Login
          </button>
          <button className=" bg-[#3A643B] px-5 py-2 rounded-xl text-white text-xl items-center flex font-medium">
            Sign-up
          </button>
        </div>
      </div>
    </div>
  );
}
