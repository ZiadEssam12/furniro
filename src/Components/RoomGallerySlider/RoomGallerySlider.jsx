import React from "react";
import { Button } from "../ReusableComponenets/ReusableComponenets";
import { RoomSlider } from "../Slider/RoomSlider";

export default function RoomGallerySlider() {
  return (
    <>
      {/* escape container kevin powel https://www.youtube.com/watch?v=Ivk8Blw2VTI */}
      {/* https://github.com/LucidNinja/tailwind-container-break-out */}
      <div className="bg-[--floral-white] w-screen">
        <div className="container flex justify-center mx-auto h-fit w-full  md:h-[80vh] py-8 ">
          <div className=" lg:w-[35%] md:w-[48%] self-center justify-self-center  px-10 md:px-0">
            <h4 className="font-bold text-[30px] leading-[45px] text-[#3A3A3A] md:text-[40px]">
              50+ Beautiful rooms inspiration
            </h4>
            <div className="my-4 font-medium">
              Our designer already made a lot of beautiful
              <p className="hidden md:inline">
                <br />
              </p>{" "}
              prototype of rooms that inspire you
            </div>

            <Button bgColor="[--gold]" textColor="white" mt="0">
              Explore More
            </Button>
          </div>
          <div className="mr-break-out flex-grow hidden md:block">
            <RoomSlider />
          </div>
        </div>
      </div>
    </>
  );
}
