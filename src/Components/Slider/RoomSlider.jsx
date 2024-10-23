import { Carousel } from "@material-tailwind/react";
import img1 from "../../assets/Rectangle 24.png";
import img2 from "../../assets/Rectangle 25.png";
import img3 from "../../assets/Rectangle 26.png";
import { BytesizeArrowRight, EpArrowLeft, EpArrowRight } from "../Icons";
export function RoomSlider() {
  return (
    <>
      <div className="flex gap-x-3 justify-between h-full w-full relative overflow-hidden">
        <div className="w-[48%] bg-green-900 relative">
          <div>
            <img
              loading="lazy"
              src={img1}
              alt="rectangle 24 image"
              className="h-full w-full object-cover relative"
            />
          </div>
          <div className="flex justify-center items-center w-[217px] h-[130px]  absolute bottom-4 left-4 z-20 bg-[rgba(255,255,255,0.72)]">
            <div className=" ">
              <div className="flex gap-x-1 items-center text-[#616161]">
                <p>01</p>
                <p className="line-through w-[27px] h-[1px] bg-[#616161]"></p>
                <p>Bed Room</p>
              </div>
              <p className="font-semibold text-[28px] text-[#3A3A3A]">
                Inner Peace
              </p>
            </div>
            <div className="p-[12px] flex items-center justify-center bg-[--gold] text-white absolute right-0 translate-x-full bottom-0 ">
              <BytesizeArrowRight />
            </div>
          </div>
        </div>
        <div className=" w-[48%] relative flex flex-col justify-between">
          <div className="h-[80%]">
            <img
              loading="lazy"
              src={img2}
              alt="rectangle 24 image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="h-[20%] w-full flex items-center">
            <div className=" h-[27px] w-[140px] flex items-center justify-between ml-[7.25px]">
              <button className="bg-[--gold] rounded-full  w-[11px] h-[11px] relative flex justify-center items-center before:p-[13.5px] before:border before:border-[--gold] before:rounded-full"></button>
              <button className="bg-[#D8D8D8] rounded-full  w-[11px] h-[11px] relative flex justify-center items-center before:p-[13.5px] before:border before:border-transparent before:rounded-full"></button>
              <button className="bg-[#D8D8D8] rounded-full  w-[11px] h-[11px] relative flex justify-center items-center before:p-[13.5px] before:border before:border-transparent before:rounded-full"></button>
              <button className="bg-[#D8D8D8] rounded-full  w-[11px] h-[11px] relative flex justify-center items-center before:p-[13.5px] before:border before:border-transparent before:rounded-full"></button>
            </div>
          </div>
        </div>
        <div className="bg-blue-900 flex-gorw  h-[90%]">
          <img
            loading="lazy"
            src={img3}
            alt="rectangle 24 image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute w-full py-4 pl-2 pr-9 top-1/2 -translate-y-1/2  left-0 flex justify-between text-[--gold]">
          <button className="p-[12px] bg-white rounded-full  ">
            <EpArrowLeft />
          </button>
          <button className="p-[12px] bg-white rounded-full  ">
            <EpArrowRight />
          </button>
        </div>
      </div>
    </>
  );
}
