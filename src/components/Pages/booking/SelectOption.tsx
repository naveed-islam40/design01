import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectOptions({ options, value }: any) {
  return (
    <Select>
      <SelectTrigger className="w-[215px] py-5">
        <SelectValue placeholder={value} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="">
          {options?.map((option: any, index: number) => (
            <div key={index} className="hover:bg-gray-100 rounded-md">
              <SelectItem value={option}>{option}</SelectItem>
            </div>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
