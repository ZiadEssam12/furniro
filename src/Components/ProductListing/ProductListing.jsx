import React from "react";
import { CompareIcon, GridiconsShare, HeartIcon } from "../Icons";
import { Button } from "../ReusableComponenets/ReusableComponenets";

export default function ProductListing({ product }) {
  return (
    <>
      <div
        href={product.href}
        className={`group overflow-hidden bg-[--light-grey] relative before:absolute before:rounded-full before:w-[48px] before:h-[48px] ${
          product.discount
            ? "before:bg-[--offer-bg] before:content-['-30%']"
            : null
        }
            ${
              product.new ? "before:bg-[--new-bg] before:content-['New']" : null
            }
                before:top-4 before:right-4  before:flex before:justify-center before:items-center before:text-white`}
      >
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img
            alt={product.imageAlt}
            src={product.imageSrc}
            className="h-full w-full"
          />
        </div>
        <div className="px-5 pb-4">
          <h3 className="mt-2 text-2xl text-[#3A3A3A] font-semibold">
            {product.name}
          </h3>
          <h4 className="my-1 text-[#898989]">{product.category}</h4>
          {product.discount ? (
            <>
              <div className="flex justify-between items-center">
                <p className="text-xl font-semibold text-[#3A3A3A]">
                  Rp{" "}
                  {new Intl.NumberFormat().format(
                    Number(product.price.replace(/\./g, "")) -
                      Number(product.price.replace(/\./g, "")) *
                        (Number(product.discount) / 100)
                  )}
                </p>
                <p className="font-normal line-through text-[#B0B0B0]">
                  Rp {product.price}
                </p>
              </div>
            </>
          ) : (
            <p className="text-xl font-semibold text-[#3A3A3A]">
              Rp{" "}
              {new Intl.NumberFormat().format(
                Number(product.price.replace(/\./g, ""))
              )}
            </p>
          )}
        </div>

        <div className="w-full h-full bg-[--overlay] absolute top-0 flex justify-center items-center flex-col translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div>
            <Button>Add to cart</Button>
          </div>
          <div className="flex justify-between w-full px-8 font-semibold text-white mt-4 ">
            <button className="flex items-center gap-1 ">
              <GridiconsShare /> Share
            </button>
            <button className="flex items-center gap-1">
              <CompareIcon /> Compare
            </button>
            <button className="flex items-center gap-1">
              <HeartIcon />
              like
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
