import React, { useEffect, useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import { Link } from "react-router-dom";
import axios from "axios";
import { Dropdown } from "../ReusableComponenets/ReusableComponenets";

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
const paymentsOptions = [
  {
    type: "Direct Bank Transfer",
    description:
      "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.",
  },
  {
    type: "Cash on Delivery",
    description:
      "Pay with cash upon delivery. Ensure you have the exact amount as our delivery partners may not carry change. Your order will be processed and shipped promptly.",
  },
  {
    type: "PayPal",
    description:
      "Pay securely with your PayPal account. You will be redirected to the PayPal website to complete your purchase. Your order will be processed as soon as the payment is confirmed.",
  },
];

export default function Checkout() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState(null);

  const [error, setError] = useState(null);
  const [payment, setPayment] = useState(paymentsOptions[0]);

  // getting the list of the countries from the api
  useEffect(() => {
    axios
      .get("https://countriesnow.space/api/v0.1/countries/iso")
      .then((response) => {
        setCountries(response.data.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  // getting states after selecting the country
  useEffect(() => {
    setSelectedState(null);
    setStates([]);
    if (selectedCountry) {
      axios
        .post(`https://countriesnow.space/api/v0.1/countries/states`, {
          country: selectedCountry,
        })
        .then((response) => {
          setStates(response.data.data.states);
        })
        .catch((error) => {
          setError(error);
        });
    }
  }, [selectedCountry]);

  return (
    <>
      <div id="checkout" className="">
        <SectionHeader title="Checkout" />
        <div className="container my-14 flex flex-col md:flex-row gap-y-6 justify-between">
          {/* Billing details div */}
          <div className="w-full md:w-[608px]">
            <div className="w-[453px] mx-auto">
              <h2 className="font-semibold text-4xl">Billing details</h2>
              {/* inputs */}
              <div className="mt-6 flex flex-col gap-y-3 md:gap-y-8">
                {/* first and last name */}
                <div className="flex justify-between">
                  <div className="flex flex-col gap-y-0 md:gap-y-4">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      className="border-[1px] border-[--silver] w-[211px] h-[50px] md:h-[75px] rounded-[10px] px-4"
                    />
                  </div>
                  <div className="flex flex-col gap-y-0 md:gap-y-4">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      className="border-[1px] border-[--silver] w-[211px] h-[50px] md:h-[75px] rounded-[10px] px-4"
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div className="flex flex-col gap-y-0 md:gap-y-4">
                  <label htmlFor="CompanyName">Company Name (Optional)</label>
                  <input
                    type="text"
                    id="CompanyName"
                    className="border-[1px] border-[--silver] w-full h-[50px] md:h-[75px] rounded-[10px] px-4"
                  />
                </div>

                {/* TODO: api calling to get countries and state and city and phone code */}
                <div className="flex flex-col items-start gap-y-0 md:gap-y-4">
                  <label htmlFor="country">Country / Region</label>
                  <Dropdown
                    title={"country"}
                    data={countries}
                    value={selectedCountry}
                    setSelectedValue={setSelectedCountry}
                  />
                </div>

                {/* Street address */}
                <div className="flex flex-col gap-y-0 md:gap-y-4">
                  <label htmlFor="streetAddress">Street address</label>
                  <input
                    type="text"
                    id="streetAddress"
                    className="border-[1px] border-[--silver] w-full h-[50px] md:h-[75px] rounded-[10px] px-4"
                  />
                </div>

                {/* Town City */}
                <div className="flex flex-col gap-y-0 md:gap-y-4">
                  <label htmlFor="TownCity">Town / City</label>
                  <input
                    type="text"
                    id="TownCity"
                    className="border-[1px] border-[--silver] w-full h-[50px] md:h-[75px] rounded-[10px] px-4"
                  />
                </div>

                {/* state */}
                <div className="flex flex-col gap-y-0 md:gap-y-4">
                  <label htmlFor="province">Province</label>
                  <Dropdown
                    title={"province"}
                    data={states}
                    value={selectedState}
                    setSelectedValue={setSelectedState}
                    disabled={!states.length > 0}
                  />
                </div>

                {/* ZIP code */}
                <div className="flex flex-col gap-y-0 md:gap-y-4">
                  <label htmlFor="zipCode">ZIP code</label>
                  <input
                    type="text"
                    id="zipCode"
                    className="border-[1px] border-[--silver] w-full h-[50px] md:h-[75px] rounded-[10px] px-4"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-y-0 md:gap-y-4">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    id="phone"
                    className="border-[1px] border-[--silver] w-full h-[50px] md:h-[75px] rounded-[10px] px-4"
                  />
                </div>

                {/* Email address */}
                <div className="flex flex-col gap-y-0 md:gap-y-4">
                  <label htmlFor="emailAddress">Email address</label>
                  <input
                    type="text"
                    id="emailAddress"
                    className="border-[1px] border-[--silver] w-full h-[50px] md:h-[75px] rounded-[10px] px-4"
                  />
                </div>

                {/* Additional information */}
                <div className="flex flex-col gap-y-0 md:gap-y-4">
                  <label htmlFor="additionalInformation">
                    Additional information
                  </label>
                  <input
                    type="text"
                    id="additionalInformation"
                    className="border-[1px] border-[--silver] w-full h-[50px] md:h-[75px] rounded-[10px] px-4"
                    placeholder="Additional Information"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* right side in large screens second part in samll screens */}
          <div className="w-full md:w-[608px] h-[789px] py-12 px-6">
            <div className="flex flex-col gap-y-5 pb-8 border-b-[1px] border-[#D9D9D9]">
              {/* total and subtotal */}
              <div className="flex justify-between">
                <h5 className="text-2xl font-medium">Product</h5>
                <h5 className="text-2xl font-medium">Subtotal</h5>
              </div>
              {/* end total and subtotal */}

              {/* cart items */}
              <div>
                {cartItems.items.map((item, index) => (
                  <div
                    className="flex justify-between"
                    key={`${item.title}-${index}`}
                  >
                    <div className="flex gap-x-4 items-center">
                      <p className="text-[--silver]">Asgaard sofa</p>
                      <span className="text-xs font-medium">x</span>
                      <p className="text-xs font-medium">1</p>
                    </div>
                    <p className="font-light">Rs {item.subtotal}</p>
                  </div>
                ))}
              </div>
              {/* end cart item */}

              {/* subtototal */}
              <div className="flex justify-between items-center">
                <h5>Subtotal</h5>
                <p className="font-light">Rs {cartItems.total}</p>
              </div>
              {/* end subtotal */}

              {/* total */}
              <div className="flex justify-between items-end">
                <h5>Total</h5>
                <p className="font-bold text-2xl text-[--gold]">
                  Rs {cartItems.total}
                </p>
              </div>
              {/* end total */}
            </div>

            {/* payment options */}
            <div className="pt-6">
              <div className="flex flex-col gap-y-4">
                {paymentsOptions.map((option, index) => (
                  <div key={`${option.type}-${index}`}>
                    <div className="flex items-center gap-x-4">
                      <input
                        type="radio"
                        name="payment"
                        value={option.type}
                        id={option.type}
                        checked={payment.type === option.type}
                        className="appearance-none w-4 h-4 border-[1px] border-[--silver] checked:border-black checked:bg-black rounded-full"
                        onChange={() => setPayment(option)}
                      />
                      <label
                        htmlFor={option.type}
                        className={`flex gap-x-4 items-center ${
                          payment.type === option.type
                            ? null
                            : "text-[--silver]"
                        }`}
                      >
                        {option.type}
                      </label>
                    </div>

                    {/* Conditionally render the <p> tag */}
                    <p
                      className={`text-[--silver] font-light  transition-opacity duration-150 ${
                        payment.type === option.type
                          ? "opacity-100"
                          : "opacity-0"
                      }
                        transition-opacity duration-500
                        `}
                    >
                      {payment.type === option.type ? option.description : null}
                    </p>
                  </div>
                ))}
              </div>
              <p className="font-light my-4">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our
                <Link to="/" className="font-semibold ml-1">
                  privacy policy
                </Link>
                .
              </p>
            </div>
            <div>
              <button className="mx-auto w-[318px] h-[64px] mt-6 flex items-center justify-center border-[1px]  border-black rounded-[10px] text-xl">
                Place order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
