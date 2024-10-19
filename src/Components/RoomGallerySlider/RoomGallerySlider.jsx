import React from "react";
import { Button } from "../ReusableComponenets/ReusableComponenets";

export default function RoomGallerySlider() {
  return (
    <>
      {/* escape container kevin powel https://www.youtube.com/watch?v=Ivk8Blw2VTI */}
      {/* https://github.com/LucidNinja/tailwind-container-break-out */}
      <div className="bg-[--floral-white]">
        <div className="container grid grid-cols-1 md:grid-cols-3 mx-auto h-[70vh]">
          <div className="col-span-1 place-self-center">
            <h4 className="font-bold text-[40px] leading-[45px] text-[#3A3A3A]">
              50+ Beautiful rooms inspiration
            </h4>
            <p className="my-4">
              Our designer already made a lot of beautiful <br /> prototype of
              rooms that inspire you
            </p>

            <Button bgColor="[--gold]" textColor="white" mt="0">
              Explore More
            </Button>
          </div>
          <div className="mr-break-out col-span-2 hidden md:block ">
            <p>
              This div will expand beyond the container on the right hand side.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
