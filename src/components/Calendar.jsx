import React, { useContext } from "react";
import { CalendarDate, CaretUp } from "react-bootstrap-icons";
import { calendarItems } from "../constants/index";
import { TodoContext } from "../context";

const Calendar = () => {
  const { setSelectedProject } = useContext(TodoContext);

  return (
    <div className="p-4 border-b-2 border-blue-100">
      <div className="flex items-center">
        <div className="flex items-center flex-1">
          <CalendarDate />
          <p className="ml-1.5 font-bold text-[1.1rem]">Calendar</p>
        </div>
        <div className="rounded-[50%] cursor-pointer w-6 h-6 flex items-center justify-center hover:bg-slate-100 transition-all">
          <CaretUp />
        </div>
      </div>
      <div className="p-[1.5rem]">
        {calendarItems.map((item) => (
          <div
            className="p-2 m-1 text-base cursor-pointer"
            key={item}
            onClick={() => setSelectedProject(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
