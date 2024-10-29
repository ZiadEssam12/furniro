import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import { BiClockFill, BxsPhone, MdiLocation } from "../Icons";
import { Button, LableInput } from "../ReusableComponenets/ReusableComponenets";

export default function Contact() {
  return (
    <div>
      <SectionHeader title="Contact" />

      {/* contact body */}
      <div id="contact" className="container px-6 md:px-0 my-6 md:my-32">
        {/* contact section header */}
        <div className="flex flex-col items-center text-center justify-center ">
          <h4 className="font-semibold text-4xl">Get In Touch With Us</h4>
          <p className="text-[--silver]  md:w-[644px] py-3 ">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-x-6 mt-4  md:mt-16 justify-center">
          {/* left side */}
          {/* contact information and inputs */}
          <div className="flex justify-between">
            {/* adress phone working time */}
            <div className="w-[393px] h-fit md:h-[537px] px-10 py-8 flex flex-col gap-y-12">
              {/* address */}
              <div className="flex gap-x-4">
                {/* address icon */}
                <div className="size-8 flex items-center">
                  <MdiLocation />
                </div>
                {/* end address icon */}

                {/* address information  */}
                <div className="flex flex-col">
                  <h5 className="font-medium text-2xl">Address</h5>
                  <p className="py-1">
                    236 5th SE Avenue, New York NY10000, United States
                  </p>
                </div>
                {/*end address information  */}
              </div>
              {/*end address */}

              {/* phone */}
              <div className="flex gap-x-4">
                {/* phone icon */}
                <div className="size-8 flex items-center">
                  <BxsPhone />
                </div>
                {/* end phone icon */}

                {/* phone information  */}
                <div className="flex flex-col">
                  <h5 className="font-medium text-2xl">Phone</h5>

                  <div className="py-1">
                    <p>Mobile: +(84) 546-6789</p>
                    <p>Hotline: +(84) 456-6789</p>
                  </div>
                </div>
                {/*end phone information  */}
              </div>
              {/*end phone */}

              {/* working hours */}
              <div className="flex gap-x-4">
                {/* working hours icon */}
                <div className="size-8 flex items-center">
                  <BiClockFill />
                </div>
                {/* end working hours icon */}

                {/* working hours information  */}
                <div className="flex flex-col">
                  <h5 className="font-medium text-2xl">Working Time</h5>
                  <div className="py-1">
                    <p>Monday-Friday: 9:00 - 22:00</p>
                    <p>Saturday-Sunday: 9:00 - 21:00</p>
                  </div>
                </div>
                {/*end working hours information  */}
              </div>
              {/*end working hours */}
            </div>
          </div>

          {/* right side */}
          {/* contact form */}
          <div className="w-full md:w-[530px] flex flex-col gap-y-8">
            <LableInput lable="Name" id="name" placeHolder="Enter Your Name" />
            <LableInput
              lable="Email"
              id="email"
              placeHolder="Enter Your Email"
            />
            <LableInput
              lable="Subject"
              id="subject"
              placeHolder="Enter Your Subject"
            />

            <div className="flex flex-col gap-y-0 md:gap-y-4">
              <label htmlFor="message">Message</label>
              <textarea
                type="text"
                id="message"
                className="border-[1px] border-[--silver] w-full h-[80px] md:h-[140px] rounded-[10px] px-4 py-4 resize-none"
                placeholder="Hi! i’d like to ask about"
              />
            </div>

            <div className="h-[55px]">
              <button
                href="#"
                className={`text-white bg-[--gold] rounded-[5px] w-[237px] h-full font-semibold  inline-block hover:bg-white transition-colors duration-300 hover:text-[--gold] border border-[--gold]`}
              >
                submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
