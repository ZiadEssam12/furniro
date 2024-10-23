import React from "react";
import bgImage from "../../assets/Images.png";
export default function Share() {
  return (
    <div className="text-center my-10">
      <p className="text-[20px] font-semibold text-[#616161]">
        Share your setup with
      </p>
      <h1 className="font-bold text-[40px] text-[#3A3A3A]">
        #FuniroFurniture{" "}
      </h1>

      <img
        loading="lazy"
        src={bgImage}
        alt=""
        className="-top-0 md:-top-8 relative w-full select-none	"
      />
    </div>
  );
}
