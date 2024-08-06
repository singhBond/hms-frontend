import React from "react";
import { Button } from "@/components/ui/button";

const Ourmedical = () => {
  return (
    <div className="grid grid-cols-2 sm:w-full sm:h-full lg:w-full lg:h-full ">
      <div className=" w-full  bg-pattern-bg grid grid-flow-col ">
        <div className=" static size-[500px] ml-56">
          <img src="/sthethescope.png" alt="img" />
          <div className="relative bottom-80 -ml-20  size-[350px]  ">
            <img src="/doc-2.png" alt="img" />
            <div className=" relative size-[250px] bottom-80 ml-96    ">
              <img src="/doc-3.png" alt="img" />
            </div>
          </div>
        </div>
      </div>
      <div className="p-8">
        <h2 className="text-slate-600 text-xl m-8 ">OUR MEDICAL</h2>
        <h3 className="text-slate-800 text-4xl font-medium m-8">
          We're setting Standards in Research what's more, Clinical Care.
        </h3>
        <img src="/activity.png" alt="icon" className="mx-8" />
        <p className="text-slate-600 m-8">
          We provide the most full medical services, so every person could have
          the pportunity o receive qualitative medical help.
        </p>
        <p className="text-slate-600 m-8">
          Our Clinic has grown to provide a world class facility for the
          treatment of tooth loss, dental cosmetics and bore advanced
          restorative dentistry. We are among the most qualified implant
          providers in the AUS with over 30 years of uality training and
          experience.
        </p>
        <div className="grid grid-flow-col m-8 ">
          <img src="/signature.png" alt="sign" />
          <Button className="bg-sky-700 rounded-md h-12 w-36 -ml-36 mt-6 ">
            More About
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Ourmedical;
