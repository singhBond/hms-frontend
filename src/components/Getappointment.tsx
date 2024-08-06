import React from "react";
import { Button } from "./ui/button";

const Getappointment = () => {
  return (
    <div className="sm:min-h-[700px] grid justify-center">
      <div className="bg-sky-700 grid grid-flow-col pt-12 h-[400px] w-full">
        <div className=" text-white grid grid-flow-row pt-2 pl-56">
          <h1>Need a Doctor for Check-up?</h1>
          <h2 className="text-4xl font-semibold">
            Just Make an Appointment and You’re Done!
          </h2>
          <p>Get Your Quote or Call:</p>
          <p className="text-xl font-semibold">(0080) 123-453-789</p>
          <Button className="w-48 rounded-sm">Get an Appointment</Button>
        </div>
        <div className="grid">
          <img
            src="/doctors/image-4.png"
            alt="img"
            className="h-[400px] mr-96  -mt-24 "
          />
        </div>
      </div>
      <div className=" bg-slate-50 border-4 bg-pattern4-bg h-[200px] w-[1000px] -mt-[300px] place-self-center "></div>
    </div>
  );
};

export default Getappointment;
