import React, { useContext } from "react";
import ProductListing from "../ProductListing/ProductListing";
import { Button } from "../ReusableComponenets/ReusableComponenets";
import { ProductsContext } from "../Context/ProductsContext";
export default function OurProducts() {
  const { products } = useContext(ProductsContext);

  return (
    <div className="container px-10 md:px-0 mx-auto my-10">
      <div>
        <h3 className="text-[40px] font-bold mb-8 text-center">Our Products</h3>
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 w-3/4 md:w-full mx-auto">
            {products.map((product) => (
              <ProductListing key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Button textColor="[--gold]" border px="px-12" py="py-2" mt="mt-4">
          Show More
        </Button>
      </div>
    </div>
  );
}
