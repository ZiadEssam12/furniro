import React from "react";
import bgImage from "../../assets/Rectangle 1 blurred.png";
import { DashiconsArrowDownAlt2 } from "../Icons";
export default function SectionHeader({ title }) {
  return (
    <>
      <div
        className="h-[316px] mt-[100px] flex flex-col gap-y-3 justify-center items-center"
        style={{
          backgroundImage: `url("${bgImage}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h3 className="font-medium text-5xl">{title}</h3>
        <div className="flex justify-between">
          <a className="font-medium" href="">
            Home
          </a>
          <p>
            <DashiconsArrowDownAlt2 />
          </p>
          <p className="font-light">{title}</p>
        </div>
      </div>
    </>
  );
}