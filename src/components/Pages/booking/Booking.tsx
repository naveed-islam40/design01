"use client";
import Image from "next/image";
import React, { useState } from "react";
import { SelectOptions } from "./SelectOption";
import DatesPicker from "./DatePicker";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import "react-datepicker/dist/react-datepicker.css";

const DepartmentOptions = [
  "Department",
  "Cardiac Clinic",
  "Neurology",
  "Dentist",
  "Gestrology",
];

const Doctors = [
  "Dr. Atherton",
  "Dr. Smith",
  "Dr. John",
  "Dr. Mark",
  "Dr. Paul",
];
const Booking = () => {
  const [date, setDate] = useState("");

  return (
    <div className="px-4 py-8">
      {/* Top */}
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold max-w-3xl">
          We Are Always Ready to Help You. Book An Appointment
        </h1>
        <Image
          src="/assets/png/section-img.png"
          alt="Image"
          width={60}
          height={60}
        />
        <p className="text-base md:text-lg text-gray-700 max-w-2xl">
          Lorem ipsum dolor sit amet consectetur adipiscing elit praesent
          aliquet. pretiumts
        </p>
      </div>

      {/* Bottom */}
      <div className="mt-10 flex flex-col-reverse md:px-20 lg:flex-row items-center justify-between gap-10">
        {/* Left section */}
        <div className="flex flex-col gap-5 w-full lg:w-1/2">
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              placeholder="Name"
              className="border px-4 py-2 rounded-md w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="border px-4 py-2 rounded-md w-full"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              placeholder="Phone"
              className="border px-4 py-2 rounded-md w-full"
            />
            <SelectOptions value="Department" options={DepartmentOptions} />
          </div>
          <div className="flex flex-col md:flex-row gap-3">
            <SelectOptions options={Doctors} value="Doctor" />
            <DatesPicker setDate={setDate} date={date} />
          </div>
          <div>
            <textarea
              placeholder="Write your message here..."
              className="border px-4 py-2 rounded-md w-full"
              rows={3}
            ></textarea>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-4">
              <Button
                className={cn(
                  "group relative isolate overflow-hidden rounded-md bg-blue-600 px-3 text-white py-4 w-full sm:w-[10rem]",
                  "before:absolute before:inset-y-0 before:right-0 before:z-[-1] before:w-[51%] before:origin-left before:scale-x-0 before:bg-[#333333] before:transition-transform before:duration-300 before:ease-in-out",
                  "after:absolute after:inset-y-0 after:left-0 after:z-[-1] after:w-[51%] after:origin-right after:scale-x-0 after:bg-[#333333] after:transition-transform after:duration-300 after:ease-in-out",
                  "hover:before:scale-x-100 hover:after:scale-x-100 hover:text-white"
                )}
                variant={"default"}
              >
                Book an Appointment
              </Button>
              <p className="text-sm text-center sm:text-left">
                (We will confirm by text message)
              </p>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/assets/png/contact-img.png"
            alt="Image"
            width={500}
            height={500}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Booking;
