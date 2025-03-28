import React from "react";
import DatePicker from "react-datepicker";

const DatesPicker = ({ date, setDate }: any) => {
  return (
    <div className="border flex items-center px-3 py-2 rounded-md w-[215px] ">
      <DatePicker
        selected={date}
        onChange={(date) => setDate(date)}
        className="outline-none"
        placeholderText="Select Date"
      />
    </div>
  );
};

export default DatesPicker;
