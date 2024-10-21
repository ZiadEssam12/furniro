import React from "react";
import image1 from "../../assets/image 1.png";
import image2 from "../../assets/image 2.png";
import image3 from "../../assets/image 3.png";
import image4 from "../../assets/image 4.png";
import ProductListing from "../ProductListing/ProductListing";
import { Button } from "../ReusableComponenets/ReusableComponenets";
export default function OurProducts() {
  const products = [
    {
      id: 1,
      name: "Syltherine",
      href: "#",
      category: "Stylish cafe chair",
      price: "3.500.000",
      discount: "30",
      imageSrc: image1,
      imageAlt: "Syltherine",
    },
    {
      id: 2,
      name: "Leviosa",
      href: "#",
      category: "Stylish cafe chair",
      price: "2.500.000",
      imageSrc: image2,
      imageAlt:
        "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
      id: 3,
      name: "Lolito",
      href: "#",
      category: "Luxury big sofa",
      price: "14.000.000",
      discount: "50",
      imageSrc: image3,
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
    },
    {
      id: 4,
      name: "Respira",
      href: "#",
      category: "Outdoor bar table and stool",
      price: "500.000",
      imageSrc: image4,
      new: true,
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    {
      id: 5,
      name: "Syltherine",
      href: "#",
      category: "Stylish cafe chair",
      price: "3.500.000",
      discount: "30",
      imageSrc: image1,
      imageAlt: "Syltherine",
    },
    {
      id: 6,
      name: "Leviosa",
      href: "#",
      category: "Stylish cafe chair",
      price: "2.500.000",
      imageSrc: image2,
      imageAlt:
        "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
      id: 7,
      name: "Lolito",
      href: "#",
      category: "Luxury big sofa",
      price: "14.000.000",
      discount: "50",
      imageSrc: image3,
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
    },
    {
      id: 8,
      name: "Respira",
      href: "#",
      category: "Outdoor bar table and stool",
      price: "500.000",
      imageSrc: image4,
      new: true,
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    // More products...
  ];

  return (
    <div className="container px-10 md:px-0 mx-auto my-10">
      <div>
        <h3 className="text-[40px] font-bold mb-8 text-center">Our Products</h3>
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
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
