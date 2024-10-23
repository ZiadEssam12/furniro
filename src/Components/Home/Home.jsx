import React, { useContext, useEffect } from "react";
import CategoryBrowser from "../CategoryBrowser/CategoryBrowser";
import OurProducts from "../OurProducts/OurProducts";
import Share from "../Share/Share";
import RoomGallerySlider from "../RoomGallerySlider/RoomGallerySlider";
import { ExtendedFooterContext } from "../Context/ExtendedFooterContext";
import Hero from "../Hero/Hero";

export default function Home() {
  // hide the extended footer from home page by
  // setting context value to false


  const { setExtendedFooter } = useContext(ExtendedFooterContext);

  useEffect(() => {
    console.log("Component mounted");
    setExtendedFooter(false);

    return () => {
      console.log("Component unmounted");
      setExtendedFooter(true);
    };
  }, []);

  return (
    <>
      <Hero />

      <CategoryBrowser />
      <OurProducts />
      <RoomGallerySlider />
      <Share />
    </>
  );
}
