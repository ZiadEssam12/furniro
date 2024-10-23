import React, { useContext } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import { BiViewList, CiGridBigRound, SystemUiconsFiltering } from "../Icons";
import { ProductsContext } from "../Context/ProductsContext";
import ProductListing from "../ProductListing/ProductListing";

export default function Shop() {
  const { products } = useContext(ProductsContext);
  return (
    <>
      <SectionHeader title="Shop" />
      <div>
        <div className="flex justify-center items-center py-6 md:py-0 bg-[--linen] ">
          <div className="container mx-auto ">
            <div className=" flex flex-col md:flex-row justify-between items-center gap-y-6  h-fit  md:h-[100px] ">
              {" "}
              {/* Right Div */}
              <div className="flex flex-col md:flex-row items-center gap-x-10 gap-y-4">
                <div className="flex w-full  gap-x-4 md:w-fit justify-between">
                  <p>
                    <SystemUiconsFiltering />
                  </p>
                  <p className="text-xl">Filter</p>

                  <div>
                    <CiGridBigRound />
                  </div>
                  <div>
                    <BiViewList />
                  </div>
                </div>

                <div className="border-l-[3px] border-[#9F9F9F] w-[237px] text-end">
                  <p>Showing 1–16 of 32 results</p>
                </div>
              </div>
              {/* Left Div */}
              <div className="flex gap-x-4">
                <div className="flex justify-center items-center gap-x-4">
                  <span className="text-xl">Show</span>

                  {/* size makes width and height the same */}
                  <p className="size-[55px] bg-white flex items-center justify-center text-xl">
                    16
                  </p>
                </div>
                <div className="flex justify-center items-center gap-x-4">
                  <span className="text-xl">Short by</span>

                  {/* size makes width and height the same */}
                  <p className="w-[188px] h-[55px] bg-white flex items-center pl-6 text-xl">
                    Default
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-16 container mx-auto flex flex-col gap-y-10 justify-center items-center">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 w-3/4 md:w-full mx-auto">
            {products.map((product) => (
              <ProductListing key={product.id} product={product} />
            ))}
            {products.map((product) => (
              <ProductListing key={product.id} product={product} />
            ))}
          </div>
          <div className="flex justify-between w-[329px] text-xl text-black">
            <button className="bg-[--gold] size-[60px] rounded-[10px] text-white">
              1
            </button>
            <button className="bg-[--linen] rounded-[10px] size-[60px]">
              2
            </button>
            <button className="bg-[--linen] rounded-[10px] size-[60px]">
              3
            </button>
            <button className="bg-[--linen] rounded-[10px] h-[60px] w-[98px]">
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
