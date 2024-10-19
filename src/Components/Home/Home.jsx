import React from "react";
import CategoryBrowser from "../CategoryBrowser/CategoryBrowser";
import OurProducts from "../OurProducts/OurProducts";
import Share from "../Share/Share";
import RoomGallerySlider from "../RoomGallerySlider/RoomGallerySlider";

export default function Home() {
  return (
    <>
      <CategoryBrowser />
      <OurProducts />
      <RoomGallerySlider />
      <Share />
    </>
  );
}
