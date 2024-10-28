import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import { Link } from "react-router-dom";
import img from "../../assets/Asgaard sofa 5.png";
import { AntDesignDeleteFilled } from "../Icons";
const cartItems = {
  items: [
    {
      img: "Asgaard sofa 5.png",
      title: "Asgaard sofa",
      price: 25000000,
      quantity: 1,
      subtotal: 25000000,
    },
  ],
  total: 25000000,
};

export default function Cart() {
  return (
    <>
      <div id="cart">
        <SectionHeader title="Cart" />

        <div className="flex flex-col gap-y-12  md:flex-row justify-between py-10 container mt-8">
          {/* left side */}
          <div className="w-full md:w-[817px]">
            <table className="table-auto text-center w-full">
              <thead className="bg-[#F9F1E7] h-[55px]">
                <tr>
                  <th className="hidden sm:table-cell"></th>
                  <th>Product</th>
                  <th>price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="">
                {/* separator row */}
                <tr className="h-12"></tr>
                {/* end srparated row */}
                <tr>
                  <td className="size-[105px] hidden sm:table-cell">
                    <div className="size-full bg-[#F9F1E7] flex justify-center items-center rounded-[10px]">
                      <img src={img} alt="" />
                    </div>
                  </td>
                  <td className="text-[#9F9F9F] ">Asgaard sofa</td>
                  <td className="text-[#9F9F9F]">Rs. 250,000.00</td>
                  {/* <td className="relative flex justify-center items-center before:flex before:items-center before:justify-center  before:border-[1px] before:border-[#9F9F9F]  before:content-['1'] "></td> */}
                  <td>
                    <span className="rounded-[5px] mx-auto flex justify-center items-center size-[32px] border-[1px] border-[#9F9F9F]">
                      1
                    </span>
                  </td>
                  <td>Rs. 250,000.00</td>
                  <td className="text-[--gold] ">
                    <button>
                      <AntDesignDeleteFilled />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* right side total price */}
          <div className="w-full md:size-[390px] text-center bg-[#F9F1E7] flex justify-center py-4">
            <div className="w-[60%]">
              <h6 className="text-[32px] font-semibold">Cart Totals</h6>
              <div className="my-12">
                <div className="flex justify-between items-center gap-x-8">
                  <p className="font-medium">Subtotal</p>
                  <p className="text-[#9F9F9F]">Rs. 250,000.00</p>
                </div>
                <div className="flex justify-between items-center gap-x-8 mt-8">
                  <p className="font-medium">Total</p>
                  <p className="font-medium text-xl text-[--gold]">
                    Rs. 250,000.00
                  </p>
                </div>
              </div>

              <Link
                to="/checkout"
                className="w-full h-[60px] border-2 border-black rounded-[10px] flex items-center justify-center text-xl transition-colors duration-300 hover:bg-black hover:text-white"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
