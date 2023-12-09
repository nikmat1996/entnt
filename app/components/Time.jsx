import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
  getHours,
  addHours,
  startOfHour,
  startOfDay,
  compareAsc,
  isSameHour,
} from "date-fns";

const Time = ({ day = Date.now(), setFinalSchedule = () => {} }) => {
  const currTime = new Date();
  const nextTime = addHours(currTime, 1);
  const nextHr = format(nextTime, "h");
  const currMeridiem = format(nextTime, "a");

  const [selectedHr, setSelectedHr] = useState();
  const [meridiem, setMeridiem] = useState(
    currMeridiem === "PM" ? false : true,
  );

  const getNewDate = (hr) => {
    const totalHours = hr + (meridiem ? 0 : 12);
    const date = addHours(startOfDay(day), totalHours);
    return date;
  };

  useEffect(() => {
    if (!isToday(day)) {
      setSelectedHr(false);
      setFinalSchedule(false)
      // if(selectedHr)
      //   setFinalSchedule(getNewDate(selectedHr))
    }
  }, [day]);

  // console.log(totalHours)
  // console.log(format(day, "dd MM yyyy KK mm a"))
  // console.log(format(startOfDay(day), "dd MM yyyy KK mm a"))
  // console.log(format(date, "h"))

  // console.log(format(date, "dd MM yyyy KK mm a"))

  const getClassname = (hr) => {
    let radius = 100;
    let angle = (hr * Math.PI) / 6;
    let x = Math.round(radius * Math.sin(angle));
    let y = Math.round(radius * Math.cos(angle));

    return `translate-x-[${x}px] -translate-y-[${y}px]`;
  };

  const handleClick = (hr) => {
    setSelectedHr(hr)
    setFinalSchedule(getNewDate(hr))
  }

  const toggleMeridiem = () => {
    setMeridiem((prev) => !prev);
    setSelectedHr(false);
    setFinalSchedule(false)
  };
  return (
    <div className="relative flex aspect-square h-96 items-center justify-center ">
      {Array.from({ length: 12 }, (_, index) => index + 1).map((hr) => {
        return (
          <button
            key={index}
            onClick={() => handleClick(hr)}
            className={twMerge(
              "absolute aspect-square h-9 rounded-full text-sky-600 hover:outline",
              getClassname(hr),
              selectedHr == hr && "bg-blue-600 text-white outline-none",
              isToday(day) &&
                compareAsc(getNewDate(hr), Date.now()) === -1 &&
                "pointer-events-none text-sky-800",
              isToday(day) &&
                isSameHour(getNewDate(hr), nextTime) &&
                " text-red-500",
              isToday(day) &&
                isSameHour(getNewDate(hr), nextTime) &&
                selectedHr == hr &&
                " bg-red-500 text-white",
            )}
          >
            {hr}
          </button>
        );
      })}
      <button
        onClick={toggleMeridiem}
        className="rounded-full bg-blue-600 p-2 text-base text-white outline-none hover:outline"
      >
        {meridiem ? "AM" : "PM"}
      </button>
    </div>
  );

  // return (
  //   <div class="relative flex aspect-square w-80 items-center justify-center ">
  //     <button
  //       className={`${
  //         selectedHr == 1 ? "bg-blue-600 text-white" : "text-sky-600"
  //       } absolute aspect-square h-9 -translate-y-[87px] translate-x-[50px] rounded-full hover:outline`}
  //     >
  //       1
  //     </button>
  //     <button
  //       className={`${
  //         selectedHr == 2 ? "bg-blue-600 text-white" : "text-sky-600"
  //       } absolute aspect-square h-9 -translate-y-[50px] translate-x-[87px] rounded-full hover:outline`}
  //     >
  //       2
  //     </button>
  //     <button
  //       className={`${
  //         selectedHr == 3 ? "bg-blue-600 text-white" : "text-sky-600"
  //       } absolute aspect-square h-9 -translate-y-[0px] translate-x-[100px] rounded-full hover:outline`}
  //     >
  //       3
  //     </button>
  //     <button
  //       className={`${
  //         selectedHr == 4 ? "bg-blue-600 text-white" : "text-sky-600"
  //       } absolute aspect-square h-9 -translate-y-[-50px] translate-x-[87px] rounded-full hover:outline`}
  //     >
  //       4
  //     </button>
  //     <button
  //       className={`${
  //         selectedHr == 5 ? "bg-blue-600 text-white" : "text-sky-600"
  //       } absolute aspect-square h-9 -translate-y-[-87px] translate-x-[50px] rounded-full hover:outline`}
  //     >
  //       5
  //     </button>
  //     <button
  //       className={`${
  //         selectedHr == 6 ? "bg-blue-600 text-white" : "text-sky-600"
  //       } absolute aspect-square h-9 -translate-y-[-100px] translate-x-[0px] rounded-full hover:outline`}
  //     >
  //       6
  //     </button>
  //     <button
  //       className={`${
  //         selectedHr == 7 ? "bg-blue-600 text-white" : "text-sky-600"
  //       } absolute aspect-square h-9 -translate-y-[-87px] translate-x-[-50px] rounded-full hover:outline`}
  //     >
  //       7
  //     </button>
  //     <button
  //       className={`${
  //         selectedHr == 8 ? "bg-blue-600 text-white" : "text-sky-600"
  //       } absolute aspect-square h-9 -translate-y-[-50px] translate-x-[-87px] rounded-full hover:outline`}
  //     >
  //       8
  //     </button>
  //     <button
  //       className={`${
  //         selectedHr == 9 ? "bg-blue-600 text-white" : "text-sky-600"
  //       } absolute aspect-square h-9 -translate-y-[0px] translate-x-[-100px] rounded-full hover:outline`}
  //     >
  //       9
  //     </button>
  //     <button
  //       className={`${
  //         selectedHr == 10 ? "bg-blue-600 text-white" : "text-sky-600"
  //       } absolute aspect-square h-9 -translate-y-[50px] translate-x-[-87px] rounded-full hover:outline`}
  //     >
  //       10
  //     </button>
  //     <button
  //       className={`${
  //         selectedHr == 11 ? "bg-blue-600 text-white" : "text-sky-600"
  //       } absolute aspect-square h-9 -translate-y-[87px] translate-x-[-50px] rounded-full hover:outline`}
  //     >
  //       11
  //     </button>
  //     <button
  //       className={`${
  //         selectedHr == 12 ? "bg-blue-600 text-white" : "text-sky-600"
  //       } absolute aspect-square h-9 -translate-y-[100px] translate-x-[0px] rounded-full hover:outline`}
  //     >
  //       12
  //     </button>
  //     <button className="text-lg font-semibold text-sky-600">{meridiem}</button>
  //   </div>
  // );
};


export default Time