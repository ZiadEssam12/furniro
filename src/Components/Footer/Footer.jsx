// import React from "react";

// export default function Footer() {
//   return (
//     <>
//       <div className="container mx-auto bg-wihte flex flex-col justify-between  w-full h-[505px] my-10 py-6 px-6 md:px-0 font-medium ">
//         <div className="grid grid-cols-2 md:grid-cols-6 gap-x-10 flex-grow">
//           <div className="col-span-1 md:col-span-2 flex flex-col order-1">
//             <p className="text-[24px] font-bold h-11">Funiro.</p>
//             <p className="mt-10 text-[#9F9F9F] font-normal">
//               400 University Drive Suite 200 Coral <br /> Gables, <br /> FL
//               33134 USA
//             </p>
//           </div>
//           <div className="col-span-1 flex flex-col justify-between h-[90%] order-3 md:order-2">
//             <p className="text-[#9F9F9F] h-[35px] flex items-center">Links</p>
//             <a href="/home">Home</a>
//             <a href="/shop">Shop</a>
//             <a href="/about">About</a>
//             <a href="/contact">Contact</a>
//           </div>
//           <div className="col-span-1 flex flex-col justify-between h-[70%] order-4 md:order-3">
//             <p className="text-[#9F9F9F] h-[35px] flex items-cente">Help</p>
//             <a href="/patments">Payment Options</a>
//             <a href="/returns">Returns</a>
//             <a href="/policies">Privacy Policies</a>
//           </div>{" "}
//           <div className="col-span-1 md:col-span-2 order-2 md:order-4">
//             <p className="text-[#9F9F9F] h-[35px] flex items-center">
//               Newsletter
//             </p>

//             <div className="mt-10">
//               <input
//                 type="text"
//                 placeholder="Enter Your Email address"
//                 className="border-b-2 border-black"
//               />
//               <button className="ml-4 border-b-2 border-black active:border-b-2 outline-none">
//                 SUBSCRIBE
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="">
//           <p className="w-full line-through h-[0.5px] bg-[#D9D9D9] my-6"></p>

//           <p>2023 furino. All rights reverved</p>
//         </div>
//       </div>
//     </>
//   );
// }

import React from "react";

export default function Footer() {
  return (
    <>
      <div className=" mx-auto border-t-2 py-10 h-[505px] flex flex-col justify-between font-medium px-10 lg:px-0">
        <div className="grid grid-cols-2 md:grid-cols-6 mb-8  gap-y-16 gap-x-10 px-6 md:px-0 md:gap-y-0  container mx-auto">
          <div className="col-span-1 md:col-span-2 order-1">
            <div className="h-10 md:h-20 ">
              <a href="/" className="font-bold text-[24px]">
                Funiro.
              </a>
            </div>
            <div>
              <p className="text-[#9F9F9F]">
                400 University Drive Suite 200 Coral <br /> Gables, <br /> FL
                33134 USA
              </p>
            </div>
          </div>
          <div className="col-span-1 order-3 md:order-2">
            <div className="h-10 md:h-20 ">
              <p
                href="/"
                className="font-bold h-[36px] flex items-center  text-[#9F9F9F] w-fit"
              >
                Links
              </p>
            </div>
            <div className=" flex flex-col h-full">
              <a href="/home" className="w-fit">
                Home
              </a>
              <a href="/shop" className="w-fit my-[30px]">
                Shop
              </a>
              <a href="/about" className="w-fit">
                About
              </a>
              <a href="/contact" className="w-fit mt-[30px]">
                Contact
              </a>
            </div>
          </div>
          <div className="col-span-1 order-4 md:order-3">
            <div className="h-10 md:h-20">
              <p
                href="/"
                className="font-bold h-[36px] flex items-center text-[#9F9F9F]"
              >
                Help
              </p>
            </div>
            <div className="flex flex-col h-3/4 ">
              <a href="/patments" className="w-fit">
                Payment Options
              </a>
              <a href="/returns" className="w-fit my-[30px]">
                Returns
              </a>
              <a href="/policies" className="w-fit">
                Privacy Policies
              </a>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 order-2 md:order-4">
            <div className="h-10 md:h-20 ">
              <p
                href="/"
                className="font-bold h-[36px] flex items-center text-[#9F9F9F]"
              >
                Newsletter
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-y-6 md:gap-y-0 items-start md:items-center justify-center w-fit">
              <input
                type="text"
                placeholder="Enter Your Email address"
                className="border-b-2 border-black outline-none -translate-y-1"
              />
              <button className="ml-0 md:ml-4  border-b-2 -translate-y-1  border-black active:border-b-2 outline-none w-full  md:w-fit self-start">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        <div className="container border-t-2 mt-10 mx-auto px-6 md:px-0">
          <p className="py-6">2023 furino. All rights reverved</p>
        </div>
      </div>
    </>
  );
}
