import React from "react";

const Facilityinfo = () => {
  return (
    // FACILITY INFO CARDS

    <div className="grid grid-flow-col sm:w-full sm:h-full  ">
      <div>
        <a
          href="#"
          className="transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 duration-300 ... group block max-w-xs mx-auto rounded-lg p-8 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-600 hover:ring-sky-600"
        >
          <div className="flex items-center space-x-3">
          <img src="/healthcare.png" alt="icon" className="text-sky-700 group-hover:text-white"/>
            <svg
              className="h-4 w-4 stroke-sky-500 group-hover:stroke-white"
              fill="none"
              viewBox="0 0 24 24"
            ></svg>
            
            <h3 className="text-slate-900 group-hover:text-white text-lg font-semibold">
              Quality & Safety
            </h3>
          </div>
          <p className="text-slate-500 group-hover:text-white text-sm">
            Our Delmont hospital utilizes state of the art technology and
            employs a team of true experts.
          </p>
        </a>
      </div>

      <div>
        <a
          href="#"
          className="transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 duration-300 ... group block max-w-xs mx-auto rounded-lg p-8 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-600 hover:ring-sky-600"
        >
          <div className="flex items-center space-x-3">
            <img src="/lifeline.png" alt="icon" className="text-slate-900 group-hover:text-white" />
            <svg
              className="h-6 w-6 stroke-sky-500 group-hover:stroke-white"
              fill="none"
              viewBox="0 0 24 24"
            ></svg>
            <h3 className="text-slate-900 group-hover:text-white text-lg font-semibold">
              Leading Technology
            </h3>
          </div>
          <p className="text-slate-500 group-hover:text-white text-sm">
            Our Delmont hospital utilizes state of the art technology and
            employs a team of true experts.
          </p>
        </a>
      </div>

      <div>
        <a
          href="#"
          className="transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 duration-300 ... group block max-w-xs mx-auto rounded-lg p-8 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-600 hover:ring-sky-600"
        >
          <div className="flex items-center space-x-3">
            <img src="/doctor.png" alt="icon" />
            <svg
              className="h-6 w-6 stroke-sky-500 group-hover:stroke-white"
              fill="none"
              viewBox="0 0 24 24"
            ></svg>
            <h3 className="text-slate-900 group-hover:text-white text-lg font-semibold">
              Experts by Exprience
            </h3>
          </div>
          <p className="text-slate-500 group-hover:text-white text-sm">
            Our Delmont hospital utilizes state of the art technology and
            employs a team of true experts.
          </p>
        </a>
      </div>
    </div>
  );
};

export default Facilityinfo;
