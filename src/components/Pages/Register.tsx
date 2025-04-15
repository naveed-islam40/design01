import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const Register = () => {
  return (
    <div className="bg-[#EDF2FF] px-4 py-10 md:px-20 flex flex-col screen_1k:flex-row items-center justify-between gap-6 screen_1k:gap-2 h-full screen_1k:h-[50vh]">
      {/* Left Text Content */}
      <div className="text-center md:text-left max-w-lg">
        <h1 className="text-2xl font-semibold">Sign up for newsletter</h1>
        <p className="text-gray-600 mt-2">
          Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu, homero
          alterum.
        </p>
      </div>

      {/* Right Form */}
      <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
        <input
          type="email"
          placeholder="Your email address"
          className="py-2 px-4 rounded-md w-full sm:w-[20rem] border"
        />
        <Button
          className={cn(
            "group relative isolate overflow-hidden rounded-md bg-blue-600 px-3 text-white py-3 w-full sm:w-[10rem]",
            "before:absolute before:inset-y-0 before:right-0 before:z-[-1] before:w-[51%] before:origin-left before:scale-x-0 before:bg-[#333333] before:transition-transform before:duration-300 before:ease-in-out",
            "after:absolute after:inset-y-0 after:left-0 after:z-[-1] after:w-[51%] after:origin-right after:scale-x-0 after:bg-[#333333] after:transition-transform after:duration-300 after:ease-in-out",
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
