import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

import logo from "../../assets/Meubel House_Logos-05.png";
import {
  AkarIconsHeart,
  AkarIconsSearch,
  MdiAccountAlertOutline,
  AntDesignShoppingCartOutlined,
} from "../Icons";
import Hero from "../Hero/Hero";
const navigation = [
  { name: "Home", href: "#", current: false },
  { name: "Shop", href: "#", current: false },
  { name: "About", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <>
      <Disclosure as="nav" className="fixed top-0 bg-white z-20 w-full">
        <div className="mx-auto px-2 sm:px-6 lg:px-8 bg-white fixed top-0 z-10 w-full">
          <div className="relative flex items-center justify-between h-fit py-3 md:h-[100px] max-w-[95dvw]">
            <div className="inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block h-6 w-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden h-6 w-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
            <div className="flex flex-shrink-0 items-center ">
              <img alt="furniro" src={logo} className="h-8 w-auto" />
              <p className="font-bold text-xl lg:text-[34px] ml-1">Furniro</p>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-[0px] lg:space-x-[35px]">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      "text-black hover:bg-[--gold] hover:text-white rounded-md px-3  py-2  font-medium transition-colors duration-150"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {[
                <MdiAccountAlertOutline />,
                <AkarIconsSearch />,
                <AkarIconsHeart />,
                <AntDesignShoppingCartOutlined />,
              ].map((icon, index) => (
                <button
                  key={index}
                  type="button"
                  className="relative rounded-md ml-1 p-2 focus:outline-none transition-colors duration-150 text-black hover:bg-[--gold] hover:text-white "
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 mt-[57px] px-2 pb-3 pt-2 w-full">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={
                  "block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-[--gold] hover:text-white"
                }
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </>
  );
}
