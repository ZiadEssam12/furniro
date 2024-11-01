import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import { Link } from "react-router-dom";
import img1 from "../../assets/Asgaard sofa 3.png";
import { DashiconsArrowDownAlt2 } from "../Icons";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Rating } from "@mui/material";
export default function Comparison() {
  return (
    <>
      <div id="productComparison">
        <div className="hidden xl:block">
          <SectionHeader title="Product Comparison" />
        </div>

        <div className="container my-12 hidden xl:block">
          <table class="table-fixed border-collapse w-full">
            <tbody>
              {/* first row - products row */}
              <tr>
                <td className="py-10">
                  <div className="px-8">
                    <p className="flex justify-center font-medium text-[28px] mb-8 ">
                      Go to Product page for more Products
                    </p>
                    <Link
                      to="/shop"
                      className="font-medium text-[20px] relative before:absolute before:h-[1px] before:w-full before:bg-black before:bottom-0 before:left-0 before:transform before:translate-y-1/2 before:transition-all before:duration-300 before:ease-in-out hover:before:w-0 hover:before:bg-[#00000000] hover:before:transition-all hover:before:duration-300 hover:before:ease-in-out"
                    >
                      View More
                    </Link>
                  </div>
                </td>
                <td className="py-10 px-4">
                  <div className="flex flex-col gap-y-2">
                    <figure className="bg-[#F9F1E7] w-[280px] h-[177px] rounded-[10px] flex items-center justify-center">
                      <img src={img1} alt="" className="w-[239px] h-[142px]" />
                    </figure>
                    <h4 className="font-medium text-2xl">Asgaard Sofa</h4>
                    <p className="font-medium text-lg">Rs. 250,000.00</p>
                    <div className="flex items-center gap-x-2">
                      <span>4.7</span>
                      {/* stars */}
                      <Rating
                        name="half-rating-read"
                        defaultValue={4.7}
                        precision={0.5}
                        readOnly
                      />
                      {/* rating */}
                      <p className="px-1 border-l-[2px] border-[--silver]">
                        204 Review
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-10 px-4">
                  <div className="flex flex-col gap-y-2">
                    <figure className="bg-[#F9F1E7] w-[280px] h-[177px] rounded-[10px] flex items-center justify-center">
                      <img src={img1} alt="" className="w-[239px] h-[142px]" />
                    </figure>
                    <h4 className="font-medium text-2xl">Asgaard Sofa</h4>
                    <p className="font-medium text-lg">Rs. 250,000.00</p>
                    <div className="flex items-center gap-x-2">
                      <span>4.7</span>
                      {/* stars */}
                      <Rating
                        name="half-rating-read"
                        defaultValue={4.7}
                        precision={0.5}
                        readOnly
                      />
                      {/* rating */}
                      <p className="px-1 border-l-[2px] border-[--silver]">
                        204 Review
                      </p>
                    </div>
                  </div>
                </td>
                <td className="w-[344px] px-8">
                  <div className="flex w-full   h-full">
                    <div className="-translate-y-3/4">
                      <h5 className="font-semibold text-2xl ">Add A Product</h5>
                      <button className="px-4 rounded-[6px] w-[242px] h-[39px] bg-[#B88E2F] mt-3 text-start text-white flex items-center justify-between">
                        <p>Choose a Product</p>
                        <p className="rotate-90">
                          <DashiconsArrowDownAlt2 />
                        </p>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>

              {/* end first row */}

              {/* second row */}
              <tr className="border-t-[1px]  border-[#E8E8E8]">
                <td>
                  <p className="pl-6 flex  font-medium text-[28px] py-6">
                    General
                  </p>
                </td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]"></td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]"></td>
                <td></td>
              </tr>
              {/* end second row */}

              {/* second row */}
              <tr className=" border-[#E8E8E8]">
                <td className="">
                  <p className="flex pl-6 text-xl pb-6">Sales Package</p>
                </td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]">
                  <p className="flex pl-6">1 sectional sofa</p>
                </td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]">
                  <p className="flex pl-6">1 Three Seater, 2 Single Seater</p>
                </td>
                <td></td>
              </tr>
              {/* end second row */}

              {/* second row */}
              <tr className=" border-[#E8E8E8]">
                <td className="">
                  <p className="flex pl-6 text-xl pb-6">Model Number</p>
                </td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]">
                  <p className="flex pl-6">TFCBLIGRBL6SRHS</p>
                </td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]">
                  <p className="flex pl-6">DTUBLIGRBL568</p>
                </td>
                <td></td>
              </tr>
              {/* end second row */}

              {/* second row */}
              <tr className=" border-[#E8E8E8]">
                <td className="">
                  <p className="flex pl-6 text-xl pb-6">Secondary Material</p>
                </td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]">
                  <p className="flex pl-6">Solid Wood</p>
                </td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]">
                  <p className="flex pl-6">Solid Wood</p>
                </td>
                <td></td>
              </tr>
              {/* end second row */}

              {/* second row */}
              <tr className=" border-[#E8E8E8]">
                <td className="">
                  <p className="flex pl-6 text-xl pb-6">Configuration</p>
                </td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]">
                  <p className="flex pl-6">L-shaped</p>
                </td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]">
                  <p className="flex pl-6">L-shaped</p>
                </td>
                <td></td>
              </tr>
              {/* end second row */}

              {/* second row */}
              <tr className=" border-[#E8E8E8]">
                <td className="">
                  <p className="flex pl-6 text-xl pb-6">Upholstery Material</p>
                </td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]">
                  <p className="flex pl-6">Fabric + Cotton</p>
                </td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]">
                  <p className="flex pl-6">Fabric + Cotton</p>
                </td>
                <td></td>
              </tr>
              {/* end second row */}

              {/* second row */}
              <tr className=" border-[#E8E8E8]">
                <td className="">
                  <p className="flex pl-6 text-xl pb-6">Upholstery Color</p>
                </td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]">
                  <p className="flex pl-6">Bright Grey & Lion</p>
                </td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]">
                  <p className="flex pl-6">Bright Grey & Lion</p>
                </td>
                <td></td>
              </tr>
              {/* end second row */}

              {/* second row */}
              <tr className="">
                <td>
                  <p className="pl-6 flex  font-medium text-[28px] py-6">
                    Product
                  </p>
                </td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]"></td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]"></td>
                <td></td>
              </tr>
              {/* end second row */}

              {/* second row */}
              <tr className=" border-[#E8E8E8]">
                <td className="">
                  <p className="flex pl-6 text-xl pb-6">Filling Material</p>
                </td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]">
                  <p className="flex pl-6">Foam</p>
                </td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]">
                  <p className="flex pl-6">Matte</p>
                </td>
                <td></td>
              </tr>
              {/* end second row */}

              {/* second row */}
              <tr className=" border-[#E8E8E8]">
                <td className="">
                  <p className="flex pl-6 text-xl pb-6">Finish Type</p>
                </td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]">
                  <p className="flex pl-6">Bright Grey & Lion</p>
                </td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]">
                  <p className="flex pl-6">Bright Grey & Lion</p>
                </td>
                <td></td>
              </tr>
              {/* end second row */}

              {/* second row */}
              <tr className=" border-[#E8E8E8]">
                <td className="">
                  <p className="flex pl-6 text-xl pb-6">Adjustable Headrest</p>
                </td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]">
                  <p className="flex pl-6">No</p>
                </td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]">
                  <p className="flex pl-6">Yes</p>
                </td>
                <td></td>
              </tr>
              {/* end second row */}

              {/* second row */}
              <tr className=" border-[#E8E8E8]">
                <td className="">
                  <p className="flex pl-6 text-xl pb-6">
                    Maximum Load Capacity
                  </p>
                </td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]">
                  <p className="flex pl-6">280 KG</p>
                </td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]">
                  <p className="flex pl-6">300 KG</p>
                </td>
                <td></td>
              </tr>
              <tr className=" border-[#E8E8E8]">
                <td className="">
                  <p className="flex pl-6 text-xl pb-6">
                    Origin of Manufacture{" "}
                  </p>
                </td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]">
                  <p className="flex pl-6">India</p>
                </td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]">
                  <p className="flex pl-6">India</p>
                </td>
                <td></td>
              </tr>
              {/* end second row */}

              {/* second row */}
              <tr className="">
                <td>
                  <p className="pl-6 flex  font-medium text-[28px] py-6">
                    Dimensions
                  </p>
                </td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]"></td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]"></td>
                <td></td>
              </tr>
              {/* end second row */}

              {/* second row */}
              <tr className=" border-[#E8E8E8]">
                <td className="">
                  <p className="flex pl-6 text-xl pb-6">Width</p>
                </td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]">
                  <p className="flex pl-6">265.32 cm</p>
                </td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]">
                  <p className="flex pl-6">265.32 cm</p>
                </td>
                <td></td>
              </tr>
              {/* end second row */}

              {/* second row */}
              <tr className=" border-[#E8E8E8]">
                <td className="">
                  <p className="flex pl-6 text-xl pb-6">Height</p>
                </td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]">
                  <p className="flex pl-6">76 cm</p>
                </td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]">
                  <p className="flex pl-6">76 cm</p>
                </td>
                <td></td>
              </tr>
              {/* end second row */}

              {/* second row */}
              <tr className=" border-[#E8E8E8]">
                <td className="">
                  <p className="flex pl-6 text-xl pb-6">Depth</p>
                </td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]">
                  <p className="flex pl-6">167.76 cm</p>
                </td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]">
                  <p className="flex pl-6">167.76 cm</p>
                </td>
                <td></td>
              </tr>
              {/* end second row */}

              {/* second row */}
              <tr className=" border-[#E8E8E8]">
                <td className="">
                  <p className="flex pl-6 text-xl pb-6">Weight</p>
                </td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]">
                  <p className="flex pl-6">45 KG</p>
                </td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]">
                  <p className="flex pl-6">65 KG</p>
                </td>
                <td></td>
              </tr>
              {/* end second row */}

              {/* second row */}
              <tr className=" border-[#E8E8E8]">
                <td className="">
                  <p className="flex pl-6 text-xl pb-6">Seat Height </p>
                </td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]">
                  <p className="flex pl-6">41.52 cm</p>
                </td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]">
                  <p className="flex pl-6">41.52 cm</p>
                </td>
                <td></td>
              </tr>
              {/* end second row */}

              {/* second row */}
              <tr className=" border-[#E8E8E8]">
                <td className="">
                  <p className="flex pl-6 text-xl pb-6">Leg Height</p>
                </td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]">
                  <p className="flex pl-6">5.46 cm</p>
                </td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]">
                  <p className="flex pl-6">5.46 cm</p>
                </td>
                <td></td>
              </tr>
              {/* end second row */}

              {/* second row */}
              <tr className="">
                <td>
                  <p className="pl-6 flex  font-medium text-[28px] py-6">
                    Warranty
                  </p>
                </td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]"></td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]"></td>
                <td></td>
              </tr>
              {/* end second row */}

              {/* second row */}
              <tr className=" border-[#E8E8E8]">
                <td className="">
                  <h5 className="pl-6 text-xl pb-6">Warranty Summary</h5>
                </td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]">
                  <p className="flex pl-6">1 Year Manufacturing Warranty</p>
                </td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]">
                  <p className="flex pl-6">1.2 Year Manufacturing Warranty</p>
                </td>
                <td></td>
              </tr>
              {/* end second row */}

              {/* second row */}
              <tr className=" border-[#E8E8E8]">
                <td className="">
                  <p className="flex pl-6 text-xl py-6">
                    Warranty Service Type
                  </p>
                </td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]">
                  <p className="flex pl-6 py-6">
                    For Warranty Claims or Any Product Related Issues Please
                    Email at operations@trevifurniture.com
                  </p>
                </td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]">
                  <p className="flex pl-6 py-6">
                    For Warranty Claims or Any Product Related Issues Please
                    Email at support@xyz.com
                  </p>
                </td>
                <td></td>
              </tr>
              {/* end second row */}

              {/* second row */}
              <tr className=" border-[#E8E8E8]">
                <td className="">
                  <p className="flex pl-6 text-xl pb-6">Covered in Warranty</p>
                </td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]">
                  <p className="flex pl-6 py-6">
                    Warranty Against Manufacturing Defect
                  </p>
                </td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]">
                  <p className="flex pl-6 py-6">
                    Warranty of the product is limited to manufacturing defects
                    only.
                  </p>
                </td>
                <td></td>
              </tr>
              {/* end second row */}

              {/* second row */}
              <tr className=" border-[#E8E8E8]">
                <td className="">
                  <p className="flex pl-6 text-xl pb-6">
                    Not Covered in Warranty
                  </p>
                </td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]">
                  <p className="flex pl-6 py-6">
                    The Warranty Does Not Cover Damages Due To Usage Of The
                    Product Beyond Its Intended Use And Wear & Tear In The
                    Natural Course Of Product Usage.
                  </p>
                </td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]">
                  <p className="flex pl-6 py-6">
                    The Warranty Does Not Cover Damages Due To Usage Of The
                    Product Beyond Its Intended Use And Wear & Tear In The
                    Natural Course Of Product Usage.
                  </p>
                </td>
                <td></td>
              </tr>
              {/* end second row */}

              {/* second row */}
              <tr className=" border-[#E8E8E8]">
                <td className="">
                  <p className="flex pl-6 text-xl pb-6">Domestic Warranty </p>
                </td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]">
                  <p className="flex pl-6 py-6">1 Year</p>
                </td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]">
                  <p className="flex pl-6 py-6">3 Months</p>
                </td>
                <td></td>
              </tr>
              {/* end second row */}

              {/* second row */}
              <tr className=" border-[#E8E8E8]">
                <td className=""></td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]">
                  <p className="flex pl-6">
                    <button className="w-[215px] h-[64px] bg-[--gold] text-white text-xl">
                      add to cart
                    </button>
                  </p>
                </td>
                <td className="border-x-[1px] border-[#E8E8E8] w-[344px]">
                  <p className="flex pl-6">
                    <button className="w-[215px] h-[64px] bg-[--gold] text-white text-xl">
                      add to cart
                    </button>
                  </p>
                </td>
                <td></td>
              </tr>
              {/* end second row */}
            </tbody>
          </table>
        </div>

        <div className="xl:hidden my-12 h-[50vh] mt-[100px] flex items-center justify-center ">
          <h3 className="font-medium">
            Comparison Table is not available on small screens
          </h3>
        </div>
      </div>
    </>
  );
}
