import React from "react";
import dining from "../../assets/dining.png";
import bedroom from "../../assets/bedroom.png";
import living from "../../assets/living.png";
export default function CategoryBrowser() {
  return (
    <div className="continer max-w-6xl mx-auto my-10">
      <div className="flex flex-col items-center mb-10">
        <h2 className="font-bold text-2xl"> Browse The Range</h2>
        <p className="text-[#666666] text-base md:text-[20px] font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="px-12 md:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-5 place-items-center">
        <div className="">
          <img src={dining} alt="dining photo" className="rounded-[10px]" />
          <p className="mt-4 text-center text-2xl font-semibold">Dining</p>
        </div>
        <div className="">
          <img src={living} alt="dining photo" className="rounded-[10px]" />
          <p className="mt-4 text-center text-2xl font-semibold">Living</p>
        </div>
        <div className="">
          <img src={bedroom} alt="dining photo" className="rounded-[10px]" />
          <p className="mt-4 text-center text-2xl font-semibold">Bedroom</p>
        </div>
      </div>
    </div>
  );
}
