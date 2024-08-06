"use client";

import React from "react";
import Navbar from "@/components/Navbar";

import SimpleImageSlider from "react-simple-image-slider";
import Header from "@/components/Header";
import Facilityinfo from "@/components/Facilityinfo";
import Ourmedical from "@/components/Ourmedical";
import Ourservice from "@/components/Ourservice";
import Ourdoctor from "@/components/Ourdoctor";
import Getappointment from "@/components/Getappointment";
const images = [
  { url: "images/doctorimg1.png" },
  { url: "images/docotrimg2.png" },
];
const Dashboard = () => {
  return (
    <>
      <div className="  flex h-full  w-full flex-col ">
        <div className="bg-sky-700  w-full min-h-3 "></div>
        <Header />
        {/* navbar */}
        <Navbar />
      </div>

      <div className="sticky grid flex-1 items-start gap-2  mt-6 sm:px-6 sm:py-0 md:gap-8   w-full h-full">
        <div className="sticky hover:z-10  inset to-background h-screen w-full overflow-hidden">
          <SimpleImageSlider
            width={1470}
            height={800}
            images={images}
            showBullets={true}
            showNavs={true}
          />
        </div>
        <Facilityinfo />
      </div>
      <div>
        <Ourmedical/>
      </div>
      <Ourservice/>
      <Ourdoctor/>
      <Getappointment/>
    </>
  );
};

export default Dashboard;
