"use client";
import Image from "next/image";
import React, { useState } from "react";
import { SelectOptions } from "./SelectOption";
import DatesPicker from "./DatePicker";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
    <div className="">
      {/* top  */}
      <div className="flex justify-center items-center md:flex-col md:gap-6 py-6">
        <h1 className="text-4xl font-bold md:w-[650px] text-center">
          We Are Always Ready to Help You. Book An Appointment
        </h1>
        <Image
          src={"/assets/png/section-img.png"}
          alt="Image"
          width={60}
          height={60}
        />
        <p className="mt-5 md:w-[650px] text-[20px] text-center text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipiscing elit praesent
          aliquet. pretiumts
        </p>
      </div>
      {/* bottom  */}
      <div className="flex justify-evenly items-center">
        {/* left section  */}
        <div className="flex flex-col gap-5 px-5">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Name"
              className="border px-4 py-2 rounded-md"
            />
            <input
              type="email"
              placeholder="Email"
              className="border px-4 py-2 rounded-md"
            />
          </div>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Phone"
              className="border px-4 py-2 rounded-md"
            />
            {/* Drop down here  */}
            <SelectOptions value="Department" options={DepartmentOptions} />
          </div>
          <div className="flex gap-3">
            {/* Drop down  */}
            <SelectOptions options={Doctors} value="Doctor" />
            {/* Date Picker  */}
            <DatesPicker setDate={setDate} date={date} />
          </div>
          <div>
            <textarea
              placeholder="Write your message here..."
              className="border px-4 py-2 rounded-md w-full"
              rows={3}
              cols={30}
            ></textarea>
            <div className="flex gap-6 items-center mt-3">
              <Button
                className={cn(
                  "group relative isolate overflow-hidden rounded-md bg-blue-600 px-3 text-white py-6 w-[10rem]",
                  "before:absolute before:inset-y-0 before:right-0 before:z-[-1] before:w-[51%] before:origin-left before:scale-x-0 before:bg-primary  before:transition-transform before:duration-300 before:ease-in-out",
                  "after:absolute after:inset-y-0 after:left-0 after:z-[-1] after:w-[51%] after:origin-right after:scale-x-0 after:bg-primary  after:transition-transform after:duration-300 after:ease-in-out",
                  "hover:before:scale-x-100 hover:after:scale-x-100 hover:text-white"
                )}
                variant={"default"}
              >
                Book an Appointment
              </Button>
              <p>(We will be confirm by text message)</p>
            </div>
          </div>
        </div>
        {/* right section  */}
        <div>
          <Image
            src={"/assets/png/contact-img.png"}
            alt="Image"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Booking;
