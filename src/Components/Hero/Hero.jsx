import React from "react";
import image from "../../assets/scandinavian-interior-mockup-wall-decal-background 1.png";
// import styles from "./Hero.module.css";
import Header from "../Header/Header";
export default function Hero() {
  return (
    <div
      className="w-full h-screen relative" // No need for CSS Modules class
      style={{
        backgroundImage: `url("${image}")`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
      }}
    >
      <Header />

      <div className="bg-[--light-pink] w-4/5  md:w-[643px] h-[443px] rounded-[10px] absolute right-1/2 translate-x-1/2 md:translate-x-0 md:right-10 bottom-32 px-10 pt-20">
        <div className="md:w-[561px] md:h-[344px]">
          <p className="text-black font-semibold tracking-[3px]">New Arrival</p>
          <h1 className="text-[--gold] text-[2.6rem] leading-[50px] md:text-[52px] font-bold md:leading-[65px]">
            Discover Our{" "}
            <span className="hidden md:inline">
              <br />
            </span>
            New Collection
          </h1>
          <p className="text-[#333333] font-medium text-[18px] pt-4 pb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            {"  "}
            <span className="hidden md:inline">
              <br />
            </span>
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="bg-[--gold] py-[25px] px-[72px] text-white font-bold">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
}
