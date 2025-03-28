import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const Register = () => {
  return (
    <div className="h-[50vh] bg-[#EDF2FF] flex justify-evenly px-5 items-center">
      <div>
        <h1 className="text-2xl font-semibold">Sign up for newsletter</h1>
        <p className="text-gray-600 mt-2 w-[80%]">
          Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu, homero
          alterum.
        </p>
      </div>
      <div className="flex gap-3">
        <input
          type="email"
          placeholder="Your email address"
          className="py-2 px-3 rounded-md w-[20rem]"
        />
        <Button
          className={cn(
            "group relative isolate overflow-hidden rounded-md bg-blue-600 px-3 text-white py-6 w-[10rem]",
            "before:absolute before:inset-y-0 before:right-0 before:z-[-1] before:w-[51%] before:origin-left before:scale-x-0 before:bg-primary  before:transition-transform before:duration-300 before:ease-in-out",
            "after:absolute after:inset-y-0 after:left-0 after:z-[-1] after:w-[51%] after:origin-right after:scale-x-0 after:bg-primary  after:transition-transform after:duration-300 after:ease-in-out",
            "hover:before:scale-x-100 hover:after:scale-x-100 hover:text-white"
          )}
          variant={"default"}
        >
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default Register;
