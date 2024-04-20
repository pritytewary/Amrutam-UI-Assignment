import profile from "../assets/profile.png";
import background from "../assets/background.png";
import { IoStar } from "react-icons/io5";
import { TbDiscountCheckFilled } from "react-icons/tb";

export default function Profile() {
  return (
    <div className="w-full max-w-[1220px] h-80 relative mt-14">
      <div
        className="bg-cover bg-center w-full h-full rounded-xl"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex absolute bottom-0 w-full bg-[#FFFBF2] h-40 px-8 py-4 border border-[#DCDCDC]">
          <div
            className="rounded-full -mt-14"
            style={{
              backgroundImage: `url(${profile})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "159px",
              height: "159px",
              boxShadow: "0 0 0 4px white",
            }}
          ></div>

          <div className=" ">
            <div className=" flex  gap-24 items-center">
              <div className="ml-6  mt-3">
                <div className="flex gap-2 flex-col ">
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-semibold font-poppins ">
                      Dr. Bruce Willis{" "}
                    </h1>
                    <div>
                      <TbDiscountCheckFilled
                        className="text-blue-800"
                        size={25}
                      />
                    </div>
                  </div>
                </div>
                <p className="text-green-800 font-medium  text-xl font-poppins  mb-2                                  ">
                  Gynecologist
                </p>
                <div className="flex  items-center  gap-2 font-semibold text-[15px] text-[#626262] font-nunito">
                  4.2
                  <div className="flex gap-2 text-[#F79624] items-center">
                    <IoStar size={16} />
                    <IoStar size={16} />
                    <IoStar size={16} />
                    <IoStar size={16} />
                  </div>
                </div>
              </div>
              <div className="flex gap-8 mt-4 items-center font-poppins">
                <div className="flex flex-col gap-2 items-center">
                  <p className="text-green-900 font-medium">Followers</p>
                  <p className="font-bold text-xl">815k</p>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <p className="text-green-900 font-medium">Following</p>
                  <p className="font-bold text-xl">18k</p>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <p className="text-green-900 font-medium">Posts</p>
                  <p className="font-bold text-xl">250</p>
                </div>
              </div>
              <div className="">
                <button className="text-white bg-green-900 text-2xl px-8 rounded-lg py-3 font-inter">
                  Book an Appoinment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
