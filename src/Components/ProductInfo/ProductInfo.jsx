import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AkarIconsFacebookFill,
  AkarIconsLinkedinBoxFill,
  AntDesignTwitterCircleFilled,
  DashiconsArrowDownAlt2,
} from "../Icons";
import { Radio, RadioGroup } from "@headlessui/react";

import img1 from "../../assets/Outdoor sofa set 2.png";
import img2 from "../../assets/Outdoor sofa set_2 1.png";
import img3 from "../../assets/Stuart sofa 1.png";
import img4 from "../../assets/Maya sofa three seater (1) 1.png";
import asgardSofa from "../../assets/Asgaard sofa 3.png";

const product = {
  sizes: [
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "XS", inStock: true },
  ],
  colors: [
    { value: "#816DFA", inStock: true },
    { value: "#000000", inStock: true },
    { value: "#B88E2F", inStock: true },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductInfo() {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [productQuantity, setProductQuantity] = useState(1);
  return (
    <>
      <div id="productInfo">
        <div className="h-[100px] bg-[#F9F1E7] mt-[100px] mb-8 flex items-center px-8 md:px-0">
          <div className="container mx-auto flex items-center h-[37px] gap-x-8">
            <Link to="/" className="text-[#9F9F9F]">
              Home
            </Link>
            <p>
              <DashiconsArrowDownAlt2 />
            </p>
            <Link to="/shop" className="text-[#9F9F9F]">
              Shop
            </Link>
            <p>
              <DashiconsArrowDownAlt2 />
            </p>
            <p className="h-full bg-[#9F9F9F] w-[2px]"></p>
            <p>Asgaard sofa</p>
          </div>
        </div>

        <div className="container flex flex-col md:flex-row gap-x-10 gap-y-8 w-full px-8 md:px-0">
          {/* product images container */}
          {/* left side */}
          <div className=" w-full flex-col-reverse gap-y-8 md:flex-row md:w-1/2 flex gap-x-8">
            {/* column images  */}
            <div className="flex flex-row md:flex-col justify-between md:justify-normal  gap-y-6">
              <div className="h-[80px] w-[76px] bg-[#F9F1E7] rounded-[10px] flex items-center">
                <img src={img1} alt="outdoor sofa" className="w-full" />
              </div>
              <div className="h-[80px] w-[76px] bg-[#F9F1E7] rounded-[10px] ">
                <img src={img2} alt="outdoor sofa" className="w-full" />
              </div>
              <div className="h-[80px] w-[76px] bg-[#F9F1E7] rounded-[10px] ">
                <img src={img3} alt="outdoor sofa" className="w-full" />
              </div>
              <div className="h-[80px] w-[76px] bg-[#F9F1E7] rounded-[10px] flex items-center">
                <img src={img4} alt="outdoor sofa" className="w-full" />
              </div>
            </div>
            {/* main image prview */}
            <div className="h-[500px] bg-[#F9F1E7] flex items-center rounded-[10px]">
              <img src={asgardSofa} alt="asgard sofa main image" />
            </div>
          </div>

          {/* product info */}
          {/* right side */}
          <div className="w-full md:w-1/2">
            {/* top part of the right side */}
            <div className="h-[500px]">
              {/* product title */}
              <h4 className="text-[42px]">Asgaard sofa</h4>
              {/* product price */}
              <span className="text-2xl font-medium text-[#9F9F9F]">
                Rs. 250,000.00
              </span>
              {/* product description */}
              <p className="text-[13px] text-black mt-4">
                Setting the bar as one of the loudest speakers in its class, the
                Kilburn is a compact, stout-hearted hero with a well-balanced
                audio which boasts a clear midrange and extended highs for a
                sound.
              </p>

              {/* Product size */}
              <div className="h-[63px] w-[123px]  mt-8 mb-2">
                <p className="text-[14px] text-[#9F9F9F]">Size</p>
                <fieldset aria-label="Choose a size" className="mt-3 ">
                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="flex justify-between w-full"
                  >
                    {product.sizes.map((size) => (
                      <Radio
                        key={size.name}
                        value={size}
                        disabled={!size.inStock}
                        className={classNames(
                          size.inStock
                            ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                            : "cursor-not-allowed bg-gray-50 text-gray-200",
                          "group relative flex items-center justify-center rounded-md border size-[30px]    text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500 overflow-hidden"
                        )}
                      >
                        <span className="group-data-[checked]:bg-[--gold] group-data-[checked]:text-white w-full h-full flex items-center justify-center">
                          {size.name}
                        </span>
                        {/* check if the size is in stock or not */}
                        {size.inStock ? (
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[focus]:border "
                          />
                        ) : (
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                          >
                            <svg
                              stroke="currentColor"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                              className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                            >
                              <line
                                x1={0}
                                x2={100}
                                y1={100}
                                y2={0}
                                vectorEffect="non-scaling-stroke"
                              />
                            </svg>
                          </span>
                        )}
                      </Radio>
                    ))}
                  </RadioGroup>
                </fieldset>
              </div>
              {/* product colors */}
              <div className="h-[63px] w-[123px] my-4">
                <p className="text-[14px] text-[#9F9F9F]">Color</p>
                <fieldset aria-label="Choose a Color" className="mt-3 ">
                  <RadioGroup
                    value={selectedColor}
                    onChange={setSelectedColor}
                    className="flex justify-between w-full"
                  >
                    {product.colors.map((color) => (
                      <Radio
                        key={color.value}
                        value={color}
                        disabled={!color.inStock}
                        className={classNames(
                          color.inStock
                            ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                            : "cursor-not-allowed bg-gray-50 text-gray-200",
                          `bg-[${color.value}]`,
                          "group relative flex items-center justify-center border size-[30px] rounded-full  text-sm font-medium uppercase focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500 overflow-hidden"
                        )}
                      >
                        <span
                          className={`group-data-[checked]:border-2 border-red-900 rounded-full w-full h-full flex items-center justify-center 
                        `}
                        ></span>
                        {/* check if the color is in stock or not */}
                        {color.inStock ? (
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-px  border-2 border-transparent group-data-[focus]:border"
                          />
                        ) : (
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                          >
                            <svg
                              stroke="currentColor"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                              className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                            >
                              <line
                                x1={0}
                                x2={100}
                                y1={100}
                                y2={0}
                                vectorEffect="non-scaling-stroke"
                              />
                            </svg>
                          </span>
                        )}
                      </Radio>
                    ))}
                  </RadioGroup>
                </fieldset>
              </div>

              {/* add to cart button  and compare button*/}
              <div className="flex gap-x-6 h-[64px]">
                {/* product quantity */}
                <div className="flex justify-between items-center w-[123px] h-full border-[1px] border-[#9F9F9F]  rounded-[10px]">
                  <button
                    className="h-full px-3 "
                    onClick={() => {
                      setProductQuantity(productQuantity + 1);
                    }}
                  >
                    +
                  </button>
                  <p>{productQuantity}</p>
                  <button
                    className="h-full  px-3"
                    onClick={() => {
                      if (productQuantity > 1) {
                        setProductQuantity(productQuantity - 1);
                      }
                    }}
                  >
                    -
                  </button>
                </div>

                {/* add to cart button */}
                <button className="w-[215px] h-full flex items-center justify-center border-[1px] border-black rounded-[10px] text-xl">
                  Add To Cart
                </button>
                {/* compare button */}
                <button className="w-[215px] h-full flex items-center justify-center border-[1px] border-black rounded-[10px] text-xl">
                  + Compare
                </button>
              </div>
            </div>

            {/* bottom part of the right side */}
            <div className="border-t-[1px] border-[--silver] text-[--silver] mb-10 py-8 flex flex-col gap-y-2">
              <div className="flex ">
                <p className="w-[80px]">SKU</p>
                <p className="mr-1">:</p>
                <p>SS001</p>
              </div>
              <div className="flex ">
                <p className="w-[80px]">Category</p>
                <p className="mr-1">:</p>
                <p>Sofas</p>
              </div>
              <div className="flex ">
                <p className="w-[80px]">Tags</p>
                <p className="mr-1">:</p>
                <p>Sofa, Chair, Home, Shop</p>
              </div>
              <div className="flex ">
                <p className="w-[80px]">Share</p>
                <p className="mr-1">:</p>
                <div className="flex gap-x-2 text-black">
                  <Link to={"/"}>
                    <AkarIconsFacebookFill />
                  </Link>
                  <Link to={"/"}>
                    <AkarIconsLinkedinBoxFill />
                  </Link>
                  <Link to={"/"}>
                    <AntDesignTwitterCircleFilled />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
