import React, { useEffect, useRef } from "react";
import { CloseIcon, MaterialSymbolsClose } from "../Icons";
import sofa from "../../assets/Asgaard sofa 5.png";
import sofa2 from "../../assets/Asgaard sofa 6.png";
import { Button } from "../ReusableComponenets/ReusableComponenets";
import { Link } from "react-router-dom";
export default function ShoppingCart({ openModal, closeModal }) {
  const cartRef = useRef(null);

  // Handle ESC key press
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape") {
        closeModal(false);
      }
    };

    if (openModal) {
      window.addEventListener("keydown", handleEscKey);
    }

    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, [openModal, closeModal]);

  // Handle clicks outside the modal
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        closeModal(false);
      }
    };

    if (openModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openModal, closeModal]);

  return (
    <>
      {/* cart div */}
      <div
        className={`w-screen h-screen inset-0 fixed top-0 z-50 bg-[rgba(0,0,0,20%)] transition-opacity duration-300 ${
          openModal
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } flex justify-end`}
      >
        <div
          className="w-[417px] h-[746px] bg-white flex flex-col"
          ref={cartRef}
        >
          <div className="w-[85%] mx-auto pt-10">
            {/* header of the cart */}
            <div className="pr-4 flex justify-between items-center relative before:absolute before:bottom-0 before:h-[1px] before:bg-[#D9D9D9] before:w-3/4  pb-10">
              <h6 className="font-semibold text-2xl">Shopping Cart</h6>
              <button
                className=""
                onClick={() => {
                  closeModal(false);
                }}
              >
                <CloseIcon />
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-between  flex-grow">
            {/* cart items (items and total price) */}
            <div className="flex flex-col justify-between  pt-10 pb-6 h-full">
              {/* items container */}
              <div className="flex flex-col gap-y-1">
                {/* item listing */}
                <Link
                  to={"/product"}
                  className="flex justify-between items-center hover:bg-gray-50 px-10 py-4"
                  onClick={() => {
                    closeModal(false);
                  }}
                >
                  {/* item img name price */}
                  <div className="flex justify-between gap-x-8 items-center">
                    {/* item img  */}
                    <div className="bg-[rgba(184,142,47,0.22)] size-[105px] flex items-center rounded-[10px]">
                      <img src={sofa} alt="sofa image" />
                    </div>
                    {/* name and price */}
                    <div className="flex flex-col">
                      <h6>Asgaard sofa</h6>
                      <div className="flex justify-between gap-x-4 items-center mt-3">
                        <p>1</p>
                        <p>X</p>
                        <p className="text-[--gold] text-xs font-medium">
                          Rs. 250,000.00
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* remove button */}
                  <div className="size-5 bg-[#9F9F9F] flex justify-center items-center rounded-full text-white">
                    <button>
                      <MaterialSymbolsClose />
                    </button>
                  </div>
                </Link>
                <Link
                  to="/product"
                  onClick={() => {
                    closeModal(false);
                  }}
                  className="flex justify-between items-center hover:bg-gray-50 px-10 py-4"
                >
                  {/* item img name price */}
                  <div className="flex justify-between gap-x-8 items-center">
                    {/* item img  */}
                    <div className="bg-[rgba(184,142,47,0.22)] size-[105px] flex items-center rounded-[10px] overflow-hidden">
                      <img
                        src={sofa2}
                        alt="sofa image"
                        className="h-full w-full"
                      />
                    </div>
                    {/* name and price */}
                    <div className="flex flex-col">
                      <h6>Casaliving Wood</h6>
                      <div className="flex justify-between gap-x-4 items-center mt-3">
                        <p>1</p>
                        <p>X</p>
                        <p className="text-[--gold] text-xs font-medium">
                          Rs. 270,000.00
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* remove button */}
                  <div className="size-5 bg-[#9F9F9F] flex justify-center items-center rounded-full text-white">
                    <button>
                      <MaterialSymbolsClose />
                    </button>
                  </div>
                </Link>
              </div>

              {/* Total price */}
              <div className=" flex justify-between px-10">
                <p>Subtotal</p>
                <p className="text-[--gold] font-semibold">Rs. 520,000.00</p>
              </div>
            </div>
            {/* price and checkout and Comparison */}
            <div className="border-t-2 flex items-center">
              <div className="w-[85%] mx-auto flex justify-between items-center py-6">
                <Link
                  to="/cart"
                  className="px-7 h-[30px] border-2 border-black rounded-full flex items-center text-xs transition-colors duration-300 hover:bg-black hover:text-white"
                >
                  Cart
                </Link>
                <Link
                  to="/checkout"
                  className="px-7 h-[30px] border-2 border-black rounded-full flex items-center text-xs  transition-colors duration-300 hover:bg-black hover:text-white"
                >
                  Checkout
                </Link>
                <Link
                  to="/"
                  className="px-7 h-[30px] border-2 border-black rounded-full flex items-center text-xs  transition-colors duration-300 hover:bg-black hover:text-white"
                >
                  Comparison
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
