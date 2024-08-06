import { Clock10Icon, Link, Linkedin, MapPinPlusInside } from "lucide-react";
import { IoLogoSkype } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import React from "react";

const Header = () => {
  return (
    <div>
      {/* header */}

      {/* <header className="justify-between sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6"> */}
      <nav className=" justify-around p-2 hidden flex-col  text-lg text-slate-500 font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 ">
        <div className="grid grid-flow-col gap-4">
          <div className="  flex  ">
            <MapPinPlusInside strokeWidth={0.5} className="mx-3" />
            Hospital, Ranchi, Jharkhand, INDIA
          </div>
          <div className=" flex">
            <Clock10Icon strokeWidth={0.5} className="mx-3" />
            Mon - Sat 6.00AM - 12.00AM  Sunday CLOSED
          </div>
        </div>

        <div className="grid grid-flow-col gap-8  text-lg ">
          <FaFacebookF className=" text-muted-foreground transition-colors hover:text-foreground" />

          <FaTwitter className="  text-muted-foreground transition-colors hover:text-foreground" />

          <IoLogoSkype className="  text-muted-foreground transition-colors hover:text-foreground" />

          <FaLinkedinIn className="  text-muted-foreground transition-colors hover:text-foreground" />
        </div>
      </nav>
     
    </div>
  );
};

export default Header;
