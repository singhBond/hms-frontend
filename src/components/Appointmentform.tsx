"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Appointmentform = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  return (
    // FORM AREA
    <div>
      <div className="  px-8 py-2  ">
        <h1 className="text-3xl font-medium my-2">Make an Appointment</h1>
        <p className="text-slate-600 my-2">
          We Provide the most full medical service, so every person could have
          the oportunity to receive qualitative medical help.
        </p>
      </div>
      <div className=" grid grid-cols-2  mx-4 ">
        <Input
          type="name"
          placeholder="Your Name"
          className="bg-white rounded-sm m-4 h-14 w-[550px] text-lg px-3"
        />
        <Input
          type="phone"
          placeholder="Your Phone"
          className="bg-white rounded-sm m-4 h-14 w-[550px] text-lg px-3"
        />
        <Input
          type="mail"
          placeholder="Email Address"
          className="bg-white rounded-sm m-4 h-14 w-[550px] text-lg px-3"
        />

        <Select>
          <SelectTrigger className="bg-white rounded-sm m-4 h-14 w-[550px] text-lg text-slate-500">
            <SelectValue placeholder="Select Department" />
          </SelectTrigger>
          <SelectContent className="text-slate-500 ">
            <SelectGroup>
              <SelectLabel>Select Department</SelectLabel>
              <SelectItem value="department">Cardiology</SelectItem>
              <SelectItem value="Neurology">Neurology</SelectItem>
              <SelectItem value="Urology">Urology</SelectItem>
              <SelectItem value="Gynecological">Gynecological</SelectItem>
              <SelectItem value="Pediatrical">Pediatrical</SelectItem>
              <SelectItem value="Laboratory">Laboratory</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <div className=" bg-white rounded-sm m-4  ">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                {date ? format(date, "PPP") : <span>dd-mm-yyyy</span>}
                <CalendarIcon className="ml-96" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <Select>
          <SelectTrigger className=" bg-white rounded-sm m-4 h-14 w-[550px] text-lg text-slate-500">
            <SelectValue placeholder="Select Department" />
          </SelectTrigger>
          <SelectContent className="text-slate-500 ">
            <SelectGroup>
              <SelectLabel>Select Time</SelectLabel>
              <SelectItem value="Frist Shift">10:00 AM-12:00 PM</SelectItem>
              <SelectItem value="Second Shift">12:00 PM-2:00 PM</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Textarea
          placeholder="Type your message here."
          className="bg-white text-lg shadow-sm  rounded-sm m-4 min-w-[1150px] min-h-[120px]"
        />
      </div>
    </div>
  );
};

export default Appointmentform;
