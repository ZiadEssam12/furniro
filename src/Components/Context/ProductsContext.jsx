import { createContext } from "react";
import image1 from "../../assets/image 1.png";
import image2 from "../../assets/image 2.png";
import image3 from "../../assets/image 3.png";
import image4 from "../../assets/image 4.png";

export const ProductsContext = createContext();

export default function ProductsProvider({ children }) {
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
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
}
