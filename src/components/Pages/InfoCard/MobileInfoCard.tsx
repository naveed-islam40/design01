import React from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaArrowRight } from "react-icons/fa6";

export function MobileInfoCard({ card }: any) {
  return (
    <Dialog>
      <DialogTrigger
        asChild
        className="ml-4 bg-blue-600 rounded-[5px] text-white py-6 px-10 hover:border-blue-600 shadow-md hover:text-blue-600 transition ease-in-out duration-500"
      >
        <Button variant="outline">{card?.title}</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] bg-blue-600 border-blue-600 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl">{card?.subtitle}</DialogTitle>
          <DialogDescription className="text-[16px]">
            {card?.description}
          </DialogDescription>
          {card.details && (
            <ul className="mt-2">
              {card.details.map((detail: any, i: number) => (
                <li key={i} className="flex justify-between">
                  <span>{detail.label}</span>
                  <span>{detail.time}</span>
                </li>
              ))}
            </ul>
          )}
        </DialogHeader>
        <div className="grid gap-4 py-4"></div>
        <DialogFooter>
          <div className="mt-4 font-semibold items-center flex gap-2 cursor-pointer relative overflow-hidden group w-max">
            LEARN MORE
            <FaArrowRight />
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gray-50 transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
