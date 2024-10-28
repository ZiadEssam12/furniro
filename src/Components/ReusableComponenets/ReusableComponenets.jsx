import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useState } from "react";
import { DashiconsArrowDownAlt2 } from "../Icons";

export function Button({
  bgColor = "white",
  textColor = "[--gold]",
  px = "px-10",
  py = "py-2",
  border = false,
  mt = "mt-7",
  children,
}) {
  return (
    <button
      href="#"
      className={`text-${textColor} bg-${bgColor} font-semibold ${px} ${py} ${mt} inline-block hover:bg-${textColor} transition-colors duration-300 hover:text-${bgColor} ${
        border ? "border border-[--gold]" : ""
      }`}
    >
      {children}
    </button>
  );
}

export function Dropdown({ title, value, setSelectedValue, data, disabled }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative  w-full">
      <button
        onClick={toggleDropdown}
        className={`border-[1px] border-[--silver]  h-[50px] md:h-[75px] w-full rounded-[10px] px-4 flex justify-between items-center ${
          disabled ? "bg-[#f9f9f9]" : "bg-white"
        }  ${disabled ? "text-[#b5b5b5]" : "text-[#333333]"}  ${
          disabled ? "cursor-not-allowed" : "cursor-pointer"
        }`}
        disabled={disabled}
      >
        {value ? <p className="">{value}</p> : <p>Select A {title}</p>}
        <p className={`${isOpen ? "-rotate-90" : "rotate-90"} transition-all`}>
          {" "}
          <DashiconsArrowDownAlt2 />
        </p>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-full h-[200px] overflow-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {data.map((item, index) => (
              <button
                key={`${item.name}-${index}`}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                onClick={() => {
                  setSelectedValue(item.name);
                  console.log("choosed item", item.name);
                  setIsOpen(false);
                }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
